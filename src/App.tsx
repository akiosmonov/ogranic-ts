import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { MainLayout } from "./components/common/layouts/MainLayouts";
import About from "./components/common/sections/About/About";
import Shop from "./components/common/sections/shop/Shop";

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
      element: <Shop />
    }
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map((item) => (
            <Route key={item.name} {...item} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
