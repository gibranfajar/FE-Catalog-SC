import { useEffect, useState } from "react";
import { ProductGrid } from "../components/ProductGrid";
import { Layout } from "../layouts/Layout";
import axios from "axios";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cms-catalog.clcs.co.id/api/products"
        );
        setProducts(response.data.product_data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <ProductGrid products={products} />
    </Layout>
  );
};
