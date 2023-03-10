import React from "react";
import { CategorySelect } from "./components/Filtering/CategorySelect";
import { InstockCheckbox } from "./components/Filtering/InstockCheckbox";
import { SearchInput } from "./components/Filtering/SearchInput";
import { Sorting } from "./components/Filtering/Sorting";
import { Product } from "./components/Product";

function App() {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Football',
  //     category: 'Sporting goods',
  //     price: 2,
  //     stocked: true
  //   },
  //   {
  //     id: 2,
  //     name: 'Baseball',
  //     category: 'Sporting goods',
  //     price: 3,
  //     stocked: false
  //   },
  //   {
  //     id: 2,
  //     name: 'Baseball game',
  //     category: 'Electronics',
  //     price: 30,
  //     stocked: true
  //   }
  // ];

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, []);

  const categories = ['Sporting goods', 'Electronics', 'Books'];
  const [query, setQuery] = React.useState('');
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [instockChecked, setInstockChecked] = React.useState(false);
  const [sortBy, setSortBy] = React.useState('name');
  const sortCriteria = ['name', 'lower price', 'higher price'];

  const showingProducts = products
    .filter((productItem) => productItem.name.toLowerCase().includes(query.toLowerCase())) // Filter cac productItem co ten chua query
    .filter((productItem) => selectedCategories.includes(productItem.category) || selectedCategories.length === 0) // Filter cac productItem co category chua trong selectedCategories
    .filter((productItem) => instockChecked ? productItem.stocked : true); // Filter cac productItem co trong stock khi chon instockCheckbox; 

  const orderedProducts = [...showingProducts].sort((productItem1, productItem2) => {
    switch (sortBy) {
      case 'higher price':
        return productItem1.price < productItem2.price ? -1 : 1;;
      case 'lower price':
        return productItem1.price < productItem2.price ? 1 : -1;
      default:
        return productItem1.name < productItem2.name ? -1 : 1;
    }
  })

  return (
    <div>
      <SearchInput value={query} onChange={setQuery} />
      <CategorySelect categories={categories} selectedCategories={selectedCategories} onChange={setSelectedCategories} />
      <InstockCheckbox checked={instockChecked} onChange={() => setInstockChecked(!instockChecked)} />
      <Sorting criteria={sortCriteria} onChange={setSortBy} sortBy={sortBy} />
      <hr />
      <Product products={orderedProducts} />
    </div>
  );
}

export default App;
