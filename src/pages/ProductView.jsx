import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductViewImg } from "../components/ProductViewImg";
import { ProductViewDetailL } from "../components/ProductViewDetailL";
import { ProductViewDetail } from "../components/ProductViewDetail";
import { ProductViewCta } from "../components/ProductViewCta";
import { Layout } from "../layouts/Layout";

export const ProductView = () => {
  const { productSlug, productSku } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [dataSizes, setDataSizes] = useState([]);
  const [dataColor, setDataColor] = useState([]);
  const [dataImages, setDataImages] = useState([]);
  const [relateProduct, setRelateProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cms-catalog.clcs.co.id/api/products-detail/${productSlug}/${productSku}`
      )
      .then((res) => {
        setProductDetail(res.data.productDetail);
        setDataSizes(res.data.data_sizes);
        setDataColor(res.data.data_article);
        setDataImages(res.data.data_images);
        setRelateProduct(res.data.productRelated);
      })
      .catch((error) => {
        console.error("Error fetching product detail:", error);
      });
  }, [productSku, productSlug]);

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-5 h-full">
        <div className="col-span-1 text-sm order-last md:order-first">
          <ProductViewDetailL
            productDetail={productDetail}
            imgSrc={dataImages}
          />
        </div>
        <div className="col-span-1 text-sm">
          <ProductViewImg imgSrc={dataImages} />
        </div>
        <div className="col-span-1 text-sm">
          <ProductViewDetail
            productDetail={productDetail}
            dataSizes={dataSizes}
            dataColor={dataColor}
            imgSrc={dataImages}
          />
        </div>
      </div>
      <div className="block">
        <ProductViewCta relateProduct={relateProduct} />
      </div>
    </Layout>
  );
};
