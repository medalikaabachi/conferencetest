import React from 'react'

function UserCard({user}) {
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.image} alt="avatar" />
      <h2>fghfgg</h2>
    </div>
  )
}

export default UserCard
