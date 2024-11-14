import { IProduct } from "../interfaces/index";
import { TxtSlicer } from "../utils/function";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const txtSize = 100;
  const { title, description, imageURL, price } = product;

  return (
    <div className="p-2 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border border-gray-500 rounded-md flex flex-col">
      <Image 
        imageUrl={imageURL}
        alt="ProductImage" 
        className="rounded-md mb-2 w-full h-40 sm:h-48 md:h-56 object-cover" 
      />
      <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">{title}</h3>
      <p className="text-sm md:text-base my-2 text-gray-700">
        {description.length > txtSize ? TxtSlicer(description, txtSize) : description}
      </p>
      <div className="flex items-center my-3 space-x-2">
        <span className="w-4 h-4 sm:w-5 sm:h-5 bg-yellow-400 rounded-full cursor-pointer" />
        <span className="w-4 h-4 sm:w-5 sm:h-5 bg-violet-600 rounded-full cursor-pointer" />
        <span className="w-4 h-4 sm:w-5 sm:h-5 bg-red-700 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-base sm:text-lg font-semibold">{price}</span>
        <Image 
          imageUrl={imageURL}
          alt="ProductImage" 
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" 
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-3">
        <Button className="flex-1 bg-blue-500 text-sm sm:text-base py-1 sm:py-2">Edit</Button>
        <Button className="flex-1 bg-red-500 text-sm sm:text-base py-1 sm:py-2">Delete</Button>
      </div>
    </div>
  );
}

export default ProductCard;
