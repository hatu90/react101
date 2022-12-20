import { EmptyState } from "../EmptyState";
import { ProductItem } from "./ProductItem";

export function Product({ products }) {
    if (products.length === 0) {
        return <EmptyState />
    }
    return (
        <div>
            <h2>Products</h2>
            <p>{products.length} products found</p>
            {
              products.map((productItem) => <ProductItem name={productItem.name} category={productItem.category} stocked={productItem.stocked} price={productItem.price} />)
            }
        </div>
    )
}