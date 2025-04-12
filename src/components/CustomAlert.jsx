import React from "react";
import { motion } from "framer-motion";

const CustomAlert = ({ type, message, onClose }) => {
  const colors = {
    success: "bg-[#151030] border-[#915EFF]",
    error: "bg-[#151030] border-[#ff5e5e]",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className={`${colors[type]} p-6 rounded-xl border-2 max-w-sm w-full mx-4 shadow-xl`}
      >
        <div className="text-center">
          <div className={`text-2xl mb-4 ${type === 'success' ? 'text-[#915EFF]' : 'text-[#ff5e5e]'}`}>
            {type === 'success' ? '✓' : '✕'}
          </div>
          <p className="text-white text-lg mb-6">{message}</p>
          <button
            onClick={onClose}
            className="bg-tertiary py-2 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomAlert;