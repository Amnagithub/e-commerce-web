
import axios from "axios";

import { createClient } from 'next-sanity'


 const client = createClient({
  projectId: '6dpg6v5q' ,
  dataset : 'production',
  apiVersion: '2022-03-25',
  token:'sks7qIDu8lUbABjvnT6A7kWhE4nMVbjNAKnTBRuR4M3HrTOI0gMSymU9E36lTLyDEpbrO7FefKyc98Kq3FJA5UZ4eBrMBy8NfzzQaHTfgZVxjBYlHviQuHeohL8Rwy0TJJprShtORd97OPp65ZXiGMEm9cQNUeObg7nhz0OqbKXNWur8SVCD',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export default async function handler(req:any, res:any) {
    try {
      // Fetch data from the API
      const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');
  
  
      // Insert each product into Sanity
      for (const products of data) {
        await client.create({
          _type: 'products',
          id: products.id,
          name: products.name,
          imagePath: products.imagePath,
          price: parseFloat(products.price),
          description: products.description,
          discountPercentage: products.discountPercentage,
          isFeaturedProduct: products.isFeaturedProduct,
          
          category: products.category,
        });
      }
  
  
      res.status(200).json({ message: 'Data inserted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch or insert data' });
    }
  }
  