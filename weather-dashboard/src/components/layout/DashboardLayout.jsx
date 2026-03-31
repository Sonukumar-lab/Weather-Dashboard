import Navbar from "../Navbar";
import { motion } from "framer-motion";

const DashboardLayout = ({ children }) => {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>

    </div>
  );
};

export default DashboardLayout;