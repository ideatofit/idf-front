export type StoreTypes = {
  data: {
    id: number
    attributes: {
      createdAt: string
      updatedAt: string
      publishedAt: string
      title: string
      button: true;
      textonbutton: string
      redirectTo: string
      coverImage: {
        data: {
          id: number
          attributes: {
            name: string
            alternativeText: null | string;
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
      sections: [
        {
          id: number
          title: string
          img: {
            data: {
              id: number
              attributes: {
                name: string
                alternativeText: null | string;
                caption: null | string;
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
                previewUrl: null | string;
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
          Storeproducts: [
            {
              id: number
              category: string
              products: {
                data: [
                  {
                    id: number
                    attributes: {
                      title: string
                      slug: string
                      createdAt: string
                      updatedAt: string
                      publishedAt: string
                      stars: number
                      price: number
                      img: {
                        data: {
                          id: number
                          attributes: {
                            name: string
                            alternativeText: null | string;
                            caption: null | string;
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
                            previewUrl: null | string;
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
                      affiliates: [
                        {
                          id: number
                          name: string
                          link: string
                        }
                      ];
                    };
                  }
                ];
              };
            },
          ];
        }
      ];
      slides: [
        {
          id: number
          link: string
          img: {
            data: {
              id: number
              attributes: {
                name: string
                alternativeText: null | string;
                caption: null | string;
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
                previewUrl: null | string;
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
        },
      ];
    };
  };
  meta: {};
};

export type StoreProps = {
  banner: {
    title: string;
    button: boolean;
    textonbutton: string;
    target: string;
    coverimage: string;
    alt: string;
    height: number;
    width: number;
  };
  sections: {
    title: string;
    img: {
      url: string;
      height: number;
      width: number;
    };
    'min-price': number
    "sub-category": {
      category: string;
      products: {
        name: string;
        price: number;
        affiliate: {
          name: string;
          link: string;
        }[];
        img: string;
        stars: number;
      }[];
    }[];
  }[];
  slides: {
    img: {
      url: string;
      height: number;
      width: number;
    };
    link: string;
  }[];
};
