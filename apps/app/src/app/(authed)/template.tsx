'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={'h-full w-full'}
    >
      {children}
    </motion.div>
  );
}
