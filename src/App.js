import Header from './Header.js';
import AddItem from './AddItem.js'
import Content from './Content.js'
import Footer from './Footer.js'
import { useState } from 'react';

function App() {

  const [items,setItem]=useState([
    {
      id:1,
      checked:true,
      item:"Eorms's Book collection"
    },
    {
      id:2,
      checked:false,
      item:"Solo's Book collection"
    },
    {
      id:3,
      checked:false,
      item:"MaaH-MooD's Book collection"
    } 
  ])
  const [newItem,setNewItem]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!newItem)return;
    console.log(newItem);
    addItem(`${newItem}'s Book collection `)
    setNewItem('')
  }
  const saveData = (newItem) => {
    setItem(newItem);
    localStorage.setItem('BookList',JSON.stringify(newItem))
  }
  const addItem = (item) => {
    const id = items.length?items[items.length-1].id +1:1;
    const myNewItem ={id,checked:false,item}
    const listItems=[...items,myNewItem]
    saveData (listItems);
  }

  const handleCheck =(id)=>{
   const listItems = items.map((item)=>
  item.id===id?{...item,checked:!item.checked}:item
   );
   saveData (listItems);

  }

  const handleDelete=(id)=>{
  const listItems= items.filter((item)=> item.id !== id)
   saveData (listItems);
  }

  return (
    <div className="App">
      <Header title='Books Collections'/>
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Content
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer
      length={items.length}
      />
    </div>
  );
}

export default App;
