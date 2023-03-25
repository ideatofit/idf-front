export type Comment = {
    data: {
      id: number;
      author: {
        id: number;
        name: string;
        avatar: string;
      };
      content: string;
      createdat: string;
    }[];
  };