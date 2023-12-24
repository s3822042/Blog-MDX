import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { postId } = req.query;

  if (req.method === "GET") {
    try {
      const comments = await prisma.comment.findMany({
        where: {
          postId: Number(postId),
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      res.status(200).json(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
