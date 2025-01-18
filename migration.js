const axios = require("axios"); // Import Axios for HTTP requests
import { client } from "./src/sanity/lib/client";

// Define the handler function
const handler = async (req, res) => {
  try {
    // Fetch data from the external API
    const { data } = await axios.get("https://template-0-beta.vercel.app/api/product");

    // Loop through the products and insert them into Sanity
    for (const product of data) {
      await client.create({
        _type: "products", // Define the document type
        id: product.id, // Product ID
        name: product.name, // Product name
        imagePath: product.imagePath, // Image path
        price: parseFloat(product.price), // Product price
        description: product.description, // Product description
        discountPercentage: product.discountPercentage, // Discount percentage
        isFeaturedProduct: product.isFeaturedProduct, // Is featured
        category: product.category, // Product category
      });
    }

    // Respond with a success message
    res.status(200).json({ message: "Data inserted successfully!" });
  } catch (error) {
    console.error("Error inserting data:", error); // Log any errors
    res.status(500).json({ error: "Failed to fetch or insert data" }); // Respond with an error
  }
};


