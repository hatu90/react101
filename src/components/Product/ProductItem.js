export function ProductItem({ name, category, price, stocked }) {
    return (
        <div>
            <h3 style={{ color: stocked ? 'red' : 'black' }}>{name}</h3>
            <p>In: {category}</p>
            <p>Price: ${price}</p>
        </div>
    )
}