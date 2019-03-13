import { confirmAlert } from 'react-confirm-alert'; // Import
import React, { Component } from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class confirm extends Component {
    submit = (a) => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (  
            <div className="custom-ui" id="popup">
              <h6>Suppression Produit</h6><br/><br/>
            <center>
              <button className="btn btn-dark"
                onClick={() => {
                  this.props.deleteUser(a);
                  onClose();
                }}
              >
                OUI
              </button><a>&nbsp;&nbsp;</a>
              <button  className="btn btn-dark" onClick={onClose}>NON</button>
              </center>
            </div>
          );
        }
      })
    };

    submit1 = (a) => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (  
               
                <div className="custom-ui" id="popup">
                  <input id="entree" className="modif"/><br/><br/>
                  <div id="erreur"></div><br/>
                <center>
                  <button className="btn btn-dark"
                    onClick={() => {
                      if (isNaN(document.getElementById("entree").value)) {
                        var valid="Entrer un nombre";
                        document.getElementById('erreur').innerHTML= valid;
                     } else {
                        var valid="";
                        document.getElementById('erreur').innerHTML= valid;
                        this.editRow(a);
                        
                      }
                    }}
                  >
                    Ok
                  </button><a>&nbsp;&nbsp;</a>
                  <button  className="btn btn-dark" onClick={onClose}>Annuler</button>
                  </center>
                </div>
              );
            }
          })
    };
      render(){
            return (
                <center>
                    <table class="table table-bordered">
                    <thead>
                        <tr className="tab">
                            <th>id</th>
                            <th>Produits</th>
                            <th>Prix</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.length > 0 ? (
                        this.props.users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.prod}</td>
                                    <td id="prix">{user.prix}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>this.submit(user.id)}>X</button>
                                        <a>&nbsp;</a><button type="submit" className="btn btn-success"
                                          onClick={() => {
                                          console.log(user.prix);
                                          this.submit1(user.prix)
                                         }}>Edit</button>
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
                <button className="btn btn-warning" onClick={ () => {
                  console.log(this.user.prix);
                  
                  var i=this.user.prix
                  document.getElementById("somme").innerHTML=i
                }}>TOTAL</button>
                <div id="somme"></div>
                </center>	
            );
      }
}
	
export default confirm;