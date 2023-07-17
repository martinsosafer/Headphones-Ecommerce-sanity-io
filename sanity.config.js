import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import banner from "./sanity/schemas/banner";
import products from "./sanity/schemas/products";


const config = defineConfig({

  projectId: "ir4mx0wx",
  dataset: "production",
  title: "Headphones Ecommerce",
  apiVersion: "2023-06-14",
  basePath: "/admin",
  plugins: [deskTool()],
  schema:{types:[products,banner]}
})

export default config