import { Link, useLocation } from "react-router-dom";

export const ProductViewCta = ({ relateProduct }) => {
  const productsToShow = relateProduct.filter((item) => {
    const { pathname } = useLocation();
    const currentProductSlug = pathname.split("/")[2];
    const currentProductSku = pathname.split("/")[3];
    return (
      item.product_slug !== currentProductSlug || item.sku !== currentProductSku
    );
  });

  return (
    <>
      <div className="">
        <h3 className="text-2xl text-center font-bold py-10">
          You may also like
        </h3>
        <div className="grid grid-cols-4 gap-2 px-2">
          {productsToShow.slice(0, 4).map((item, index) => (
            <div className="bg-slate-100" key={index}>
              <Link
                to={`/product/${item.product_slug}/${item.article_name}`}
                onClick={window.location.reload}
              >
                <img src={import.meta.env.VITE_IMG_STORAGE + item.image1}></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
