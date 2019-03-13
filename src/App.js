import React, { useState } from 'react';

import Form from './Component/forme/forme';
import Tableau from './Component/tableau/tableau';
import './App.css';
import './Component/forme/forme.css'
import './Component/tableau/tableau.css'

const App = () => {
    const usersData = []
  
    const [ users, setUsers ] = useState(usersData)
    const [count, setCount] = useState(0);
    // const [ total, setTotal ] = useState(usersData)
    const ajouter = user => {
      user.id = count 
      setUsers([ ...users, user ])
    }

    // const somme = user => {
    //   var t = 0;
    //   t = t + user.prix;
    //   setUsers([ ...users, user ])
    // }

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    const editRow = user => {
      this.user.id="1000";
      this.user.prod = "a";
      this.user.prix = "000";
      setUsers({ id: user.id, prod: user.prod, prix: user.prix })
    }

    return (
      <div className="container bg-secondary">  
      <div className="flex-row">
        <div className="flex-large">
          <Form ajouter={ajouter} setCount={setCount} count={count}/>
        </div>
        <div className="flex-large">
          <Tableau users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
        </div>
      </div>
    )
  };

export default App;