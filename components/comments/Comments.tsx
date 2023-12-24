import React, { useEffect, useState } from "react";

import useSWR from "swr";

import fetcher from "utils/helper";

const Comment: React.FC<CommentProps> = ({ postId }) => {
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  const { data: comments, mutate } = useSWR<Comment[]>(
    `/api/comments/list?postId=${postId}`,
    fetcher,
  );

  const handleCommentSubmit = async () => {
    try {
      const response = await fetch("/api/comments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newComment, postId, userName }),
      });

      if (response.ok) {
        // Trigger a re-fetch of comments after submitting a new comment
        await mutate();
        setNewComment("");
        setUserName("");
      } else {
        console.error("Error submitting comment:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  useEffect(() => {
    // Fetch comments when the postId changes
    mutate();
  }, [postId]);

  return (
    <div id="comment" className="px-6">
      <h3 className="mb-2 block text-xl font-semibold text-gray-600 dark:text-white">
        Add Comment
      </h3>
      <div className="mt-3 flex items-center justify-between">
        <div className="w-3/4 pr-4">
          <textarea
            className="w-full rounded border border-gray-300 p-3 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </div>
        <div className="w-1/4">
          <label className="mb-2 block text-sm font-semibold text-gray-600 dark:text-white">
            Display Name (Optional)
          </label>
          <input
            type="text"
            className="w-full rounded border border-gray-300 p-2 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <button
        className="focus:shadow-outline-indigo mt-3 rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none dark:bg-gray-800"
        onClick={handleCommentSubmit}
      >
        Post Comment
      </button>
      <div className="mt-6">
        <h3 className="mb-4 text-xl font-semibold">Comments</h3>
        {comments?.length === 0 ? (
          <p className="text-gray-500 dark:text-white">No comments yet.</p>
        ) : (
          comments?.map((comment) => (
            <div key={comment.id} className="mb-4">
              <p className="text-gray-800 dark:text-white">
                {comment.userName}: {comment.content}
              </p>
              <p className="text-sm text-gray-500 dark:text-white">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comment;
