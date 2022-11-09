export interface ICreatePost {
  title: string;
  description: string;
  tag?: string;
  content: string;
  slug: string;
  user: string;
  category: number;
}

export interface IUpdatePost {
  title?: string;
  description?: string;
  tag?: string;
  content?: string;
  slug?: string;
  category?: string;
}
