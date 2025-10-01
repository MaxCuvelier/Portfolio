'use client'

import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactButton() {
  const [showLink, setShowLink] = useState(false);

  return (
    <div className="ml-auto flex flex-col relative items-center">
      <button
        onClick={() => setShowLink((prev) => !prev)}
        className="font-medium md:text-base text-xs sm:text-sm hover:text-pink-600 transition pt-0.5 pb-0.5 sm:pt-1 sm:pb-1 p-3 sm:p-4 border border-gray-300 rounded-xl transition-shadow duration-300 hover:shadow-lg"
      >
        Contact
      </button>

      {showLink && (
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=maxime.cuvelier1305@gmail.com&su=Contact%20depuis%20portfolio&body=Bonjour,"
          className="absolute top-full font-medium text-xs sm:text-sm sm:mt-1 hover:text-pink-500 underline transition"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
        >
        mail
        </motion.a>
      )}
    </div>
  );
}