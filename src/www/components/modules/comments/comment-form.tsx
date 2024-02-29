"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { queryClient } from "@/lib/query-client"
import { Button } from "@/components/elements/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/elements/form"
import { Heading } from "@/components/elements/heading"
import { Input } from "@/components/elements/input"
import { Textarea } from "@/components/elements/textarea"
import { trpc } from "@/app/_trpc/client"

interface CommentSectionProps {
  id: string
}

const formSchema = z.object({
  nickname: z.string().min(2, {
    message: "Nickname must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  content: z.string().min(10, {
    message: "Content must have at least 10 characters.",
  }),
})

export function CommentForm(props: CommentSectionProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "",
      email: "",
      content: "",
    },
  })

  const { id: articleId } = props

  const [content, setContent] = useState("")
  const [email, setEmail] = useState("")
  const [nickname, setNickname] = useState("")

  const { mutate } = trpc.createComment.useMutation({
    onSettled: () => {
      setContent("")
      setNickname("")
      setEmail("")
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [
          ["getComments"],
          { input: { limit: 10, page: 1 }, type: "query" },
        ],
      })
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    mutate({ articleId, nickname, content, email })
  }

  return (
    <div>
      <Heading as="h2" size="3xl" className="my-4">
        Share your thoughts
      </Heading>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nickname</FormLabel>
                <FormControl>
                  <Input placeholder="type your nickname here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="type your comment here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Send comment</Button>
        </form>
      </Form>
    </div>
  )
}
