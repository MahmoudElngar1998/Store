import toast from "react-hot-toast";
import { create } from "zustand";

export const domain = "http://localhost:1337";

export const selectedCategory = create((set) => ({
  value: "",
  setCategory: (documentId) => set(() => ({ value: documentId })),
}));

export const useCart = create((set) => ({
  items: [],
  total: 0,
  addToCart: (newProduct) =>
    set((state) => {
      let products = state.items;
      let final = products.findIndex((el) => {
        return el.documentId == newProduct.documentId;
      });

      if (final == -1) {
        products.push({ ...newProduct, qty: 1 });
        toast.success("Add To Cart");
      } else {
        products[final].qty++;
        toast.success("Product Qty Changed To : " + products[final].qty);
      }
      state.calcTotal();
      return { items: products };
    }),
  incrementQty: (documentId) =>
    set((state) => {
      let products = state.items;
      let index = products.findIndex((el) => el.documentId == documentId);
      products[index].qty++;
      toast.success("Product Qty Changed To : " + products[index].qty);
      state.calcTotal();
      return { items: products };
    }),
  decrementQty: (documentId) =>
    set((state) => {
      let products = state.items;
      let index = products.findIndex((el) => el.documentId == documentId);
      if (products[index].qty > 1) {
        products[index].qty--;
        toast.success("Product Qty Changed To : " + products[index].qty);
      } else {
        toast.success("Product Removed From Cart ");
        products.splice(index, 1);
      }
      state.calcTotal();
      return { items: products };
    }),
  removeFromCart: (documentId) =>
    set((state) => {
      let products = state.items;
      let index = products.findIndex((el) => el.documentId == documentId);
      products.splice(index, 1);
      toast.success("Product Removed From Cart ");
      state.calcTotal();
      return { items: products };
    }),

  calcTotal: () =>
    set((state) => {
      let finalTotal = 0;
      state.items.forEach((el) => {
        finalTotal += el.qty * (el.discountPrice ? el.discountPrice : el.originPrice);
      });
      return { total: finalTotal };
    }),
}));
