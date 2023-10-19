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
        <div className="filter">
          <span className="text-xl font-semibold">Filter Products:</span>
          <div>
            <select name="" id="">
              <option disabled selected>color</option>
              <option >White</option>
              <option >Black</option>
              <option >Red</option>
              <option >Blue</option>
              <option >Yellow</option>
              <option >Green</option>
            </select>
          </div>
        </div>
        <div className="text-xl font-semibold">Sort Products:</div>
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
