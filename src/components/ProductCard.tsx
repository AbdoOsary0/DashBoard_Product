import { IProduct } from "../interfaces/index";
import { TxtSlicer } from "../utils/function";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColors from "./ui/CircleColors";
interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  openDeleteModal: () => void;

  index: number;
  setIndex: (val: number) => void;
}

const ProductCard = ({ product, setProductToEdit, openEditModal, openDeleteModal, setIndex, index }: IProps) => {
  const txtSize = 100;
  const { title, description, imageURL, price, colors, catagory } = product;
  // Render Mehtods
  const RenderProductColor = colors.map((color) => {
    return <CircleColors color={color} key={color} />
  });
  // Handler Methods
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setIndex(index)
  };
  const onDelete = () => {
    openDeleteModal();
    setProductToEdit(product);
  };

  return (
    <div className="p-4 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow-md flex flex-col">
      <Image
        imageUrl={imageURL}
        alt="ProductImage"
        className="rounded-lg mb-4 w-full h-44 sm:h-52 md:h-60 object-cover"
      />
      <h3 className="text-lg font-bold sm:text-xl md:text-2xl text-gray-800 mb-2 flex-wrap">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 h-16 ">
        {description.length > txtSize ? TxtSlicer(description, txtSize) : description}
      </p>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {RenderProductColor}
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg sm:text-xl font-bold text-blue-600">
          ${price}
        </span>
        <Image
          imageUrl={catagory?.imageURL || ""}
          alt={catagory?.name || ""}
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />
      </div>
      <div className="flex items-center gap-3">
        <Button
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-all"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-all"
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </div>

  );
}

export default ProductCard;
