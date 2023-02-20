import React from 'react'
import {useSelector} from "react-redux"
import { Spinner } from 'reactstrap';
import AddConf from './AddConf';


function DashBoard() {

  const user=useSelector((state)=>state.authReducer.user)
  console.log(user,"testtttt")



  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>
    );
  }
  return (
    <div>
      <img  src={'C:/Users/pc/OneDrive/Bureau/conference/backend/uploads/avatar.avif'} alt='avatar.avif'/>
    <h1 className="mb-3 ml-4">
   welcome to your space 
    </h1>
    
    <h5 className="mb-3 ml-4">{user.name}</h5>
    <h5 className="mb-3 ml-4">{user.email}</h5>
    <AddConf/>
  </div>
  )
}

export default DashBoard