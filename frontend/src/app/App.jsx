import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', description: '' });

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await axios.get('http://localhost:5000/api/items');
        setItems(response.data);
        console.log(newItem);
    };

    const addItem = async () => {
        const response = await axios.post('http://localhost:5000/api/items', newItem);
        setItems([...items, response.data]);
        setNewItem({ name: '', description: '' });
    };

    const updateItem = async (id, updatedItem) => {
        await axios.put(`http://localhost:5000/api/items/${id}`, updatedItem);
        fetchItems();
    };

    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:5000/api/items/${id}`);
        fetchItems();
    };

    return (
        <div className="App">
            <h1>CRUD App</h1>
            <input
                type="text"
                placeholder="Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Description"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                        <button onClick={() => updateItem(item.id, { ...item, name: 'Updated Name' })}>Update</button>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;