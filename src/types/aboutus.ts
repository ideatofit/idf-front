export type AboutUs = {
  data: {
    id: number;
    attributes: {
      aboutus: string
      otherContent: null | string;
      createdAt: string
      updatedAt: string
      publishedAt: string
      coverImage:{
        data:{
            attributes:{
                url: string
                alternativeText: string
                name: string
                height: number
                width: number
            }
        }
      }
    };
  };
  meta: {};
};

export type AboutUsProps = {
    coverimage: string;
    aboutus: string;
    otherContent: string;
}