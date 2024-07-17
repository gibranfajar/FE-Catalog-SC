import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const ProductViewDetail = ({ productDetail, dataSizes, dataColor }) => {
  const location = useLocation();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const queryParams = new URLSearchParams(location.search);
  const selectedColorFromURL = queryParams.get("color");

  useEffect(() => {
    if (selectedColorFromURL) {
      setSelectedColor(selectedColorFromURL);
    } else {
      setSelectedColor(productDetail.color);
    }
  }, [selectedColorFromURL, productDetail]);

  const handleColorChange = (colorId) => {
    setSelectedColor(colorId);
  };

  const handleSizeChange = (sizeId) => {
    setSelectedSize(sizeId);
  };

  const formatRupiah = (number) => {
    if (number === undefined || number === null) {
      return "0"; // atau bisa mengembalikan string kosong atau pesan error sesuai kebutuhan
    }
    return number.toLocaleString("id-ID");
  };

  return (
    <div className="mx-5 md:mx-16 my-5 md:my-10">
      <div className="lg:grid grid-cols-4 gap-6">
        <p className="uppercase text-xs small">Item</p>
        <h1 className="text-xl col-span-3 text-right">
          {productDetail.product_name}
        </h1>
      </div>

      <div className="flex justify-between items-center w-full my-10">
        <p className="text-xs small uppercase">Price</p>

        {productDetail.price_disc !== 0 ? (
          <div className="text-right mx-2">
            <span className="opacity-30 line-through pr-2 text-sm">
              IDR {formatRupiah(productDetail.price)}
            </span>
            <span className="text-sm">
              IDR {formatRupiah(productDetail.price_disc)}
            </span>
          </div>
        ) : (
          <span className="no-discount text-sm mx-2">
            IDR {formatRupiah(productDetail.price)}
          </span>
        )}
      </div>

      <div className="my-10">
        <div className="w-full">
          <p className="text-xs small uppercase">Color</p>
          <div className="text-right">
            {dataColor.map((article) => (
              <label key={article.id} className="mx-2 select-label">
                <a
                  href={`/product/${article.product_slug}/${article.article_name}`}
                >
                  <input
                    type="radio"
                    name="color"
                    value={article.color}
                    checked={selectedColor === article.color}
                    onChange={() => handleColorChange(article.color)}
                  />
                  <span
                    className={
                      selectedColor === article.color ? "active-color" : ""
                    }
                  >
                    {article.color}
                  </span>
                </a>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="w-full">
          <p className="text-xs small uppercase">Size</p>
          <div className="text-end">
            {dataSizes.map((sizeItem) => (
              <label key={sizeItem.id} className="mx-2 select-label">
                <input
                  type="radio"
                  name="size"
                  value={sizeItem.size}
                  checked={selectedSize === sizeItem.size}
                  onChange={() => handleSizeChange(sizeItem.size)}
                />
                <span
                  className={
                    selectedSize === sizeItem.size ? "active-size" : ""
                  }
                >
                  {sizeItem.size}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-0 pb-0 mb:mb-5 mb:pb-5">
        <Link to={`/`}>
          <button className="btn btn-block rounded-full justify-center bg-stone-900 text-white">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};
