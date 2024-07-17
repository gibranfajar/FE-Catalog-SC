export const ProductViewDetailL = ({ productDetail, imgSrc }) => {
  return (
    <div className="mx-5 md:mx-16 my-5 md:my-10">
      <div className="mb-6 lg:grid grid-cols-3 gap-6">
        <p className="text-xs small uppercase mb-4">Description</p>
        <div className="col-span-2">
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: productDetail.article_desc }}
            ></p>
          </div>
        </div>
      </div>

      <div className="mb-6 lg:grid grid-cols-3 gap-6">
        <p className="text-xs small uppercase mb-4">Size chart</p>
        <div className="col-span-2">
          <p dangerouslySetInnerHTML={{ __html: productDetail.size_chart }}></p>
        </div>
      </div>

      <div className="mb-6 lg:grid grid-cols-3 gap-6">
        <p className="text-xs small uppercase mb-4">Article</p>
        <div className="col-span-2">
          <p>{productDetail.article_name}</p>
        </div>
      </div>

      <div className="mb-6">
        {imgSrc[1] && (
          <img
            src={import.meta.env.VITE_IMG_STORAGE + imgSrc[1].image}
            alt={imgSrc[1].product_slug}
          />
        )}
      </div>
    </div>
  );
};
