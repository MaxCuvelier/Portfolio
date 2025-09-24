'use client'

import { useState } from "react";
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactButton() {
  const [showLink, setShowLink] = useState(false);

  return (
    <div className="ml-auto flex flex-col items-center gap-2">
      <button
        onClick={() => setShowLink((prev) => !prev)}
        className="font-medium hover:text-pink-600 transition gap-2 pt-1 pb-1 border border-gray-300 rounded-xl p-4 transition-shadow duration-300 hover:shadow-lg"
      >
        Contact
      </button>

      {showLink && (
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=maxime.cuvelier1305@gmail.com&su=Contact%20depuis%20portfolio&body=Bonjour,"
          className="hover:text-pink-500 transition"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -7 }}
              animate={{ opacity: 0.7, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
        >
          <Mail className="w-6 h-6" />
        </motion.a>
      )}
    </div>
  );
}