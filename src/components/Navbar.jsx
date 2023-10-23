// * _--------------------_ * //

import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <main className="h-12 w-full md:h-16 ">
      <div className="flex justify-between w-full items-center px-0 py-3 md:py-3 md:px-5 ">
        {/* language */}
        <div className="flex-1 flex items-center">
          <div className=" text-base cursor-pointer hidden lg:block">EN</div>
          <div className="border border-gray-300 flex items-center ml-6 ">
            <input
              type="text"
              className="outline-none p-1 w-16 md:w-full"
              placeholder="Search"
            />
            <span className="bg-gray-200 p-1 text-gray-500">
              <Search />
            </span>
          </div>
        </div>
        {/*  */}

        <div className="flex-1 text-center">
          <h1 className="font-bold text-xl md:text-2xl">TREK.</h1>
        </div>
        {/*  */}
        <div className="flex-2 md:flex-1">
          <div className="flex items-center gap-3 justify-center md:justify-end md:gap-7">
            <div className="cursor-pointer text-xs">REGISTER</div>
            <div className="cursor-pointer text-xs">SIGN IN</div>
            <div className="text-sm cursor-pointer">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </main>
  );
};

export default Navbar;
