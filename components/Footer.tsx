import React from 'react';
import Container from './Container';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { TbMinusVertical } from 'react-icons/tb';
import Link from 'next/link';

function Footer() {
  const footerList = [
    {
      _id: 101,
      title: 'お問い合わせ',
      link: '#',
      icon: true,
    },
    {
      _id: 102,
      title: '特定商品取引法',
      link: '#',
      icon: true,
    },
    {
      _id: 103,
      title: 'プライバシーポリシー',
      link: '#',
    },
  ];
  return (
    <div className="w-full bg-blueLight mt-10">
      <Container>
        <div className="text-sm flex flex-col md:flex-row md:items-center gap-2 justify-between mb-2">
          <p className="mb-2 text-gray-700">&copy; JunkBranding</p>
          <ul className="flex items-center gap-2 mb-2">
            {footerList.map((item) => (
              <Link key={item._id} href={item.link}>
                <li className="flex items-center gap-2 text-gray-500 hover:text-primeColor duration-300 cursor-pointer">
                  {item.title}
                  {item.icon && <TbMinusVertical />}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-gray-700">
            <a
              href=""
              className="text-xl hover:text-primeColor cursor-pointer duration-300"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href=""
              className="text-xl hover:text-primeColor cursor-pointer duration-300"
              target="_blank"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
