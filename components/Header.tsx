'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { headerListItem } from '@/constants'; // ナビゲーションリストのデータ
import { usePathname } from 'next/navigation'; // 現在のルートパスを取得するフック
import { TfiClose } from 'react-icons/tfi';
import { motion } from 'motion/react';

function Header() {
  // 現在アクティブなリンクを保持するステート
  const [active, setActive] = useState<string>('');
  const pathName = usePathname(); // 現在のルートパスを取得

  const [showMenu, setShowMenu] = useState(false);

  // パスが変更されたときに、アクティブなリンクを更新
  useEffect(() => {
    // パスを正規化（末尾のスラッシュを削除）
    const normalizedPath = pathName?.endsWith('/')
      ? pathName.slice(0, -1)
      : pathName;
    setActive(normalizedPath || ''); // パスが空の場合は空文字を設定
  }, [pathName]);

  return (
    <div className="w-full h-20 border-b-[1px] border-gray-500 bg-white">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between p-10">
        {/* ロゴ部分 */}
        <Link href={'/'} className="relative group overflow-hidden">
          <p className="text-2xl font-bold">JunkBranding</p>
          {/* ロゴの下にホバー時に表示される線 */}
          <span className="absolute bottom-0 w-full h-[2px] inline-block bg-primeColor -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700"></span>
        </Link>

        {/* ナビゲーションメニュー */}
        <div className="hidden lg:inline-flex items-center gap-8 text-sm font-semibold tracking-wider">
          <ul className="flex gap-8">
            {headerListItem.map((item) => (
              <li key={item._id} className="relative">
                {/* リンクのスタイル */}
                <Link href={item.link}>
                  <span
                    className={`${
                      // アクティブなリンクの場合、文字色を変更
                      active === item.link ? 'text-primeColor' : 'text-gray-600'
                    } hover:text-primeColor cursor-pointer duration-300 group`}
                  >
                    {item.title}
                  </span>
                  {/* アクティブまたはホバー時に表示される線 */}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[2px] bg-primeColor transition-transform duration-500 ${
                      active === item.link ? 'scale-100' : 'scale-0'
                    } group-hover:scale-100`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
          {/* ボタン部分 */}
          <button className="w-36 h-10 bg-darkColor text-white rounded-md hover:bg-primeColor duration-500">
            Get In Touch
          </button>
        </div>
        <div
          className="w-7 h-5 group lg:hidden flex flex-col justify-between cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor inline-flex -translate-x-1 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor inline-flex -translate-x-3 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor inline-flex -translate-x-5 group-hover:translate-x-0 transition-transform duration-500"></span>
        </div>

        {showMenu && (
          <div className="w-full h-screen lg:hidden fixed top-0 left-0 bg-darkColor bg-opacity-90 z-50">
            <motion.div
              className="w-[70%] h-full bg-darkColor p-4 relative"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="absolute right-2 top-8 text-3xl text-red-200 hover:text-red-600 cursor-pointer duration-300"
                onClick={() => setShowMenu(false)}
              >
                <TfiClose />
              </span>
              <Link href={'/'} onClick={() => setShowMenu(false)}>
                <p className="text-2xl font-bold text-white mb-4">
                  JunkBranding
                </p>
              </Link>
              <ul className="flex flex-col text-gray-300 text-sm gap-3 font-semibold">
                {headerListItem.map((item) => (
                  <Link key={item._id} href={item.link}>
                    <li
                      className="hover:text-white cursor-pointer duration-300"
                      onClick={() => setShowMenu(false)}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
