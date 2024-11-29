import { IProduct, IFormInput, ICategory } from "../interfaces";
export const ProductList: IProduct[] = [
  {
    id: "1",
    title: "Wireless Earbuds",
    description: "High-quality wireless earbuds with noise cancellation and long battery life.",
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "59.99",
    catagory: {
      name: "Electronics",
      imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    colors: []
  },
  {
    id: "2",
    title: "Running Shoes",
    description: "Comfortable and durable running shoes with excellent grip.",
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "89.99",
    catagory: {
      name: "Sportswear",
      imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    colors: []
  },
  {
    id: "3",
    title: "Coffee Maker",
    description: "A compact coffee maker for making delicious espresso at home.",
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "120.00",
    catagory: {
      name: "Kitchen Appliances",
      imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    colors: []
  },
  {
    id: "4",
    title: "Smart Watch",
    description: "Track your fitness and health with this sleek smart watch.",
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "199.99",
    catagory: {
      name: "Wearables",
      imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    colors: []
  },
  {
    id: "5",
    title: "Electric Toothbrush",
    description: "Advanced electric toothbrush with multiple cleaning modes.",
    imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    price: "49.99",
    catagory: {
      name: "Personal Care",
      imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
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
export const Colors: string[] = [
  "#000000", // Black
  "#FF0000", // Red
  "#800000", // Maroon
  "#808000", // Olive
  "#008000", // Green
  "#800080", // Purple
  "#008080", // Teal
  "#000080", // Navy
  "#001F3F", // Midnight Blue
  "#003366", // Dark Slate Blue
  "#004080", // Deep Blue
  "#2A52BE", // Cerulean Blue
  "#191970"  // Midnight Blue (standard)
];

export const CategoryList: ICategory[] = [
  {
    id: "1",
    name: "Nike Shoes",
    imageURL: "data:image/jpeg;base64,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",
  },
  {
    id: "2",
    name: "Adidas Shoes",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslNlLEfe9RDxPXg4lf48PceZ-WqO74RXlYQ&s",
  },
  {
    id: "3",
    name: "NewBalance Shoes",
    imageURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBMSExISERAQERMVEBIVEQ8WEhAPFRgWFhUVFRcaHSggGBolGxcTIjEjKC0tLi4uGB84RDUsNygvLisBCgoKDQ0NFRAQFS0ZFRkrKy0tKysrLS0tKy0tKzcrKysrNy0tLS0rLTctLSsrLS0tKystKy0rKy0rLSs3LSsrN//AABEIAOAA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYEBQcCA//EADwQAAIBAgQDBgMECQQDAAAAAAABAgMRBBIhMQVBUQYTImFxgTJCkQexwfAUI1JTcpKhwuEWM0PRJGKi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AOyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASiCUBXAABYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJRBKArgAAsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEoglAVwAAWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUQSgK4AALEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKIJQFcAAFiAAAAAAD4Y/GQo0qlao8tOjCU6ktXaEE5SdueiA+4Kfi/tDw9KVDvqdajDEwnOMpRTlTjFJrPCN2r3W131SK9xX7aKEKmWhhqlaCetSc1ST84xyyf1sWaOonxrYlRdt306eppeF9qqWJwaxNG6zNxcHbNSqLdSt7NdboxcNjm5Wdr73zedvdkG8pcWpur3TvGfK68L6JS2uzONHGVJzWbWdtFa90uieje5kuKqx1nVjC9lklKnLo9YvMBswa3gEKkKcqdWTnKnVqKnOU8854e96UpS3bUWotvW8Xvu8niGNhSg3KcYyaeRPVuXK0d3qB5rY1KeRcvifn0MhVV7ddyo4ebqOLlmjnV3F6STtd5rPryNxgabTbbvd6avwgblO+wMNVJXccybesW09uatyIw3EE6jpStCqlmUc0Wp07tKUWvNPTdf1AzQAAAAAAAAAAJRBKArgAAsQAAAAAY3FFHuKimlKDhJST2cWrNMyTS9sarjg6llm0u43tmhHWS+lwOT/aRw+viKmHr0qc5qUO7cVF5qdVyulNfLvu9NNyn4TsbxCpUcP0aUPE7yqOEYR881/Ev4bnXaNGVB2lKTp/LV3cXfRTW+XV9baam3w0m1d2tunF3UlyaZbqNF2S7NrBUHDM6tSbUqstVFyV7KMXsld67v8Aotr3bzXur8t5NfQxOP8AGFSlRpRjnrYibjTi3aMYx1nOXklbTm2vVTiK2WLlOSUUru9lFJb3V7Ne41WY40l8Tjnur3lK/wB7adjYUeLR0jHxvWyal97KU1Uq+OGWlD/jUoeKqv2p7OEXd2W+t3p4T6YDFxnGllnGNWpDvIUnJZrO9nF6Np8tNUmyDe8fwOI76nWwim5u8a7/AEl5XTadoqFSWiT18Nt3zs1nUsDJQVSVPJNtKSlJSkm+stbr3NPh8Y1JxaSzNZouF7bK8VzVrFk4fjYPLTjGTik05bRt0fUDDqwUIucpZYr4pOWVJdL/AE23PrSx1ldKytu9NN+eu3Ujj3BHXnhpupGhTw1RzqU204VG4tU231i3dX6+SK9xXFxlUlSbz0KaTn3S71YipfSnJwvkimlpK2dtLZNOo2cO0krZ8jdBu0KvJpuylkTzKDvZOzvvZKze3wuKsp/JJX18Mop+uttNdSmTlVr0ZxlJUZOssuW0nThSqxbim9JS8Ert6Xb5KxkcBop1I1qadOhTTyyTlmxUnfxTe84atpu7k25bWbKvUeIRTtKUdIp+bvs1YzIVE0mndPbzK3GMFUcreJrWK2i+fuTOs0kruKitFu7efkQWYgrNDjrjOyo1FFvxaKy5XSTf9Da0uNUZO2ZXW/kBsQfCGMpvacfqfaMk1dNNeQEgAASiCUBXAABYgAAAAA1PF6ic1Tevgba5NN2/Bm2NFxazqvXVJc9UBq4UXFZJapaRf7UOV+rS0fX3MXD4R05vI7Up3vD5Yz3zQ6c7rz8rGwk29H/n6nxrRlbSzfrZlFZ7WYOr31DF0455YVy7ynfxSozSUsvVq3vmHEXKcoVMrrYdQUo0oWUu+3UqkZNKSWltUovWz0cbKrta+Fp6ea82jBxGCknenbXeOy9vz9QNPgKVapGu5zUZT/Vwy3cKTUdXHbO1KVm3a7hyRj0OHQq0+4oq2Ghbva8rOVWUbK1OW91ZeP5Uko66xzMRgKcpSzZ6eZ/roKTVOtb94lvtq1ZtWWqdjaYZpSikrJaRWlkuSXltp1fkQe+5Wjm/h2XzLzbvf1/wZFOrJJ5bq9totpLnbazsY3HK0qWHrVacVKpTpVJQTV1nirp259fqYvAeIRxFCE8/eNxWe7Xxc01tvflsmUWPA42ME1KUU73u3DWXWy/OhrsSqcqznHLnq2VSbilmSSSS9ktrXsj4TwFJ6uC9bK/s/f6tdD51OHpfDUlHyupLnylfT06eZBmYvs/SqbNxUrd5BSkoVebzxvZ35u2uzutDLlGUY/Da1rW1Wlnb0NHkrw+Fxl0Scof9r8vobHhtevJJ/CnymtV9NQMXHxlKNSMJygq1Ooo1I/FTzK2ZecX9xq+F9sYRl+jYtLDYqFk7/wCzV5KdKe2WXK9unJl3jhadu8qKEcl5Sk2opLnKT6W6lU4lw/A46UqeXvoUneEvFF2e/dyTTy39npuUbmliVv6Wtre+1upkyiprxQUvVI0fC+ARw6tRTil8Kc5SUXbkpS09tzc0pS+aLWmusWn6K7AYXhUFUT1s0/DduKfLRn17ScVlhaeHlDKlUxdKlUur/qpKbkl0fhRkwlo9rW1vtYrnE6T4hisPTo3lhsJVdTEV7PunVtlUKb2nJJzTts5LowL8yCWQQCUQSgK4AALDcXIIYE3IzHlnlgTVq2TfRN/Q5r2k4LWqYh4mjKOeVs3jlTmmlbwzV9LJeFq31OhV4XTWjTTTT2ae6ZScZwrH0H/47hiaS2pVpSjViukaqvmX8Sb82UeuCVsS1KOJppZbZKqlC9Rc80Vs/NaPyNqpFYqcfxkP93hmJ9ac6VRfejGfbiC0qYXGUtfmw+i+jYG0qdqKMakqc+8pyi2ruN00uejvb2NpgsZCorwnGS6xadvVcjnHavtHhq0UoqarLVTdOUbLo2/i/PoVfB8bq0qkalNpSi9LtpNdH5PoB3etSjL4op+fMwanDI/JJp7++r2fm7kcH4xTxFOM6ctGleN1eErXcX+BnP6gQt1fmkn5SWq/H6FD4n2XxGHxDrYGUIU561KMnJQjLySXwPXo1tsy9yS817kS15v6FFe4dxSpeMMQo0pPRuM80dnrqll1+/yLDGnH/PTb8+xi1+Hxnul/L+bHvD4Xu1ljLw8ou7S9LvQkGVGKsrWV7W+/S3lczMP06GHGb/Njxj+K0MPHPiK0aS5JvxS/hitZeyKjB+0zGqHDZwvaVepSpxV9XealL/5jIpXB+PU8PWVWrJxpyg4OylJ85fCt9VE2vEcBjOL1qfdUJYbBUW3Tq11lc5S0dTLvLS+VLTV3avpeOC9hcJQpKEqccRNu8qlWEZNy/wDVPSK8l/UiqrR+0HCSkoxVepd20otJebcrW9T3/qHF1LRo4alFta1atZunFvpGKUpaehe6XZ/DR+HD0o+lOK/Ayo4CmtoRXshRVuF8Hcpwq4nE1a8qcoyjSilRw8akXdSyR8U+TtKTLdCqhHDxXJHtQRAUiRYACUQSgK4AALDYWJAHnKQ4nsAfJwPDpmRYiwGK6J8p4VPkZ+UjKBosTwSnPeEX6xRqcV2QoS/44/youTgQ6YHKuK/Z7NvPh60sPPZuDazR6StuYlXD8aw6SjkxcVZeKEM1lpunFtnXnSI7lAcd/wBXY2npX4bVv1h3lvpll956j2/1blgsXGKStemlJvnu7WOv/o66EPCRe6X0LRx+X2lUeWHxLl0aor+4iHbytN2pYJ2vvUrf2qP4nXXw6n+7h/KiY8Op/u4/yoUclVTiOI3qrDwbd1QpvPlfy95LX3Vje9nezVOjPvO7z1t3Wq3qVW+uaWz9DoMcLH9lfQ9qguiIMChWlzuZsKjPoqSJUAIUj0mTYAAAAAAAlEEoCuAACxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASiCUBXAABYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJRBKArgAAsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEoglAVwAAWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUQSgK4AAP/Z",
  },
  {
    id: "4",
    name: "T-shirt",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0uTYDyWJWNXXcIamndeRB42DZ7cA-WPXazw&s",
  }
];

