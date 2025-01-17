'use client';

import React from 'react';
import Container from './Container';
import Image from 'next/image';
import banner001 from '../public/bannerImg/banner1.jpg';
import banner002 from '../public/bannerImg/banner2.jpg';
import banner003 from '../public/bannerImg/banner3.jpg';
import { motion } from 'motion/react';
import FadeIn from './FadeIn';

function Banner() {
  return (
    <div className="bg-primeColor w-full rounded-bl-3xl rounded-br-3xl relative px-4">
      <Container>
        <div className="text-white grid md:grid-cols-2 gap-20 place-items-center">
          <div className="flex flex-col gap-6">
            <FadeIn>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
                無料で使えます
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-sm tracking-wider xl:gap-10">
                煩わしいレポート作業にさよならを告げませんか？「レポートアプリ」があなたの仕事を劇的に効率化します！
                <br />
                高度な技術やデザインスキルが不要。直感的なインターフェースで、わずか数分でプロフェッショナルなレポートを作成できます。
                <br />
                事前に設計されたテンプレートを使用して、さまざまな種類のレポートを簡単に作成できます。売り上げ分析、プレゼンテーション、プロジェクト進捗など、あらゆる用途に対応しています。
              </p>
            </FadeIn>

            <div className="w-full p-6 xl:p-10 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5">
              <input
                type="text"
                placeholder="メールアドレス"
                className="w-full h-12 border-[1px] border-gray-300 rounded-xl text-base text-gray-600 placeholder:tracking-wider px-4 outline-none hover:border-primeColor duration-300 focus-visible:border-primeColor"
              />
              <button className="w-full h-12 rounded-xl bg-black text-white font-medium hover:bg-darkColor duration-300 cursor-pointer">
                無料で試す→
              </button>
            </div>
          </div>
          <div className="w-full relative flex justify-center items-center gap-6">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={banner001}
                alt="可視化"
                className="w-52 rounded-2xl object-cover"
              />
            </motion.div>
            <div className="flex flex-col gap-7">
              <motion.div
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={banner002}
                  alt="分析"
                  className="w-52 rounded-2xl object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={banner003}
                  alt="レポート"
                  className="w-52 rounded-2xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
