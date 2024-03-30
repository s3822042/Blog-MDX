import { ViewsInput } from "@/server/api/views/views-schema"
import { prisma } from "@/server/prisma"
import { TRPCError } from "@trpc/server"

export const increaseViewCountHandler = async ({
  input,
}: {
  input: ViewsInput
}) => {
  try {
    const { slug } = input

    let view = await prisma.views.findUnique({
      where: { slug },
    })

    if (!view) {
      view = await prisma.views.create({
        data: {
          slug,
          count: 1,
        },
      })
    } else {
      view = await prisma.views.update({
        where: { slug },
        data: {
          count: {
            increment: 1,
          },
        },
      })
    }

    return {
      status: "success",
      data: {
        slug,
        view,
      },
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
}

export const getViewsHandler = async ({ input }: { input: ViewsInput }) => {
  try {
    const { slug } = input

    const views = await prisma.views.findUnique({
      where: { slug },
    })

    return {
      status: "success",
      data: {
        views: views?.count || 0,
        slug,
      },
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
}
