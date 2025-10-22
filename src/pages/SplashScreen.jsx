// src/components/SplashScreen.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ minDuration = 3500, onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onDone?.();
    }, minDuration);
    return () => clearTimeout(timeout);
  }, [minDuration, onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center
            bg-gradient-to-br from-[#f7f8fb] via-[#eef2f7] to-[#e9edf5]
            dark:from-[#0a0f18] dark:via-[#0b121d] dark:to-[#0e1726]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Titik tiga animasi halus */}
          <div className="flex space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-4 h-4 rounded-full bg-[#18446C] dark:bg-white"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Tulisan memuat */}
          <motion.p
            className="mt-5 text-[#18446C] dark:text-white/80 text-[15px] font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Memuat...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
