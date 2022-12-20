import { CategorySelectItem } from "./CategorySelectItem";

// categories: ['Sporting goods', 'Electronics', 'Books']
// selectedCategories: ['Sporting goods']
// onChange: (newSelectedCategories) => void: Change selectedCategories

export function CategorySelect({ categories, selectedCategories, onChange }) {
    const onSelectCategory = (category) => {
        if (selectedCategories.includes(category)) {
            onChange(selectedCategories.filter((selectedCategory) => selectedCategory !== category));
        } else {
            onChange(selectedCategories.concat(category));
        }
    }
    
    return (
        <div>
            {
                categories.map((category) => (
                    <CategorySelectItem name={category} isActive={selectedCategories.includes(category)} onClick={onSelectCategory} />
                ))
            }
        </div>
    )
}