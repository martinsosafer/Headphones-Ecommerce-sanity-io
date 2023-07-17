import { createClient,groq} from "next-sanity";

export async function getProducts() {
  const client = createClient({
    projectId: "ir4mx0wx",
    dataset: "production",
   
    apiVersion: "2023-06-14"
  })

  //groq query
  return client.fetch(
    groq`*[_type=="product"]{
  _id,
  _createdAt,
  name,
  "slug":slug.current,
  "image": image[].asset->url,
  url,
 
  price,
  details
  
}`
  )
}
export async function getBanner() {
  const client = createClient({
    projectId: "ir4mx0wx",
    dataset: "production",
   
    apiVersion: "2023-06-14"
  })

  //groq query
  return client.fetch(
    groq`*[_type=="banner"]{
  _id,
  _createdAt,
 
  "slug":slug.current,
  "image":image.asset->url,
  url,
  buttonText,
  product,
  price,
  desc,
  smallText,
  midText,
  largeText1,
  largeText2,
  discount,
  saleTime
}`
  )
  
}
export async function getProduct(slug) {
  const client = createClient({
    projectId: "ir4mx0wx",
    dataset: "production",
    apiVersion: "2023-06-14"
  });

  // Groq query
  return client.fetch(groq`
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image[].asset->url,
      url,
      price,
      details
    }
  `, { slug }); // Provide the slug parameter here
}


// estas utils la hacemos para que next sanity pueda leer el contenido de nuestros schemas 