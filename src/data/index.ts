import { IProduct, IFormInput } from "../interfaces";
export const listProduct: IProduct[] = [
  {
    id: "1",
    title: "Wireless Earbuds",
    description: "High-quality wireless earbuds with noise cancellation and long battery life.",
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "59.99$",
    catagory: {
      name: "Electronics",
      imageURL: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8MA%3D%3D"
    },
    colors: []
  },
  {
    id: "2",
    title: "Running Shoes",
    description: "Comfortable and durable running shoes with excellent grip.",
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "89.99$",
    catagory: {
      name: "Sportswear",
      imageURL: "https://images.unsplash.com/photo-1597639164084-eca64c33cccb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    colors: []
  },
  {
    id: "3",
    title: "Coffee Maker",
    description: "A compact coffee maker for making delicious espresso at home.",
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "120.00$",
    catagory: {
      name: "Kitchen Appliances",
      imageURL: "https://images.unsplash.com/photo-1586201375761-83865001e3b9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8MA%3D%3D"
    },
    colors: []
  },
  {
    id: "4",
    title: "Smart Watch",
    description: "Track your fitness and health with this sleek smart watch.",
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "199.99$",
    catagory: {
      name: "Wearables",
      imageURL: "https://images.unsplash.com/photo-1573126613479-b9a37e1a88c8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhcmFibGVzfGVufDB8fDB8fHww"
    },
    colors: []
  },
  {
    id: "5",
    title: "Electric Toothbrush",
    description: "Advanced electric toothbrush with multiple cleaning modes.",
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "49.99$$",
    catagory: {
      name: "Personal Care",
      imageURL: "https://images.unsplash.com/photo-1587983539623-47c919688dd9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYWwlMjBjYXJlfGVufDB8fDB8fHww"
    },
    colors: []
  }
];
export const formInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text"
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text"
  },
  {
    id: "imageURL",
    name: "imageURL",
    label: "Product Image URL",
    type: "text"
  },
  {
    id: "Product Price",
    name: "price",
    label: "Product Price",
    type: "string"
  }
]