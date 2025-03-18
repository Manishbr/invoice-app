import { createSlice } from '@reduxjs/toolkit';

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    invoiceNumber: '',
    poNumber: "",
    shipDate: "",
    vendorNumber: "",
    products: [], // List of products
    productDetails: { // Details for the currently added product
      lineNumber: '',
      buyerPart: '',
      vendorItem: '',
      description: '',
      quantity: '',
      uom: '',
      price: '',
      amount: '',
  },
},


  reducers: {
    setInvoiceNumber: (state, action) => {
      console.log(state)
      state.invoiceNumber = action.payload
    },
    setPONumber: (state, action) => {
      state.poNumber = action.payload;
    },
    setShipDate: (state, action) => {
      state.shipDate = action.payload;
    },
    setVendorNumber: (state, action) => {
      state.vendorNumber = action.payload;
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter((_, index) => index !== action.payload);
  },

  setProductDetails: (state, action) => {
    state.productDetails = {
      ...state.productDetails,
      ...action.payload,
    };

    // Automatically calculate the amount if quantity and price are provided
    const { quantity, price } = state.productDetails;
    if (quantity && price) {
      state.productDetails.amount = quantity * price;
    }
  },

  addProduct: (state) => {
    // Ensure amount is calculated before adding the product
    const { quantity, price } = state.productDetails;
    if (quantity && price) {
      state.productDetails.amount = quantity * price;
    }

    state.products.push(state.productDetails); // Add the product

    state.productDetails = { // Reset the product details
      lineNumber: '',
      buyerPart: '',
      vendorItem: '',
      description: '',
      quantity: '',
      uom: '',
      price: '',
      amount: '',
    };
    },
  },
});

export const { setInvoiceNumber, setProductDetails, addProduct, removeProduct,setPONumber,setShipDate,setVendorNumber } = invoiceSlice.actions;
export default invoiceSlice.reducer;
