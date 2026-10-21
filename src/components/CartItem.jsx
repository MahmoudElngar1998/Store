import { domain, useCart } from "../Store";

export default function CartItem({ product }) {
  const { incrementQty, decrementQty, removeFromCart } = useCart();

  return (
    <div className="w-full flex justify-between items-start gap-4 font-bold">
      <div className="flex gap-3">
        <img
          className="w-25 h-25 rounded-xl object-cover shrink-0"
          src={
            product.coverImg
              ? domain + product.coverImg.url
              : "http://imgs.search.brave.com/Ke1wR_U25jimcqn_WWxvwvt8CDd4C0zyOXxzhKIEPJo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE0L05vX0ltYWdl/X0F2YWlsYWJsZS5q/cGc_dXRtX3NvdXJj/ZT1jb21tb25zLndp/a2ltZWRpYS5vcmcm/dXRtX2NhbXBhaWdu/PWluZGV4JnV0bV9j/b250ZW50PXRodW1i/bmFpbF91bnNjYWxl/ZCZfPTIwMjAwOTEz/MDk1OTMw"
          }
          alt=""
        />
        <div className="max-w-60">
          <p>{product.name}</p>
          <p className="text-sm mt-2">{product.qty * (product.discountPrice ? product.discountPrice : product.originPrice)}</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-4">
        <div className="flex gap-8">
          <h1>${product.discountPrice ? product.discountPrice : product.originPrice}</h1>
          <button className="cursor-pointer" onClick={() => removeFromCart(product.documentId)}>
            x
          </button>
        </div>
        <div className="flex gap-4">
          <button className="cursor-pointer" onClick={() => decrementQty(product.documentId)}>
            -
          </button>
          <span>{product.qty}</span>
          <button className="cursor-pointer" onClick={() => incrementQty(product.documentId)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
