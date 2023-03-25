export type PostsData = {
    data: {
      id: number;
      attributes: {
        title: string;
        description: string;
        slug: string;
        publishedAt: string;
        content: string;
        img: {
          data: {
            attributes: {
              url: string;
              name: string;
            };
          };
        };
        categories: {
          data: {
            id: number;
            attributes: {
              title: string;
              posts: {
                data: {
                  id: number;
                  attributes: {
                    title: string;
                    description: string;
                    slug: string;
                    publishedAt: string;
                    img: {
                      data: {
                        attributes: {
                          url: string;
                        };
                      };
                    };
                  };
                }[];
              };
            };
          }[];
        };
        keywords:{
          data:{
            attributes:{
              keywords: string
            }
          }[]
        }
      };
    }[];
  };
  

export type PostBySlug = {
    id: number;
    title: string;
    description: string;
    publishedat: string;
    modifiedDate: string
    content: string;
    img: string;
    alt: string;
    relations: {
      id: number;
      title: string;
      description: string;
      img: string;
      slug: string;
      publishedat: string;
    }[];
    keywords: string[]
    author: string
    publishername: string
    publisherlogo: string
    isaccessibleforfree: boolean
  };