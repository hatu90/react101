export function SearchInput({ value, onChange }) {
    return (
        <input value={value} onChange={(event) => onChange(event.target.value)} />
    )
}