"use client";
//use client lo que le decimos es que no lo renderize en el servidor que lo renderize en el browser del cliente

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio"

const AdminPage = () => {
   return <NextStudio config={config} />
}
export default AdminPage