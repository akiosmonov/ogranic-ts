import { Link, NavLink } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { UseCart } from "@/context/CartContext";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
  ];

  const { cartItems } = UseCart();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm py-4 md:py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-20">
          <Link to={"/"} className="flex items-center gap-2 group">
            <img src="/Logo.svg" alt="" />
            <span className="text-brand-dark text-2xl md:text-3xl font-black font-rob">
              Organick
            </span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-brand-dark font-bold text-sm md:text-base">
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
            className="flex items-center gap-2 border border-[#E0E0E0] rounded-full p-1 pr-3 md:pr-5 hover:border-brand-green transition-all"
            to={"/cart"}
          >
            <div className="bg-brand-dark p-2.5 rounded-full text-white ">
              <IoCartSharp size={22} />
            </div>
            <span className="font-bold text-brand-dark text-sm md:text-base">
              Cart ({cartItems.length}){" "}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
