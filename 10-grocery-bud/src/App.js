import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(list.map((item) => {
        if(item.id === editId){
          return {...item, title: name}

        }
        return item
      }))
      showAlert(true, "success", "Item Edited");
      setName('')
      setEditId(null)
      setIsEditing(false)
    } else {
      showAlert(true, "success", "Item addet to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleClearList = () => {
    showAlert(true, "danger", "List Deleted");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item Deleted");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    let newItem = list.find(item => item.id === id)
    setIsEditing(true)
    setEditId(id)
    setName(newItem.title)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showAlert();
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.show && <Alert {...alert} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='e.g Eggs'
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem ={editItem}/>
          <button className='clear-btn' onClick={handleClearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
