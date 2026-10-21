import { useEffect, useState } from "react";
import { domain, selectedCategory } from "../Store";
import axios from "axios";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [view, setView] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const { value, setCategory } = selectedCategory();

  useEffect(() => {
    let final = categories.filter((el) => el.name.toLowerCase().startsWith(searchValue.toLowerCase()));
    setView(final);
  }, [searchValue]);

  // جلب الكاتيجوريز
  useEffect(() => {
    axios
      .get(domain + "/api/categories", { params: { populate: "*" } })
      .then((res) => {
        setCategories(res.data.data);
        setView(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // جلب المنتجات: كاتيجوري معينة أو الكل
  useEffect(() => {
    if (value) {
      axios
        .get(domain + "/api/categories/" + value, {
          params: { populate: { phones: { populate: "*" } } },
        })
        .then((res) => setProducts(res.data.data.phones || []))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(domain + "/api/phones", { params: { populate: "*" } })
        .then((res) => setProducts(res.data.data || []))
        .catch((err) => console.log(err));
    }
  }, [value]);

  return (
    <div className="w-full flex py-5">
      <div className="w-[256px] shrink-0 h-full">
        <details className="collapse bg-white border border-base-300" name="my-accordion-det-1" open>
          <summary className="collapse-title font-semibold">Categories</summary>
          <div className="collapse-content text-sm flex flex-col gap-4">
            <input onKeyUp={(event) => setSearchValue(event.target.value)} className="w-full input bg-[#F5F5F5]" type="text" placeholder="Search For Filter" />
            {view?.map((el) => (
              <Category key={el.documentId} Category={el} />
            ))}
            <div className="w-full">
              <label className="w-full flex gap-3 items-center">
                <input onChange={() => setCategory("")} type="radio" name="filter" defaultChecked />
                All Categories
              </label>
            </div>
          </div>
        </details>
      </div>

      <div className="flex-1 min-w-0 h-full p-4">
        <h1 className="p-5 text-3xl">Available Products</h1>
        <div className="grid grid-cols-3 gap-3">
          {products.map((el) => (
            <ProductCard key={el.documentId} product={el} />
          ))}
        </div>
        <div className="w-full flex m-5 justify-center">
          <div className="join">
            {[1, 2, 3, 4].map((n) => (
              <button key={n} onClick={() => setPage(n)} className={`join-item btn border ${page === n ? "bg-black text-white" : "bg-white text-black"}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
