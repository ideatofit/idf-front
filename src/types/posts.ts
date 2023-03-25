export type PostsData = {
  data: [
    {
      id: number
      attributes: {
        title: string
        description: string
        content: string
        slug: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        author: string
        isaccessibleforfree: true;
        img: {
          data: {
            id: number
            attributes: {
              name: string
              alternativeText: null;
              caption: null;
              width: number
              height: number
              formats: {
                thumbnail: {
                  ext: string
                  url: string
                  hash: string
                  mime: string
                  name: string
                  path: null;
                  size: number
                  width: number
                  height: number
                  provider_metadata: {
                    public_id: string
                    resource_type: string
                  };
                };
              };
              hash: string
              ext: string
              mime: string
              size: number
              url: string
              previewUrl: null;
              provider: string
              provider_metadata: {
                public_id: string
                resource_type: string
              };
              createdAt: string
              updatedAt: string
            };
          };
        };
        categories: {
          data: [
            {
              id: number
              attributes: {
                category: string
                posts:{
                  data:{
                    id: number
                    attributes:{
                      title: string
                      description: string
                      content: string
                      slug: string
                      createdAt: string
                      updatedAt: string
                      publishedAt: string
                      author: string
                      isaccessibleforfree: true;
                      img: {
                        data: {
                          id: number
                          attributes: {
                            name: string
                            alternativeText: null;
                            caption: null;
                            width: number
                            height: number
                            formats: {
                              thumbnail: {
                                ext: string
                                url: string
                                hash: string
                                mime: string
                                name: string
                                path: null;
                                size: number
                                width: number
                                height: number
                                provider_metadata: {
                                  public_id: string
                                  resource_type: string
                                };
                              };
                            };
                            hash: string
                            ext: string
                            mime: string
                            size: number
                            url: string
                            previewUrl: null;
                            provider: string
                            provider_metadata: {
                              public_id: string
                              resource_type: string
                            };
                            createdAt: string
                            updatedAt: string
                          };
                        };
                      };
                    }
                  }[]
                }
                createdAt: string
                updatedAt: string
                publishedAt: string
              };
            }
          ];
        };
        keywords: {
          data: [
            {
              id: number
              attributes: {
                keywords: string
                createdAt: string
                updatedAt: string
                publishedAt: string
              };
            }
          ];
        };
      };
    }
  ];
};

export type PostBySlug = {
  id: number;
  title: string;
  description: string;
  date: string
  publishedat: string;
  modifiedDate: string;
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
  keywords: string[];
  author: string;
  publishername: string;
  publisherlogo: string;
  isaccessibleforfree: boolean;
};
