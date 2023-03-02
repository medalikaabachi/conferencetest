import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import AddConf from './AddConf';
import AddArticle from './AddArticle';
import ListUsers from './ListUsers';
import EditAccount from './EditAccount';

function DashBoard() {
  const user = useSelector((state) => state.authReducer.user);
  console.log(user, 'testtttt');

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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={user.image}
          alt="avatar"
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
        />
        <div>
          <h1 className="mb-3">Welcome to your space</h1>
          <h5 className="mb-3">{user.name}</h5>
          <h5 className="mb-3">{user.email}</h5>
<EditAccount user={user} />

          {user.isadmin && <AddConf />}
          <AddArticle />
        </div>
      </div>
      {user.isadmin && <ListUsers />}
    </div>
  );
}

export default DashBoard;
