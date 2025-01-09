'use client';
import Container from './Container';
import React from 'react';
import logo001 from '../public/clientImg/1.svg';
import logo002 from '../public/clientImg/2.svg';
import logo003 from '../public/clientImg/3.svg';
import logo004 from '../public/clientImg/4.svg';
import logo005 from '../public/clientImg/5.svg';
import logo006 from '../public/clientImg/6.svg';
import logo007 from '../public/clientImg/7.svg';
import logo008 from '../public/clientImg/8.svg';
import Image from 'next/image';
import FadeIn, { FadeInStagger } from './FadeIn';

const clients = [
  ['1', logo001],
  ['2', logo002],
  ['3', logo003],
  ['4', logo004],
  ['5', logo005],
  ['6', logo006],
  ['7', logo007],
  ['8', logo008],
];

function Client() {
  return (
    <div className="mt-24 rounded-[50px] bg-gray-950 py-20">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center text-white text-sm font-semibold tracking-wider">
            多くの企業でご利用になっています
            <div className="h-px flex-auto bg-neutral-700"></div>
          </h2>
        </FadeIn>
        <FadeInStagger faster>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 lg:grid-cols-4 gap-10">
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

export default Client;
