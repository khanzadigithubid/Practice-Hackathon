import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Define the type for a product
interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
}

// Define the type for the props, which includes an array of products
interface CardProps {
  arr: Product[];  // This is the prop that will accept the data array
}

const Card: React.FC<CardProps> = ({ arr }) => {
  return (
    <>
      {arr.map((item) => {
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
                {[1, 2, 3, 4, 5].map((index) => (
                  <div className='w-3 h-3 overflow-hidden' key={index}>
                    <Image
                      src={"/icons/star.png"}
                      alt="star"
                      width={600}
                      height={600}
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
              <span className="text-zinc-400 text-sm font-medium">(55)</span>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default Card;
