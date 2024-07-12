export const ProductViewImg = ({ imgSrc }) => {
  return (
    <div className="h-screen overflow-auto product-slider">
      <div className="grid grid-cols-1 gap-1">
        {imgSrc.map((imageSrc, index) => {
          if (imageSrc) {
            return (
              <img
                key={index}
                src={import.meta.env.VITE_IMG_STORAGE + imageSrc.image}
                alt={imgSrc.product_name}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
