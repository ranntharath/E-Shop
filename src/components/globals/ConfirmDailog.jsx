import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function ConfirmDialog({ open, title, message, onConfirm, onCancel }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white  p-6 rounded-2xl shadow-2xl w-[90%] max-w-sm text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={onCancel}
              className="absolute cursor-pointer top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold text-gray-800  mb-2">
              {title || "Are you sure?"}
            </h2>
            <p className="text-gray-500  mb-5">
              {message || "This action cannot be undone."}
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={onConfirm}
                className="px-5 py-2 cursor-pointer bg-[#fc634c] text-white font-medium rounded-lg hover:bg-[#e05540] transition-all"
              >
                Confirm
              </button>
              <button
                onClick={onCancel}
                className="px-5 cursor-pointer py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-all"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ConfirmDialog;
