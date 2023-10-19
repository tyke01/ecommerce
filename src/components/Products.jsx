// 
import { popularProducts } from "../data"
import {ProductItem} from "../components"

const Products = () => {
  return (
    <section className="p-5 flex flex-wrap justify-between">
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id}/>
      ))}
    </section>
  )
}

export default Products