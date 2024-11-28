import "./index.css"
import ProductCard from './components/ProductCard'
import Modal from "./components/ui/Modal";
import { ChangeEvent, FormEvent, useState } from 'react'
import Button from "./components/ui/Button";
import { ProductList, formInputList, Colors } from "./data";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMassage from "./components/ui/ErrorMassage";
import CircleColors from "./components/ui/CircleColors";

function App() {
  const DefultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    catagory: {
      imageURL: "",
      name: ""
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(DefultProduct);
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [template, setTemplate] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "", description: "", imageURL: "", price: "",
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
    });
    setErrors({ ...errors, [name]: "" });
  };
  const onCancel = () => {
    setProduct(DefultProduct);
    closeModal();
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title: title,
      description: description,
      imageURL: imageURL,
      price: price
    });
    // console.log(errors);
    /* Check if any property han value " "&& all properties has value "" 
     in this case if product statisfy this send product must be added
  */
    const hasError = Object.values(errors).some(property => property === "")
      && Object.values(errors).every(property => property === "");
    if (!hasError) {
      console.log("Product is not valid")
      setErrors(errors);
      return;
    }
    setProducts((prev) => [{ ...product, id: String(Date.now()), colors: template }, ...prev]);
    console.log("Product is valid and can be added to Database");
    setProduct(DefultProduct);
    setTemplate([]);
    closeModal();
  }

  // Render list of productsfuction
  const RenderProductList = products.map((product) => {
    return (
      <ProductCard key={product.id} product={product} />
    )
  })
  const RenderInputForm = formInputList.map((input) => {
    return (
      <div key={input.id} className="border-gray-900/100  pb-2 ">
        <label htmlFor={input.id} className="mb-1 block text-sm font-medium text-gray-700" >{input.label}</label>
        <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
        <ErrorMassage massage={errors[input.name]} />
      </div>
    )
  });
  const RenderProductColor = Colors.map((color) => {
    return <CircleColors color={color} key={color} onClick={() => {
      if (!template.includes(color)) {
        return setTemplate((prev) => [...prev, color])
      } else {
        return setTemplate((prev) => prev.filter(item => item !== color));
      }
    }} />
  });
  const RenderSelectedColors = template.map((color) => {
    return (
      <div key={color} className={`block m-1 rounded-md text-white `} style={{ background: color }}   >
        {color}
      </div >
    )
  });
  return (
    <main className=" container">
      <Button className="flex-1 bg-blue-500 text-sm sm:text-base py-2 sm:py-2" onClick={openModal}>Add Product</Button>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {RenderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add NewProduct" >
        <form className="space-y-2" onSubmit={submitHandler}>
          {RenderInputForm}
          <div className="flex flex-wrap items-center gap-x-0.5 my-2">
            {RenderProductColor}
          </div>
          <div className="flex flex-wrap items-center gap-x-0.5 my-2">
            {RenderSelectedColors}
          </div>
          <div className="flex items-center justify-between space-x-2 mt-3">
            <Button className="flex-1 bg-blue-700 text-sm sm:text-base py-1 sm:py-2 hover:bg-blue-800">Submit</Button>
            <Button className="flex-1 bg-slate-500 text-sm sm:text-base py-1 sm:py-2 hover:bg-slate-600" onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App
