export type AboutUs = {
  data: {
    id: number
    attributes: {
      createdAt: string
      updatedAt: string
      publishedAt: string
      aboutus: [
        {
          id: number
          text: string
          image: {
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
        }
      ];
    };
  };
  meta: {};
};
export type AboutUsProps = {
  text: string;
  image: {
    url: string
    height: number
    width: number
  }
}[]
