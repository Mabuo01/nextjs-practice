import PostCard from "./PostCard";

export default function PostList() {
  return (
    <div className="grid grid-cols-4 gap-4 hover:grid-cols-2">
      <PostCard title="post1" desc="test1" />
      <PostCard title="post1" desc="test1" />
    </div>
  );
}
