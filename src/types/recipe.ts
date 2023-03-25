export type RecipesData = {
  data: [
    {
      id:number
      attributes: {
        description: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        recipeCategory: string
        recipeCuisine: string
        cookTime: string
        prepTime: string
        totalTime: string
        recipeInstructions: string[]
        recipeIngredient: string[]
        title: string
        slug: string
        content: string
        authorname: string
        yeild:number
        calories:number
        image: {
          data: {
            id:number
            attributes: {
              name: string
              alternativeText: null;
              caption: null;
              width:number
              height:number
              formats: {
                thumbnail: {
                  ext: string
                  url: string
                  hash: string
                  mime: string
                  name: string
                  path: null;
                  size:number
                  width:number
                  height:number
                  provider_metadata: {
                    public_id: string
                    resource_type: string
                  };
                };
              };
              hash: string
              ext: string
              mime: string
              size:number
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
        keywords: {
          data: [
            {
              id:number
              attributes: {
                keywords: string
                createdAt: string
                updatedAt: string
                publishedAt: string
              };
            }
          ];
        };
        video: {
          id:number
          name: string
          description: string
          contenturl: string
          embedurl: string
          duration:number
          thumbnailurl: string
          hasparts: [
            {
              id:number
              type: string
              name: string
              number:number
              url: string
            }
          ];
          publication: {
            id:number
            type: string
            islivebroadcast: true;
            start: string
            end: null;
          };
        };
        instructions: [
          {
            id:number
            name: string
            text: string
            url: string
          }
        ];
        ingredients: 
          {
            id:number
            text: string
          }[]
        categories: {
          data: [
            {
              id: 1;
              attributes: {
                category: string
                createdAt: string
                updatedAt: string
                publishedAt: string
                recipes: {
                  data: [
                    {
                      id: number
                      attributes: {
                        description: string
                        createdAt: string
                        updatedAt: string
                        publishedAt: string
                        recipeCategory: string
                        recipeCuisine: string
                        cookTime: string
                        prepTime: string
                        totalTime: string
                        recipeInstructions: string[]
                        recipeIngredient: string[]
                        title: string
                        slug: string
                        content: string
                        authorname: string
                        yeild: number
                        calories: number
                        image: {
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
                      };
                    }
                  ];
                };
              };
            }
          ];
        };
      };
    }
  ];
  meta: {
    pagination: {
      page: 1;
      pageSize: 25;
      pageCount: 1;
      total: 1;
    };
  };
};

export type RecipesProps = {
  recipes: {
    title: string;
    description: string;
    img: string;
    vegeterian: boolean;
    slug: string;
  }[];
};

export type RecipeData = {
  id: number;
  title: string;
  description: string;
  slug: string;
  img: string;
  content: string;
  date: string;
  author: string;
  preptime: string;
  cooktime: string;
  totaltime: string;
  yields: string;
  recipeCategory: string;
  cuisine: string;
  calories: number;
  images: string[];
  ingredients: string[];
  instructions: {
    name: string;
    text: string;
    url: string;
  }[];
  // aggregateRating: {
  //   ratingValue: string
  //   ratingCount: string
  // }
  video: {
    name: string;
    description: string;
    contenturl: string;
    embedurl: string;
    uploaddate: string;
    duration: string;
    thumbnailurls: string[];
    haspart: {
      "@type": string;
      name: string;
      startoffset: number | null;
      url: string;
    }[];
    watchcount: number | null;
    publication: {
      "@type": "BroadcastEvent";
      islivebroadcast: boolean;
      startdate: string | null;
      enddate: string | null;
    };
  };
  publishedAt: string;
  relations: {
    id: number;
    title: string;
    description: string;
    slug: string;
    img: string;
    publishedat: string;
    vegeterian: boolean;
  }[];
  keywords: string[];
};
