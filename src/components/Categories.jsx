import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <section className=" flex p-5 justify-between">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </section>
  );
};

export default Categories;
