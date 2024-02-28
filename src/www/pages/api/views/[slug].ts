import { NextApiRequest, NextApiResponse } from "next"
import prisma from "lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug as string

  if (req.method === "GET") {
    try {
      const views = await prisma.views.findUnique({
        where: {
          slug,
        },
      })
      res.status(200).json({
        total: views?.count.toString(),
      })
    } catch (e: any) {
      res.status(500).json({ message: e.message })
    }
  } else if (req.method === "POST") {
    try {
      const newOrUpdatedViews = await prisma.views.upsert({
        where: { slug },
        create: {
          slug,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      })
      res.status(200).json({
        total: newOrUpdatedViews.count.toString(),
      })
    } catch (e: any) {
      res.status(500).json({ message: e.message })
    }
  } else {
    return res.status(405).json({ msg: "Method not allowed" })
  }
}
