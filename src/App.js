import React, { useState } from 'react';

import Form from './Component/forme/forme';
import Tableau from './Component/tableau/tableau';
import './App.css';
import './Component/forme/forme.css'
import './Component/tableau/tableau.css'
import accounting from './Component/accounting';

const App = () => {
  
  const initialFormState = { id: null, name: '', username: '' }
  const [ currentUser, setCurrentUser ] = useState(initialFormState)
    const usersData = []
  
    const [ users, setUsers ] = useState(usersData)
    const [count, setCount] = useState(0);
    const [ editing, setEditing ] = useState(false)
    
    const updateUser = (id, updatedUser) => {
      setEditing(false)
    
      setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const ajouter = user => {
      user.id = count 
      setUsers([ ...users, user ])
    }

    const somme = user => {
      var tab = []
      var x =0;
      for (let i=0;i<users.length;i++) {
        tab[i] = users[i].prix
        x=parseInt(x)+parseInt(tab[i])
      }
      document.getElementById("somme").innerHTML = 'TOTAL = ' + accounting.formatMoney (x);
    }    

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, prod: user.prod, prix : user.prix })
  }

    return (
      <div className="container bg-secondary"> 

        <div className="flex-row">
          <div className="flex-large">
            <Form ajouter={ajouter} setCount={setCount} count={count}/>
          </div>
          <div className="flex-large">
            <Tableau users={users} deleteUser={deleteUser} editRow={editRow} editing={editing} setEditing={setEditing} updateUser={updateUser} somme={somme}/>
          </div>
        </div>

      </div>
    )
  };

export default App;