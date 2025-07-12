export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.done}
        checked={item.done}
        onChange={() => {
          onToggleItem(item);
        }}
      />
      <span
        style={
          item.done
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {item.list_item}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
