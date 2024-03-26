"use client";
import React, { use, useEffect } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CardProductComponent from '@/components/cardproduct/CardProductComponent';
const ENDPOINT = "https://fakestoreapi.com/products/";

export default function page() {
  const [useData, setUseData] = useState([]);

  useEffect(() => {
    fetch(`${ENDPOINT}`)
      .then(res => res.json())
      .then(data => setUseData(data))
  })
  return (
    <>
      <div className=' md:mx-[70px] lg:mx-[100px] lg:text-5xl md:text-3xl font-simebold my-[50px] '>
        ALL PRODUCTS
      </div>
      <div  className='bg-[#f5f5f5] grid lg:grid-cols-3 md:grid-cols-3 md:mx-[70px] lg:mx-[100px] justify-center gap-5 place-content-center text-6xl'>
      {
        useData.map((item: any, index) => (
          <CardProductComponent
            key={index}
            title={item.title}
            price={item.price}
            image={item.image}
            description={item.description} />
        ))
      }
    </div>
    </>
  )
}
