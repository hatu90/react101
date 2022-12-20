export function InstockCheckbox({ checked, onChange }) {
    return (
        <label>
            <input type="checkbox" checked={checked} onChange={onChange} />
            Only in stock
        </label>
    )
}