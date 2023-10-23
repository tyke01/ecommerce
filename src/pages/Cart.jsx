import { Add, Remove } from "@mui/icons-material";
import { Announcement, Footer, Navbar } from "../components";

const Cart = () => {
  return (
    <main>
      <Announcement />
      <Navbar />

      <div className="p-5  min-h-screen ">
        <h1 className="font-light text-center">YOUR CART</h1>
        <div className="top flex items-center justify-between p-5">
          <button className="p-3 font-semibold border-2 border-black">
            CONTINUE SHOPPING
          </button>

          <div className="flex items-center gap-3">
            <p className="underline cursor-pointer">Shooping cart (2)</p>
            <p className="underline cursor-pointer">Wishlist (0)</p>
          </div>

          <button className="p-3 font-semibold bg-black text-white">
            CHECKOUT NOW
          </button>
        </div>

        <div className="flex justify-between">
          <div className="flex-3">
            <hr className="bg-teal-700 h-[1px] mb-2" />

            <div className="flex justify-between ">
              <div className="flex-2 flex ">
                <img
                  src="https://www.pngarts.com/files/2/Shoes-Free-PNG-Image.png"
                  alt="shoe"
                  className="w-52"
                />
                <div className="p-5 flex flex-col justify-between">
                  <h1>
                    <b>Product:</b>COOL SHOES
                  </h1>
                  <span>
                    <b>ID:</b>764626478246q6i
                  </span>
                  <div className="w-5 h-5 rounded-full bg-black" />
                  <span>
                    <b>Size:</b>37.5
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-5">
                  <Add />
                  <span className="text-2xl">1</span>
                  <Remove />
                </div>
                <p className=" text-3xl font-light">KSH 2000.</p>
              </div>
            </div>
            {/* <hr /> */}
            <hr className="bg-teal-700 h-[1.5px] mb-2" />

            <div className="flex justify-between">
              <div className="flex-2 flex ">
                <img
                  src="https://www.pngarts.com/files/2/Shoes-Transparent-Background-PNG.png"
                  alt="shoe"
                  className="w-52"
                />
                <div className="p-5 flex flex-col justify-between">
                  <h1>
                    <b>Product:</b>FIRE SHOES
                  </h1>
                  <span>
                    <b>ID:</b>7672631786GH8246q6i
                  </span>
                  <div className="w-5 h-5 rounded-full bg-gray-400" />
                  <span>
                    <b>Size:</b>42
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-5">
                  <Add />
                  <span className="text-2xl">3</span>
                  <Remove />
                </div>
                <p className=" text-3xl font-light">KSH 1500.</p>
              </div>
            </div>

            <hr className="bg-teal-700 h-[1.5px] mb-2" />
          </div>
          {/* SUMMARY */}
          <div className="flex-1 border border-gray-400 rounded-md p-5 h-[50vh] ml-4 flex flex-col justify-between">
            <h1 className="font-extralight">ORDER SUMMARY</h1>

            <div className="item">
              <p className="item-text">Subtotal</p>
              <span className="item-price"> KSH 6500.</span>
            </div>

            <div className="item">
              <p className="item-text">Estimated Shipping</p>
              <span className="item-price"> KSH 800.</span>
            </div>

            <div className="item">
              <p className="item-text">Shipping discount</p>
              <span className="item-price"> KSH -400.</span>
            </div>

            <div className="item total">
              <p className="item-text">Total</p>
              <span className="item-price"> KSH 6900.</span>
            </div>

            <button className="w-ful p-3 bg-black text-white hover:opacity-95 font-semibold">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Cart;

// https://www.pngarts.com/files/2/Shoes-Transparent-Background-PNG.png
// https://www.pngarts.com/files/2/Shoes-Free-PNG-Image.png
