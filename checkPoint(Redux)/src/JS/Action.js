//Here we declare Functions.
import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "./ActionType";

//Function to add new product
export const addProduct = (newProduct) => {
  return {
    type: ADD_PRODUCT,
    payload: newProduct,
  };
};
//Function to Edit a product
export const editProduct = (id, newPrice) => {
  return {
    type: EDIT_PRODUCT,
    payload: { id, newPrice },
  };
};
//Function to delete a product
export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
