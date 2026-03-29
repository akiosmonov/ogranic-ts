import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const canScroll = requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    });
    return () => cancelAnimationFrame(canScroll)
  }, [pathname]);

  return null;
};

export default ScrollToTop;
