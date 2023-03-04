import qs from "qs";

type FilteredTestimonialData = {
  img: string
}

export type TransformationData = {

}

export default async function getTransformationData() {
  const query = qs.stringify({
    populate: '*'
  })
  try {
    let url = await `${process.env.PUBLIC_URL}/api/transformations?${query}`;
    let fetchedTestimonialData = await fetch(url);
    let parsedTestimonialData = await fetchedTestimonialData.json();
    return parsedTestimonialData;
  } catch (err) {
    console.error(err);
  }
}
