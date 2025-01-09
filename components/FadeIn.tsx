import React, { createContext } from 'react';
import { motion, MotionProps } from 'framer-motion'; // 修正：framer-motion を使用

// コンテキストの作成
const fadeInStaggerContext = createContext(false);

// ビューポート設定
const viewport = { once: true, margin: '0px 0px -200px' };

type FadeInProps = MotionProps & {
  className?: string;
};

const FadeIn: React.FC<FadeInProps> = ({ className, ...props }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...props}
    />
  );
};

export default FadeIn;

type FadeInStaggerProps = MotionProps & {
  faster?: boolean;
  className?: string;
};

export const FadeInStagger: React.FC<FadeInStaggerProps> = ({
  faster = false,
  className,
  ...props
}) => {
  return (
    <fadeInStaggerContext.Provider value={true}>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </fadeInStaggerContext.Provider>
  );
};
