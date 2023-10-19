// * _--------------------_ * //

import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <main className="h-16">
      <div className="py-3 px-5 flex justify-between w-full items-center">
        {/* language */}
        <div className="flex-1 flex items-center">
          <div className=" text-base cursor-pointer">EN</div>
          <div className="border border-gray-300 flex items-center ml-6 ">
            <input type="text" className="outline-none p-1" placeholder="Search"/>
            <span className="bg-gray-200 p-1 text-gray-500">
              <Search />
            </span>
          </div>
        </div>
        {/*  */}

        <div className="flex-1 text-center">
          <h1 className="font-bold text-2xl">TREK.</h1>
        </div>
        {/*  */}
        <div className="flex-1">
          <div className="flex items-center justify-end gap-7">
            <div className="text-sm cursor-pointer">REGISTER</div>
            <div className="text-sm cursor-pointer">SIGN IN</div>
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
