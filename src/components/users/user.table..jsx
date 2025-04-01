import React, { useEffect, useState } from 'react';
import { notification, Popconfirm, Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import UserFormEdit from './user.form-edit';
import UserDetail from './user-detail';
import { deleteUserAPI } from '../../services/user.api.service';

const UserTable = ({ dataUsers, loadUser }) => {
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
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: 'flex', gap: '10px' }}>
          <EyeOutlined
            onClick={() => handleViewUserDetail(record)}
            style={{ cursor: 'pointer' }}
          />
          <EditOutlined
            onClick={() => handleEditUser(record)}
            style={{ color: 'orange', cursor: 'pointer' }}
          />
          <Popconfirm
            title='Delete the user'
            description='Are you sure to delete this user?'
            onConfirm={() => handleDeleteUser(record)}
            okText='Yes'
            cancelText='No'
          >
            <DeleteOutlined
              style={{ color: 'red', cursor: 'pointer' }}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const [dataUpdate, setDataUpdate] = useState({});
  const [dataUserDetail, setDataUserDetail] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleEditUser = (user) => {
    setIsEditModalOpen(true);
    setDataUpdate(user);
  };

  const handleViewUserDetail = (user) => {
    setIsViewModalOpen(true);
    setDataUserDetail(user);
  };

  const handleDeleteUser = async (user) => {
    const res = await deleteUserAPI(user._id);
    if (res.data) {
      notification.success({
        message: 'User Delete',
        description: 'The user has been deleted successfully.',
      });
      await loadUser();
    } else {
      notification.error({
        message: 'Error',
        description: JSON.stringify(res.message),
      });
    }
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={'_id'}
      />
      <UserFormEdit
        loadUser={loadUser}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
      <UserDetail
        isViewModalOpen={isViewModalOpen}
        setIsViewModalOpen={setIsViewModalOpen}
        dataUserDetail={dataUserDetail}
      />
    </>
  );
};

export default UserTable;
