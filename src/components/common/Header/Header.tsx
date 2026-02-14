import { useProductStore } from "@/store/useProductStore";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { IoCartSharp } from "react-icons/io5";
import Shop from "../sections/shop/Shop";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
  ];
  const products = useProductStore((state) => state.products);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className=" flex items-center  gap-20">
          <Link to={"/"} className="flex items-center gap-2 group">
            <img src="/Logo.svg" alt="" />
            <span className="text-brand-dark text-3xl font-black font-rob">
              Organick
            </span>
          </Link>
          <nav className=" flex gap-8 text-brand-dark font-bold">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-brand-green transition-colors ${isActive ? "text-brand-green" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className=" flex items-center gap-2 border border-[#E0E0E0] rounded-full p-1 pr-5 hover:border-brand-green transition-all "
            to={"/"}
          >
            <div className="bg-brand-dark p-2.5 rounded-full text-white ">
              <IoCartSharp size={26} />
            </div>
            <span className="font-bold text-brand-dark">
              Cart ({products.length}){" "}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
