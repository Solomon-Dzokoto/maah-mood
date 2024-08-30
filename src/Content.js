import React from 'react';
import ItemsList from './ItemsList';

 const Content = ({items,handleCheck,handleDelete}) =>{
   
    return(
    <main>
      {items.length>0?(
      <ItemsList 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete} 
      />
      ):(
        <h1 style={{marginTop:"3rem",
          color:"red"
        }}>
         YOUR LIST IS EMPTY 
        </h1>
      )}
      
    </main>
  )
 }

 export default Content 