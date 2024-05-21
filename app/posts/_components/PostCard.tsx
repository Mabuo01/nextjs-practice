type PostCardProps = {
  title: string;
  desc: string;
};

export default function PostCard(props: PostCardProps) {
  const { title, desc } = props;

  return (
    <div className=" bg-slate-500">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
