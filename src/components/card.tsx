"use client"

import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// Define a type for the product data
interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
}

const Card: React.FC = () => {
  const [data, setData] = useState<Product[]>([]); // Use the Product type for state
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "Prodatas"]{
        _id,
        title,
        "image": image.asset->url,
        price
      }`;

      try {
        const fetchedData: Product[] = await client.fetch(query); // Specify the type of fetched data
        setData(fetchedData); // Set the fetched data to the state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading in case of an error
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Show a loading indicator while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data.map((item) => {
        return (
          <Link href={`/productdetails/${item._id}`} key={item._id} className='sm:w-60 xs:w-52 w-36'>
            <div className='sm:w-60 sm:h-56 xs:w-52 xs:h-44 w-36 h-40 bg-[#F5F5F5] p-10 relative group'>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
              <div className="w-full h-full absolute top-0 left-0 hidden group-hover:block transition-all">
                <div className="absolute w-full h-8 left-0 bottom-0 justify-center items-center gap-2 bg-black flex cursor-pointer">
                  <div className='w-6 h-6'>
                    <Image
                      src={"/icons/cart.png"}
                      alt="cart"
                      width={600}
                      height={600}
                      className='w-full h-full object-cover invert'
                    />
                  </div>
                  <div className="text-white text-sm">Add to cart</div>
                </div>
              </div>
            </div>
            <span className='font-medium mt-2 xs:text-base text-sm'>{item.title}</span><br />
            <div className='flex items-center gap-2 xs:text-base text-sm'>
              <span className='text-red-500'>${item.price}</span>
              <div className='flex gap-1'>
                {[1, 2, 3, 4, 5].map((index) => {
                  return (
                    <div className='w-3 h-3 overflow-hidden' key={index}>
                      <Image
                        src={"/icons/star.png"}
                        alt="star"
                        width={600}
                        height={600}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  )
                })}
              </div>
              <span className="text-zinc-400 text-sm font-medium">(55)</span>
            </div>
          </Link>
        )
      })}
    </>
  );
}

export default Card;

