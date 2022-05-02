/** @format */

import './App.css';
import Table from './Table';
import { Users } from './user';

import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  console.log(query);

  const search = (Users) => {
    return Users.filter((user) =>
      user.first_name.toLowerCase().includes(query)
    );
  };

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Search..'
        className='search'
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <Table data={search(Users)} />
    </div>
  );
}

export default App;

/*
Map
   <ul className='list'>
        {Users.map((user) => (
          <li key={user.id} className='listitem'>
            {user.first_name}{' '}
          </li>
        ))}
      </ul>


      Map+ filter

       <ul className='list'>
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className='listitem'>
            {user.first_name}{' '}
          </li>
        ))}
      </ul>
*/
