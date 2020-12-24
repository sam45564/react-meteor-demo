import React, { useState } from 'react';
import { Session } from 'meteor/session';
import { LocalUser } from './components/LocalUser';
import { RemoteUser } from './components/RemoteUser';

export const App = () => {
  const [user, setUser] = useState("");

  const handleUserChange = e => {
    const { value: user } = e.target;

    if (!user) return;

    setUser(user);
    Session.set('user', user);
  }

  return (
    <div>
      <h1>Delibr Coding Challenge!</h1>
      <hr />
      <select onChange={handleUserChange}>
        <option value="">--Select User--</option>
        <option value="one">User One</option>
        <option value="two">User Two</option>
      </select><br />
      {user && <LocalUser key={user} user={user} />}
      {user && <RemoteUser />}
    </div>
  );
};
