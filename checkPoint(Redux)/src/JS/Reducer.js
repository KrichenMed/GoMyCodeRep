import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "./ActionType";

//Initial State
const initialState = {
  ProductList: [
    {
      id: Math.random(),
      name: "Iphone 15",
      prix: 5000,
      imgURL:
        "https://www.bell.ca/Styles/wireless/all_languages/all_regions/catalog_images/large/iPhone_15_Pro_Max_Natural_Titanium_lrg2.png",
    },
    {
      id: Math.random(),
      name: "Samsung S24 Ultra",
      prix: 5500,
      imgURL:
        "https://fdn.gsmarena.com/imgroot/news/24/01/samsung-galaxy-s24-ultra-what-to-expect/-326/gsmarena_002.jpg",
    },
  ],
};

//Pure function
const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, ProductList: [...state.ProductList, payload] };
    case DELETE_PRODUCT:
      return {
        ...state,
        ProductList: state.ProductList.filter((e) => e.id !== payload),
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        ProductList: state.ProductList.map((e) =>
          e.id === payload.id ? { ...e, prix: payload.newPrice } : e
        ),
      };
    default:
      return state;
  }
};

export default ProductReducer;
