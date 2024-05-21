// types.ts
export interface Tag {
  slug: string;
}

export interface Node {
  id: number;
  name: string;
  tags: Tag[];
}
