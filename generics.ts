// Generics

interface IAuther {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuther[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<String> = {
  id: 1,
  title: "Post 1",
  desc: "Post 1 Description",
  extra: ["test", "test2", "test3"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<IAuther> = {
  id: 1,
  title: "Post 1",
  desc: "Post 1 Description",
  extra: [{ id: 1, username: "test" }],
};

const testMe3: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "Post 1",
  desc: "Post 1 Description",
  extra: [{ id: 1, title: "cat" }],
};
