import React, { Component } from 'react'

export default class Total extends React.Component { 
 
render() { 
return (
<div className="modal" id="loginModal" tabIndex="-1">
<div className="modal-dialogue">
  <div className="modal-content">
    <div className="modal-header">
      <h4 className="modal-title">Modification</h4>
    </div>
    <div className="modal-body">
      <input className="form-control"></input>
    </div>
    <div className="modal-footer">
      <button className="btn btn-dark total">Ok</button>
      <button className="btn btn-dark total" data-dismiss="modal">Annuler</button>
    </div>
  </div>
</div>
</div>
)} 
};
