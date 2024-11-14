import "./index.css"
import ProductCard from './components/ProductCard'
import Modal from "./components/ui/Modal";
import { ChangeEvent, useState } from 'react'
import Button from "./components/ui/Button";
import { listProduct, formInputList } from "./data";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    catagory: {
      imageURL: "",
      name: ""
    },
  });
  //  handlers
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log(event.target.value);
    setProduct({
      ...product,
      [name]: value,
    })
    console.log(product)
  };

  // Render list of productsfuction
  const RenderProductList = listProduct.map((product) => {
    return (
      <ProductCard key={product.id} product={product} />
    )
  })
  const RenderInputForm = formInputList.map((form) => {
    return (
      <div key={form.id} className="border-gray-900/100  pb-2 ">
        <label htmlFor={form.id} className="mb-1 block text-sm font-medium text-gray-700" >{form.label}</label>
        <Input type={form.type} id={form.id} name={form.name} value={product[form.name]} onChange={onChangeHandler} />
      </div>
    )
  });

  return (
    <main className=" container">
      <Button className="flex-1 bg-blue-500 text-sm sm:text-base py-2 sm:py-2" onClick={openModal}>Add Product</Button>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {RenderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add NewProduct" >
        <div className="space-y-2">
          {RenderInputForm}
          <div className="flex items-center justify-between space-x-2 mt-3">
            <Button className="flex-1 bg-blue-700 text-sm sm:text-base py-1 sm:py-2 hover:bg-blue-800">Submit</Button>
            <Button className="flex-1 bg-slate-500 text-sm sm:text-base py-1 sm:py-2 hover:bg-slate-600" >Cancel</Button>
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default App
