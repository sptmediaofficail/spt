import { motion, MotionProps } from 'framer-motion';
import { HTMLAttributes, ReactNode } from 'react';

type AnimatedDevProps = {
  children: ReactNode;
} & MotionProps &
  HTMLAttributes<HTMLDivElement>;

export const AnimatedDev = ({ children, ...props }: AnimatedDevProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
