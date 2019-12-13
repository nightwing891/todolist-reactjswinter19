import React from 'react';
import Todo from './Todo';

const List = ({ items, handleComplete }) => (
  <div>
    <h1>List</h1>
    <ul>
      {/* { items.map( item => <Todo key={item.id} id={item.id} todoValue={item.todoValue} complete={item.complete} /> )} */}
      { items.map( item => <Todo key={item.id} {...item} handleComplete={handleComplete} /> )}
    </ul>
  </div>
)

export default List;