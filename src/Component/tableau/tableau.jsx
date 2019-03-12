import { confirmAlert } from 'react-confirm-alert'; // Import
import React, { Component } from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class confirm extends Component {
    submit = (a) => {
        confirmAlert({
         
          message: 'Confirmer suppression',
          buttons: [
            {
              label: 'Oui',
              onClick: () => this.props.deleteUser(a)
            },
            {
              label: 'Non',
            }
          ]
        })
    };

    submit1 = (a) => {
        confirmAlert({
            message: 'Modification',
            buttons: [
            {
                label: 'Ok',
                onClick: () => this.props.deleteUser(a)
            },
            {
                label: 'Annuler',
            }
            ]
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