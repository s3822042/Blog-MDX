"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { queryClient } from "@/lib/query-client"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/elements/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/elements/form"
import { Input } from "@/components/elements/input"
import { trpc } from "@/app/_trpc/client"

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
})

export function NewsletterForm() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const { mutate } = trpc.signUpNewsletter.useMutation({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [["signUpNewsletter"], { type: "query" }],
      })
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    mutate({
      email: values.email,
    })
    toast({
      variant: "success",
      title: "Subscribed successfully!",
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-start sm:flex-row sm:items-center"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4 w-full sm:mb-0 sm:mr-4 sm:w-3/5">
              <FormControl>
                <Input
                  className="h-12 w-full text-lg"
                  placeholder={"Email"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="h-12 w-full rounded-lg text-lg sm:w-1/5 md:-mt-2"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  )
}
