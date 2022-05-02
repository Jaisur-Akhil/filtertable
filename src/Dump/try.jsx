/** @format */

import { Users } from '../user';

import React from 'react';

const Try = () => {
  return (
    <ul className='list'>
      {Users.map((user) => (
        <li className='listitem'>{user.first_name}</li>
      ))}
    </ul>
  );
};

export default Try;
