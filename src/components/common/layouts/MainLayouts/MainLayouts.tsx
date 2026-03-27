import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../../../ScrollToTop";
import { easeOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="grow">
        <AnimatePresence mode="wait" initial={false} >
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2,
              ease: "easeOut"
             }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
