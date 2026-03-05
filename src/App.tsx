import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/common/layouts/MainLayouts";
import About from "./components/common/sections/About/About";
import Shop from "./components/common/sections/shop/Shop";
import ShopSingle from "./components/common/sections/ShopSingle/ShopSingle";
import Service from "./components/common/sections/Service/Service";
import Error from "./components/common/pages/Error/Error";
import Licenses from "./components/common/pages/Licenses/Licenses";
import StyleGuide from "./components/common/pages/StyleGuide/StyleGuide";
import PasswordProtect from "./components/common/pages/PasswordProtect/PasswordProtect";
import Hero from "./components/common/sections/Hero/Hero";
import Changelog from "./components/common/pages/Changelog/Changelog";

function App() {
  let routes = [
    {
      name: "hero",
      path: "",
      index: true,
      element: <Hero />,
    },
    {
      name: "about",
      path: "about",
      element: <About />,
    },
    {
      name: "shop",
      path: "shop",
      element: <Shop />,
    },
    {
      name: "shopSingle",
      path: "shopSingle/:productId",
      element: <ShopSingle />,
    },
    {
      name: "serrvice",
      path: "service",
      element: <Service />,
    },
    {
      name: "Error",
      path: "Error",
      element: <Error />,
    },
    {
      name: "Licenses",
      path: 'Licenses',
      element: <Licenses />
    },
    {
      name: "StyleGuide",
      path: "StyleGuide",
      element: <StyleGuide />
    },
    {
      name: 'PasswordProtect',
      path: 'PasswordProtect',
      element: <PasswordProtect />
    },
    {
      name: "Changelog",
      path: 'Changelog',
      element: <Changelog />
    }
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          {routes.map((item) => (
            <Route key={item.name} path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
