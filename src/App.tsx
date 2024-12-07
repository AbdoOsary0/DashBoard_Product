import "./index.css"
import ProductCard from './components/ProductCard'
import Modal from "./components/ui/Modal";
import { ChangeEvent, FormEvent, useState } from 'react'
import Button from "./components/ui/Button";
import { ProductList, formInputList, Colors, CategoryList } from "./data";
import Input from "./components/ui/Input";
import { ICategory, IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMassage from "./components/ui/ErrorMassage";
import CircleColors from "./components/ui/CircleColors";
import SelectMenu from "./components/ui/SelectMenu";
import { TProductNames } from "./types";
import toast, { Toaster } from 'react-hot-toast';


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
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const [product, setProduct] = useState<IProduct>(DefultProduct);
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [productToEdit, setProductToEdit] = useState<IProduct>(DefultProduct);
  const [selectedCatagory, setSelectedCatagory] = useState<ICategory>(CategoryList[0]);
  const [errors, setErrors] = useState({
    title: "", description: "", imageURL: "", price: "", colors: ""
  });
  //  {------------Handler------------}
  const closeModal = () => setIsOpen(false)
  const openEditModal = () => setIsOpenEditModal(true)
  const closeEditModal = () => setIsOpenEditModal(false)
  const closeDelteModal = () => setIsDeleteModal(false)
  const openDeleteModal = () => setIsDeleteModal(true)

  const openModal = () => setIsOpen(true)
  const onChangeAddHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log(event.target.value);
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };
  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    // console.log(event.target.value);
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };
  const onCancel = () => {
    setProduct(DefultProduct);
    closeModal();
    closeEditModal();
  }
  const DeleteProductHandler = () => {
    setProducts(products.filter((product) => product.id !== productToEdit.id));
    closeDelteModal();
    toast.success('Product deleted successfully', {
      style: {
        backgroundColor: "black",
        color: "white"
      }
    });

  }
  const AddHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, description, imageURL, price, } = product;
    const errors = productValidation({
      title: title,
      description: description,
      imageURL: imageURL,
      price: price,
      colors: tempColors
    });
    /* Check if any property han value " "&& all properties has value "" 
     in this case if product statisfy this send product must be added */
    const hasError = Object.values(errors).some(property => property === "")
      && Object.values(errors).every(property => property === "");
    if (!hasError) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [{ ...product, id: String(Date.now()), colors: tempColors, catagory: selectedCatagory }, ...prev]);
    console.log("Product is valid and can be added to Database");
    setProduct(DefultProduct);
    setTempColors([]);
    closeModal();
    toast.success('Product added successfully',
      {
        style: {
          backgroundColor: "lightblue",
          color: "white"
        }
      });
  }
  const EditHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, description, imageURL, price } = productToEdit;
    const errors = productValidation({
      title: title,
      description: description,
      imageURL: imageURL,
      price: price,
      colors: tempColors
    });
    /* Check if any property han value " "&& all properties has value "" 
    in this case if product statisfy this send product must be added */
    const hasError = Object.values(errors).some(property => property === "")
      && Object.values(errors).every(property => property === "");
    if (!hasError) {
      setErrors(errors);
      return;
    }
    // console.log("Product is valid and can be added to Database"); 
    const updatedProduct = [...products];
    updatedProduct[productToEditIndex] = { ...productToEdit, colors: tempColors.concat(productToEdit.colors) };
    setProducts(updatedProduct);
    setProductToEdit(DefultProduct);
    setTempColors([]);
    closeEditModal();
    toast.success('Product edited successfully',
      {
        style: {
          backgroundColor: "blue",
          color: "white"
        }
      });
  }

  // Render list of productsfuction
  const RenderProductList = products.map((product, idx) => {
    return (
      <ProductCard key={product.id} product={product} index={idx}
        setIndex={setProductToEditIndex}
        setProductToEdit={setProductToEdit}
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />
    )
  })
  const RenderInputForm = formInputList.map((input) => {
    return (
      <div key={input.id} className="border-gray-900/100  pb-2 ">
        <label htmlFor={input.id} className="mb-1 block text-sm font-medium text-gray-700" >{input.label}</label>
        <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={onChangeAddHandler} />
        <ErrorMassage massage={errors[input.name]} />
      </div>
    )
  });
  const RenderProductColor = Colors.map((color) => {
    return <CircleColors color={color} key={color} onClick={() => {
      if (tempColors.includes(color)) {
        return setTempColors((prev) => prev.filter(item => item !== color));
      }
      if (productToEdit.colors.includes(color)) {
        return setTempColors((prev) => prev.filter(item => item !== color));
      }
      return setTempColors((prev) => [...prev, color])
    }} />
  });
  const RenderSelectedColors = tempColors.map((color) => {
    return (
      <div key={color} className={`block m-1 rounded-md text-white `} style={{ background: color }}   >
        {color}
      </div >
    )
  });
  const RenderProductEditWithErrorMsg = (id: string, name: TProductNames, lable: string, type: string) => {
    return (
      <div className="border-gray-900/100  pb-2 ">
        <label htmlFor={"title"} className="mb-1 block text-sm font-medium text-gray-700" >{lable}</label>
        <Input type={type} id={id} name={name} value={productToEdit[name]} onChange={onChangeEditHandler} />
        <ErrorMassage massage={errors[name]} />
      </div>
    )
  }

  return (
    <main className=" container">
      <div className="flex justify-center mb-4">
        <Button
          className="w-full sm:w-auto bg-blue-800 text-sm sm:text-base py-2 px-4 m-4 rounded shadow-lg hover:shadow-2xl hover:ring-2 hover:ring-blue-400 transition-shadow duration-300 ease-in-out text-white hover:bg-blue-600"
          onClick={openModal}>
          Build Product
        </Button>
      </div>
      {/* {Render list OF Products} */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {RenderProductList}
      </div>
      {/* Edit Modal*/}
      <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title="Edit NewProduct" >
        <form className="space-y-2" onSubmit={EditHandler}>
          {RenderProductEditWithErrorMsg("title", "title", "Product Name", "text")}
          {RenderProductEditWithErrorMsg("description", "description", "Product description", "text")}
          {RenderProductEditWithErrorMsg("imageURL", "imageURL", "Product imageURL", "text")}
          {RenderProductEditWithErrorMsg("price", "price", "Product price", "text")}
          <SelectMenu selected={productToEdit.catagory ?? { name: "", imageURL: "" }}
            setSelected={(value) => setProductToEdit({ ...productToEdit, catagory: value })} />
          <div className="flex flex-wrap items-center gap-x-0.5 my-2">
            {RenderProductColor}
          </div>
          <div className="flex flex-wrap items-center gap-x-0.5 my-2">
            {
              tempColors.concat(productToEdit.colors).map((color) => {
                return (
                  <div key={color} className={`block m-1 rounded-md text-white `} style={{ background: color }}   >
                    {color}
                  </div >
                )
              })
            }
          </div>
          <div className="flex items-center justify-between space-x-2 mt-3">
            <Button className="flex-1 bg-blue-700 text-sm sm:text-base py-1 sm:py-2 hover:bg-blue-800">Submit</Button>
            <Button className="flex-1 bg-slate-500 text-sm sm:text-base py-1 sm:py-2 hover:bg-slate-600" onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </Modal>
      {/*Delete Modal*/}
      <Modal isOpen={isDeleteModal} closeModal={closeDelteModal} title="Are you sure you want to delete this product?" >
        <p className="text-gray-500">Deleting this product will reomve it peramently from your inventory . </p>
        <div className="flex items-center justify-between space-x-2 mt-3">
          <Button className="flex-1 bg-red-600 text-sm sm:text-base py-1 sm:py-2 hover:bg-red-700" onClick={DeleteProductHandler}>Yes,Remove</Button>
          <Button className="flex-1 bg-slate-200 text-sm text-gray-950 sm:text-base py-1 sm:py-2 hover:bg-slate-600" onClick={closeDelteModal}>Cancel</Button>
        </div>
      </Modal>
      {/*add Product Modal*/}
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add NewProduct" >
        <form className="space-y-2" onSubmit={AddHandler}>
          {RenderInputForm}
          <SelectMenu selected={selectedCatagory} setSelected={setSelectedCatagory} />
          <div className="flex flex-wrap items-center gap-x-0.5 my-2">
            {RenderProductColor}
          </div>
          <div className="flex flex-wrap items-center gap-x-0.5 my-2">
            {RenderSelectedColors}
          </div>
          <div>
            <ErrorMassage massage={errors.colors} />
          </div>
          <div className="flex items-center justify-between space-x-2 mt-3">
            <Button className="flex-1 bg-blue-700 text-sm sm:text-base py-1 sm:py-2 hover:bg-blue-800">Submit</Button>
            <Button className="flex-1 bg-slate-500 text-sm sm:text-base py-1 sm:py-2 hover:bg-slate-600" onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </Modal>
      <Toaster />
    </main>
  );
}

export default App
