import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import PackingList from "../components/PackingList";
import Stats from "../components/Stats";
import fetchList from "../api/fetchList";
import LogoutButton from "../components/LogoutButton";
import insertToList from "../api/insertToList";
import updateTodoDone from "../api/updateTodoDone";
import deleteUserTodos from "../api/deleteAllUserTodos";
import deleteSingleTodo from "../api/deleteSingleTodo";
export default function Home() {
  const [items, setItems] = useState([]);

  // Fetch todo list from Supabase on mount
  const fetchItems = async () => {
    const data = await fetchList();
    setItems(data || []); // Fallback to empty array if null
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddItems = async (item) => {
    console.log("item", item);
    await insertToList(item);
    await fetchItems();
  };

  const handleDeleteItem = async (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
    await deleteSingleTodo(id);
  };

  const handleToggleItem = async (item) => {
    await updateTodoDone(item);
    await fetchItems();
  };

  const handleClearList = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete the list?"
    );
    if (confirmed) setItems([]);
    await deleteUserTodos();
  };

  return (
    <div className="app">
      <Logo name="🏝️ FAR AWAY 🏝️" />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
      <LogoutButton />
    </div>
  );
}
