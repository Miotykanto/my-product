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
      <form className="container bg-secondary"
          onSubmit={event => {
            event.preventDefault()
            var t = 0;
            for (let i = 0; i<users.length; i++) {
              t= t + users.prix;
            }
            document.getElementById("total").innerHTML=t;
            }}>
      <div className="flex-row">
        <div className="flex-large">
          <Form ajouter={ajouter} setCount={setCount} count={count}/>
        </div>
        <div className="flex-large">
          <Tableau users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
        <div className="flex-large">
          <button className="btn btn-warning total" data-formTarget="#loginModal" data-toggle="modal">TOTAL</button>
        </div>
        <div className="flex-large total" id="total">
        &nbsp;TOTAL =
        </div>
      </div>
    </form>
    )
  };

export default App;