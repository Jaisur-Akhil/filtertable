/** @format */

import './App.css';
import { Users } from './user';
function App() {
  return (
    <div className='App'>
      <input type='text' placeholder='Search..' className='search' />
      <ul className='list'>
        {Users.map((user) => (
          <li className='listitem'>{user.first_name} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
