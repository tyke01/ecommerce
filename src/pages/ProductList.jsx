//
import {
  Navbar,
  Announcement,
  Products,
  Newsletter,
  Footer,
} from "../components";

const ProductList = () => {
  return (
    <main className="w-full">
      <div className="w-full">
        <Announcement />
        <Navbar />
      </div>
      <h1 className="m-5 text-4xl font-bold">Dresses</h1>
      <div className="flex justify-between">
        <div className="filter flex gap-2">
          <span className="text-xl font-semibold">Filter Products:</span>
          <div className="flex items-center gap-2">
            <select
              name=""
              id=""
              className="bg-gray-200 px-1 py-1 rounded-md cursor-pointer outline-none"
            >
              <option disabled selected className="option">
                color
              </option>
              <option className="option">White</option>
              <option className="option">Black</option>
              <option className="option">Red</option>
              <option className="option">Blue</option>
              <option className="option">Yellow</option>
              <option className="option">Green</option>
            </select>
            <select className="bg-gray-200 px-1 py-1 rounded-md cursor-pointer outline-none">
              <option disabled selected className="option">
                Size
              </option>
              <option className="option">XS</option>
              <option className="option">S</option>
              <option className="option">M</option>
              <option className="option">L</option>
              <option className="option">XL</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">Sort Products</span>
          <div>
            <select className="bg-gray-200 px-1 py-1 rounded-md cursor-pointer outline-none">
              <option selected>Newest</option>
              <option>Price (asc)</option>
              <option>Pice (desc)</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <Products />

        <Newsletter />

        <Footer />
      </div>
    </main>
  );
};

export default ProductList;
