import qs from "qs";

type FilteredTestimonialData = {
  img: string
}

export default async function getTestimonialData() {
  const query = qs.stringify({
    populate:['img']
  })
  try {
    let url = await `${process.env.PUBLIC_URL}/testimonials?${query}`;
    let fetchedTestimonialData = await fetch(url);
    let parsedTestimonialData = await fetchedTestimonialData.json();
    return parsedTestimonialData;
  } catch (err) {
    console.error(err);
  }
}
