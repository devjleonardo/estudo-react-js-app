import { PostObject } from "./Post";

interface SidebarProps {
  post: PostObject;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div>
      <p>O post do momento é {props.post.title}</p>
    </div>
  );
}
