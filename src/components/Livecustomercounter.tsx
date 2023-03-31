import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomerCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + Math.floor(Math.random() * 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="h-2/5 flex flex-col items-center justify-center text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="text-white font-bold">Live Customers:</p>
      <motion.p
        className="text-white font-bold"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 0.5 }}
      >
        {count}
      </motion.p>
    </motion.div>
  );
};

export default CustomerCounter;