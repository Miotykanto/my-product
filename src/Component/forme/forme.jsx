import React, { useState } from 'react'

const Form = props => {

   const initial = { id: null, prod: '', prix: '' }

   const [ user, setUser ] = useState(initial)
         const changed = event => {

            const { name, value } = event.target
         
            setUser({ ...user, [name]: value })
      }
   
	return (
		<form id="test"
            onSubmit={event => {
               event.preventDefault()
               var valid;
               if (isNaN(user.prix)) {
                  valid="Entrer un nombre";
                  document.getElementById('valid').innerHTML= valid;
               } else {
                  valid="";
                  document.getElementById('valid').innerHTML= valid;
               if (!user.prod || !user.prix) return 
               var x="";
                  for (let i=1;i<user.prod.length;i++){
                     x=x+user.prod.charAt(i).toLowerCase()
                  }
                  user.prod=user.prod.charAt(0).toUpperCase()+x;
                     props.ajouter(user)
                     props.setCount(props.count +1)
                  
               setUser(initial)
            }
            }}>
               <label>Produit</label>
               <input type="text" name="prod" value={user.prod} onChange={changed}/>
               <label>Prix</label>
               <input type="text" name="prix"  value={user.prix} onChange={changed}/>
               <a>Ar</a>
               <button id="ajout" className="btn btn-info">Ajouter</button>

      <div id="valid"></div>
		</form>
   )
}
export default Form