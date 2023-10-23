//

import { Add, Remove } from "@mui/icons-material";
import { Announcement, Footer, Navbar, Newsletter } from "../components";
import { useState } from "react";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <main className="">
      <Announcement />
      <Navbar />

      <div className="flex p-12 h-full border-2">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt="jeans"
            className=" h-[90vh] w-full object-cover flex-1"
          />
        </div>

        <div className="flex-1 px-12">
          <h1 className="text-4xl font-extralight">Denim Jumpsuit</h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            laborum officiis totam nostrum aperiam aut ipsa! Neque aliquid
            repudiandae hic repellat reprehenderit minima quos, nobis aut
            assumenda quasi architecto impedit dolorem quaerat est repellendus
            vitae similique, necessitatibus pariatur eius ex.
          </p>
          <span className="font-thin text-4xl">KSH 2000</span>

          <div className="w-1/2 flex justify-between my-8">
            <div className=" flex items-center gap-2">
              <h3 className="text-xl font-extralight">Color</h3>
              <div className="bg-black h-5 w-5 rounded-full cursor-pointer"></div>
              <div className="bg-blue-700 h-5 w-5 rounded-full cursor-pointer"></div>
              <div className="bg-gray-400 h-5 w-5 rounded-full cursor-pointer"></div>
            </div>
            <div className="size flex items-center gap-2">
              <h3 className="text-xl font-extralight">Size</h3>
              <select className="flex items-center p-1 cursor-pointer outline-none bg-gray-200">
                <option selected>Xs</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>Xl</option>
              </select>
            </div>
          </div>

          <div className="flex items-center w-1/2 justify-between">
            <div className="flex items-center font-bold ">
              <span
                className="cursor-pointer math-btn"
                onClick={handleSubtract}
              >
                <Remove />
              </span>
              <span className="mx-2">
                {quantity}{" "}
                <span className="text-sm text-gray-400 ml-[2px]">item(s)</span>
              </span>
              <span className="cursor-pointer math-btn" onClick={handleAdd}>
                <Add />
              </span>
            </div>

            <button className="bg-teal-600 p-2 hover:opacity-95 text-white">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </main>
  );
};

export default SingleProduct;
