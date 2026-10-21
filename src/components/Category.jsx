import { selectedCategory } from "../Store";

export default function Category({ Category }) {
  const { setCategory } = selectedCategory();
  return (
    <div className="w-full ">
      <label className="w-full flex gap-3 items-center">
        <input onChange={() => setCategory(Category.documentId)} type="radio" name="filter" />
        {Category.name}
      </label>
    </div>
  );
}
