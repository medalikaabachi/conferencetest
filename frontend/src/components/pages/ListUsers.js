import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllUsers } from '../../redux/actions/userAction'
import UserCard from './UserCard'

function ListUsers() {
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(getAllUsers())},[])
    const users=useSelector((state)=>state.authReducer.users)
    console.log(users,"usersss")

  return (
    <div>
    
      {users && users.map((user)=>(
<UserCard user={user} />
      ))}
    </div>
  )
}

export default ListUsers
