import CartItem from "../components/CartItem";
import { useCart } from "../Store";

export default function CartPage() {
  const { items, total } = useCart();
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-3xl">Shopping Cart</h1>
        <div className="flex flex-col gap-16 max-h-[560px] overflow-y-auto pr-4">
          {items.map((el) => {
            return <CartItem key={el.documentId} product={el} />;
          })}
        </div>
      </div>

      <div className="border border-black/10 rounded-lg p-8 flex flex-col gap-10 h-fit">
        <h2 className="font-bold text-2xl">Order Summary</h2>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-black/50 font-semibold">Discount code / Promo code</label>
          <input className="input w-full bg-white border border-black/30" type="text" placeholder="Code" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-black/50 font-semibold">Your bonus card number</label>
          <div className="relative w-full">
            <input className="input w-full bg-white border border-black/30 pr-24" type="text" placeholder="Enter Card Number" />
            <button className="absolute top-1/2 -translate-y-1/2 right-2 border border-black rounded-md px-4 py-1 text-sm font-bold cursor-pointer">Apply</button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex justify-between font-bold">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between text-black/50 font-semibold">
            <span>Estimated Tax</span>
            <span>${(14 * total) / 100}</span>
          </div>
          <div className="flex justify-between text-black/50 font-semibold">
            <span>Estimated shipping & Handling</span>
            <span>$50</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${(114 * total) / 100 + 50}</span>
          </div>
        </div>

        <button className="w-full bg-black text-white font-bold py-4 rounded-md cursor-pointer mt-6">Checkout</button>
      </div>
    </div>
  );
}
