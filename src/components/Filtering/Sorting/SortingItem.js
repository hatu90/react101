export function SortingItem({ name, isActive, onClick }) {
    return (
        <span style={{ background: isActive ? 'blue' : 'none' }}
            onClick={() => onClick(name)}
        >
            {name}
        </span>
    )
}