// data.ts
import { Node } from "./types";

export const DATA: Node[] = [
  {
    id: 1,
    name: "Node 1",
    tags: [{ slug: "tag1" }, { slug: "tag2" }],
  },
  {
    id: 2,
    name: "Node 2",
    tags: [{ slug: "tag2" }, { slug: "tag3" }],
  },
  {
    id: 3,
    name: "Node 3",
    tags: [{ slug: "tag1" }, { slug: "tag3" }],
  },
];
