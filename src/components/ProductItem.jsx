//

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const ProductItem = ({ item }) => {
  return (
    <div className="flex-1 m-2 min-w-[280px] h-80 flex items-center justify-center relative bg-sky-100">
      <div className="w-52 h-52 rounded-full bg-white absolute"></div>
      <img src={item.img} alt="product" className="h-3/4 z-10" />
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 z-20 flex items-center justify-center opacity-0 hover:opacity-100 duration-200 transition-opacity cursor-pointer">
        <div className="icon">
          <ShoppingCartOutlined />
        </div>

        <div className="icon">
          <SearchOutlined />
        </div>

        <div className="icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
