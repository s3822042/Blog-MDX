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
  FormLabel,
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
        queryKey: [
          ["signUpNewsletter"],
          { input: { limit: 10, page: 1 }, type: "query" },
        ],
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="type your email here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Sign up for newsletter</Button>
      </form>
    </Form>
  )
}
