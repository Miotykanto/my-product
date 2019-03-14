import { confirmAlert } from 'react-confirm-alert'; // Import
import React, { useState } from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

const confirm = props => {

  const initial = { id: null, prod: '', prix: '' }

  const [ user, setUser ] = useState(initial)
        const changed = event => {

           const { name, value } = event.target
        
           setUser({ ...user, [name]: value })
     }

            return (
                <center onSubmit={event => {
                  event.preventDefault()
                }}>
                    <table className="table table-bordered">
                    <thead>
                        <tr className="tab">
                            <th>Id</th>
                            <th>Produits</th>
                            <th>Prix</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.length > 0 ? (
                        props.users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.prod}</td>
                                    <td id="prix" onChange={changed}>{user.prix}</td>
                                    <td>
                      {/* SUPPRESSION */}
                                        <button className="btn btn-danger"
                                        onClick={ () => {
                                          confirmAlert({
                                            customUI: ({ onClose }) => {
                                              return (  
                                                <center>
                                                <div className="custom-ui" id="popup">
                                                  <h6>Suppression Produit</h6><br/>
                                                  <h6>{user.prod}</h6><br/>
                                                  <button className="btn btn-dark"
                                                    onClick={() => {
                                                      props.deleteUser(user.id);
                                                      onClose();
                                                    }}
                                                  >
                                                    OUI
                                                  </button><a>&nbsp;&nbsp;</a>
                                                  <button  className="btn btn-dark" onClick={onClose}>NON</button>
                                                 </div>
                                                 </center>
                                              );
                                            }
                                          })
                                        }
                                        }
                                        >X</button>
                                        <a>&nbsp;</a>
                        {/* MODIFICATION */}
                                        <button className="btn btn-success"
                                          onClick={() => {
                                            confirmAlert({
                                                customUI: ({ onClose }) => {
                                                  return (  
                                                    <form id='ID_FORMULAIRE'>
                                                      <center>
                                                        <div className="custom-ui" id="popup">
                                                          <input name='inputStoreID' placeholder={ user.prix } id="entree" className="modif"></input><br/>
                                                          <p id="e"></p><br/>
                                                                                                              
                                                          <button className="btn btn-dark"
                                                          onClick={(e) => {
                                                            // var valid="Entrer un nombre";
                                                            var test = document.forms['ID_FORMULAIRE'].elements['inputStoreID'].value
                                                              if (isNaN(test) || test=="") {
                                                                var valid = "Entrer un Nombre"
                                                                e.preventDefault()
                                                                document.getElementById('e').innerHTML= valid;
                                                              } else {
                                                                valid="";
                                                                document.getElementById('e').innerHTML= valid;
                                                                user.prix = document.forms['ID_FORMULAIRE'].elements['inputStoreID'].value;
                                                                props.updateUser(user.prix, user)
                                                                props.editRow(user.id);
                                                                onClose();
                                                              }
                                                            }
                                                          } 
                                                          >OK</button><a>&nbsp;&nbsp;</a>

                                                          <button  className="btn btn-dark" onClick={onClose}>Annuler</button>
                                                        </div>
                                                      </center>
                                                    </form>
                                                  );
                                                }
                                              })
                                        }
                                      }
                                         >Edit</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button className="btn btn-warning" onClick={ () => {props.somme(user)}}>TOTAL</button><br/><br/>
                <div id="somme" display="none">TOTAL = </div>
                </center>	
            );
      }

	
export default confirm;