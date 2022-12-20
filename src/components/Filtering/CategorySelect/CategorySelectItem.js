export function CategorySelectItem({ name, isActive, onClick }) {
    return (
        <span
            style={{ color: isActive ? 'tomato' : 'black' }}
            onClick={() => onClick(name)}
        >
            {name}
        </span>
    )
}