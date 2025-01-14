import Card from "@/components/card";
import PageIntro from "@/components/pageintro";
import Image from "next/image";
import Details from "@/components/productdet/details";
import { client } from "@/sanity/lib/client";

// Define the type for the product data
interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
}

const ProdDetails = async ({ params }: { params: { productid: string } }) => {
  const query = `*[_type == "Prodatas"]{
    _id,
    title,
    "image":image.asset->url,
    price
  }`;

  // Fetch data from the client
  const data: Product[] = await client.fetch(query); // Type the data as Product[]

  // Find the index of the product matching the productid
  const index = data.findIndex((item) => item._id === params.productid);
  const product = data[index];

  if (product) {
    return (
      <div className="max-w-[1280px] min-h-[80vh] p-3 m-auto">
        <div className="w-full flex md:flex-row flex-col md:py-12">
          <div className="md:w-3/5 w-full md:flex gap-6">
            <div className="w-full md:hidden block p-6 bg-[#F5F5F5] mb-3">
              <Image
                src={product.image}
                alt={product.title} // Adding alt text based on title
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 gap-3">
              <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="w-32 md:h-28 bg-[#F5F5F5] p-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </span>
            </div>
            <div className="md:w-[500px] md:block hidden p-6 bg-[#F5F5F5]">
              <Image
                src={product?.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <Details product={product} />
        </div>

        <PageIntro intro="Related Item" nav="none" />
        <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8 mb-20">
          {/* Pass the same data or related items to the Card component */}
          <Card/>
        </div>
      </div>
    );
  }

  // Handle the case when the product is not found
  return (
    <div>
      <p>Product not found!</p>
    </div>
  );
};

export default ProdDetails;
