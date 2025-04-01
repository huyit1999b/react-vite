import React, { useEffect, useState } from 'react';
import UserTable from '../components/users/user.table.';
import UserForm from '../components/users/user.form';
import { fetchAllUserApi } from '../services/user.api.service';

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserApi();
    setDataUsers(res.data);
  };

  return (
    <div>
      <div>
        <UserForm loadUser={loadUser} />
        <UserTable
          dataUsers={dataUsers}
          loadUser={loadUser}
        />
      </div>
    </div>
  );
};

export default UserPage;
