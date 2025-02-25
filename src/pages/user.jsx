import React from 'react';
import UserTable from '../components/users/user.table.';
import UserForm from '../components/users/user.form';

const UserPage = () => {
  return (
    <div>
      <div>
        <UserForm />
        <UserTable />
      </div>
    </div>
  );
};

export default UserPage;
