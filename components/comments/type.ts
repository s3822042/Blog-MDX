interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  userName: string;
}

interface CommentProps {
  postId: number;
}
