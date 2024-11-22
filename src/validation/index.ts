/**
 * Validates a product object and returns an object containing error messages 
 * for invalid fields. If a field is valid, its corresponding error message 
 * will be an empty string.
 * 
 * @param product - An object containing product properties:
 *   - title: string (must be between 10 and 80 characters, non-empty)
 *   - description: string (must be between 10 and 800 characters, non-empty)
 *   - imageURL: string (must be a valid URL)
 *   - price: string (must be a numeric string with up to 10 characters, non-empty)
 * 
 * @returns An object with the same properties as `product`, where each property 
 * contains an error message if invalid, or an empty string if valid:
 *   {
 *     title: string;         // Error message for title or empty string
 *     description: string;   // Error message for description or empty string
 *     imageURL: string;      // Error message for imageURL or empty string
 *     price: string;         // Error message for price or empty string
 *   }
 */
export const productValidation = (product: {
  title: string; description: string, imageURL: string, price: string,
}) => {
  // Return an Object
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  const validUrl = /^(https?|ftp):\/\/[^\s]+$/.test(product.imageURL);


  if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
    errors.title = "Title should be between 10 and 80 characters and not empty"
  }
  if (!product.description.trim() || product.description.length < 10 || product.description.length > 800) {
    errors.description = "Title should be between 10 and 80 characters and not empty"
  }
  if (!validUrl || !product.imageURL.trim()) {
    errors.imageURL = "Please provide a valid URL";
  }
  if (isNaN(Number(product.price)) || !product.price.trim() || product.price.length > 10) {
    errors.price = "Price should be a number between 0 and 10 characters and not empty"
  }
  return errors;
}