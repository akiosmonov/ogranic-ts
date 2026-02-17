import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { MainLayout } from "./components/common/layouts/MainLayouts";
import About from "./components/common/sections/About/About";
import Shop from "./components/common/sections/shop/Shop";
import ShopSingle from "./components/common/sections/ShopSingle/ShopSingle";
import Service from "./components/common/sections/Service/Service";

function App() {
  let routes = [
    {
      name: "home",
      path: "",
      index: true,
      element: <Home />,
    },
    {
      name: "about",
      path: "about",
      element: <About />,
    },
    {
      name: "shop",
      path: "/shop",
      element: <Shop />,
    },
    {
      name: "shopSingle",
      path: "/shopSingle/:ProductId",
      element: <ShopSingle />,
    },
    {name: "serrvice",
      path: "/service",
      element: <Service />
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
