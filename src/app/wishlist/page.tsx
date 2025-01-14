// import { client } from '@/sanity/lib/client'
// import Card from "@/components/card"
// import React from 'react'

// // Define the type for a product
// interface Product {
//   _id: string;
//   title: string;
//   image: string;
//   price: number;
// }

// // Fetch data using an async function directly in the page component
// const WishList = async () => {
//   const query = `*[_type == "Prodatas"]{
//     _id,
//     title,
//     "image":image.asset->url,
//     price
//   }`;

//   // Fetch the data server-side before rendering
//   const data: Product[] = await client.fetch(query);

//   return (
//     <div className="md:max-w-[1280px] w-full m-auto min-h-[80vh] py-20 p-3">
//       <div className="flex justify-between items-center">
//         <h3 className="text-xl font-medium">Whishlist ({data.length})</h3>
//         <button className="xs:px-8 xs:py-3 px-6 py-2 border-[1px] font-medium xs:text-base text-sm rounded-sm border-zinc-500">
//           Move All To Bag
//         </button>
//       </div>
//       <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8">
//         <Card arr={data} />
//       </div>
//       <div className="w-full flex justify-between items-center">
//         <div className="w-full flex items-center gap-3">
//           <span className="w-5 h-10 bg-primRed rounded-md"></span>
//           <span className="text-base xs:text-xl">Just For You</span>
//         </div>
//         <button className="xs:px-10 xs:py-3 px-8 py-2 border-[1px] font-medium xs:text-base text-sm rounded-sm border-zinc-500 text-nowrap">
//           See All
//         </button>
//       </div>
//       <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8">
//         <Card arr={data} />
//       </div>
//     </div>
//   );
// }

// export default WishList;
