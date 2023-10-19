// *_-------------------_* //
import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <section className="h-[60vh] bg-[#fcf5f5] flex flex-col items-center justify-center ">
      <h1 className="text-7xl font-bold m-7">Newsletter</h1>
      <div className="text-2xl font-light mb-5">
        Get timely updates form your favorite products.
      </div>
      <div className="w-1/2 h-5 bg-white flex justify-between items-center">
        <input type="text" placeholder="Your Email" className="flex-grow pl-5 py-2 outline-none focus:border-b-2 focus:border-b-teal-700" />
        <button className="flex-none w-10 bg-teal-700 text-white py-2">
          <Send />
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
