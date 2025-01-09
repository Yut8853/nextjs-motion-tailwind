import React, { createContext, useContext } from 'react';
import { motion, MotionProps } from 'framer-motion'; // 修正：framer-motion を使用

// コンテキストの作成
const fadeInStaggerContext = createContext(false);

// ビューポート設定
const viewport = { once: true, margin: '0px 0px -200px' };

// FadeIn コンポーネントの型定義
type FadeInProps = MotionProps; // motion.div に適用可能なすべてのプロパティを許容

function FadeIn(props: FadeInProps) {
  const isInStaggerGroup = useContext(fadeInStaggerContext); // コンテキストの値を取得

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 }, // 初期状態
        visible: { opacity: 1, y: 0 }, // アニメーション終了状態
      }}
      transition={{ duration: 0.5 }} // アニメーションの継続時間
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden', // 初期状態
            whileInView: 'visible', // ビューポート内で表示
            viewport, // ビューポート設定
          })}
      {...props} // その他のプロパティを渡す
    />
  );
}

export default FadeIn;

// FadeInStagger コンポーネントの型定義
type FadeInStaggerProps = MotionProps & {
  faster?: boolean; // 追加オプション
};

export const FadeInStagger: React.FC<FadeInStaggerProps> = ({
  faster = false,
  ...props
}) => {
  return (
    <fadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden" // 初期状態
        whileInView="visible" // ビューポート内で表示
        viewport={viewport} // ビューポート設定
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }} // スタッガーアニメーション
        {...props} // その他のプロパティを渡す
      />
    </fadeInStaggerContext.Provider>
  );
};
