"use client";
import React, { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await client.fetch(groq`
        *[_type == "product"]
        {
name,
"images": images[].asset->url,
price,
  slug,
  description,
  _id,
  reviews,
  rate,
  }
        `);
      const product = products.find(
        (product: any) => product.slug.current === slug
      );
      setProduct(product);
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
   
      <ProductDetails product={product} />
    </>
  );
};

export default ProductPage;
