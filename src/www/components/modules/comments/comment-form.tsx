"use client"

import React, { useState } from "react"

import { queryClient } from "@/lib/query-client"
import { Heading } from "@/components/elements/heading"
import { trpc } from "@/app/_trpc/client"

interface CommentSectionProps {
  id: string
}

export function CommentForm(props: CommentSectionProps) {
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({ articleId, nickname, content, email })
  }

  return (
    <div className="max-w-3xl py-8 md:py-10 lg:py-12">
      <Heading as="h2" size="3xl">
        Share your thoughts
      </Heading>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="comment" className="mb-2 mt-6 block text-lg">
            Comment
          </label>
          <textarea
            id="comment"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Your comment"
            className="w-full border p-4"
            value={content}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 mt-6 block text-lg">
            Email
          </label>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            className="w-full border p-4"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="nickname" className="mb-2 mt-6 block text-lg">
            Nickname
          </label>
          <input
            id="nickname"
            onChange={(e) => setNickname(e.target.value)}
            type="text"
            placeholder="Your nickname"
            className="w-full border p-4"
            value={nickname}
          />
        </div>
        <button className="mt-6 bg-slate-700 p-4 text-white" type="submit">
          Send comment
        </button>
      </form>
    </div>
  )
}
