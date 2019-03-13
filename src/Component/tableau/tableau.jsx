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
                  <input className="modif" placeholder="this.props.user.prix"></input><br/><br/>
                <center>
                  <button className="btn btn-dark"
                    onClick={() => {
                      this.props.editRow(a);
                      onClose();
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
                                    <td className="prix">{user.prix}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>this.submit(user.id)}>X</button>
                                        <a>&nbsp;</a><button type="submit" className="btn btn-success" onClick={() =>this.submit1(user.id)}>Edit</button>
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
                </center>	
            );
      }
}
	

export default confirm;