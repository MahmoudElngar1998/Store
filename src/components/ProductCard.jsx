import { domain, useCart } from "../Store";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className=" bg-[F6F6F6] rounded shadow flex flex-col p-4 h-full items-center">
      <div className="w-full h-80 flex items-center justify-center">
        <img
          className=" object-contain max-w-full max-h-full "
          src={
            product.coverImg
              ? domain + product.coverImg?.url
              : "http://imgs.search.brave.com/Ke1wR_U25jimcqn_WWxvwvt8CDd4C0zyOXxzhKIEPJo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE0L05vX0ltYWdl/X0F2YWlsYWJsZS5q/cGc_dXRtX3NvdXJj/ZT1jb21tb25zLndp/a2ltZWRpYS5vcmcm/dXRtX2NhbXBhaWdu/PWluZGV4JnV0bV9j/b250ZW50PXRodW1i/bmFpbF91bnNjYWxl/ZCZfPTIwMjAwOTEz/MDk1OTMw"
          }
        />
      </div>

      <h1>{product?.name}</h1>
      <h1 className="text-2xl">
        <del>${product?.originalPrice}</del> {product?.discountPrice}
      </h1>
      <button onClick={() => addToCart(product)} className="btn text-white mt-auto bg-black w-full">
        Add To Cart
      </button>
    </div>
  );
}
