import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <section className=" flex flex-col md:flex-row md:p-2 lg:p-5 justify-between">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </section>
  );
};

export default Categories;
