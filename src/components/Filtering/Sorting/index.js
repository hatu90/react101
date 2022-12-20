import { SortingItem } from "./SortingItem";

export function Sorting({ criteria, sortBy, onChange }) {
    return (
        <div>
            {
                criteria.map((name) => <SortingItem name={name} isActive={sortBy === name} onClick={(criterition) => onChange(criterition)} />)
            }
        </div>
    )
}