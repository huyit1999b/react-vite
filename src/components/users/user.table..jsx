import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { fetchAllUserApi } from '../../services/api.service';

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  const loadUser = async () => {
    const res = await fetchAllUserApi();
    setDataUsers(res.data);
  };

  return (
    <Table
      columns={columns}
      dataSource={dataUsers}
      rowKey={'_id'}
    />
  );
};

export default UserTable;
