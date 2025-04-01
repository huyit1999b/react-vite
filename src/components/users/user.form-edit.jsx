import Input from 'antd/es/input/Input';
import React, { useEffect, useState } from 'react';
import './user.scss';
import { Modal, notification } from 'antd';
import { updateUserAPI } from '../../services/user.api.service';

const UserFormEdit = (props) => {
  const { loadUser, isEditModalOpen, setIsEditModalOpen, dataUpdate, setDataUpdate } = props;

  const [userId, setUserId] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmitForm = async () => {
    const res = await updateUserAPI(userId, fullName, phone);
    if (res.data) {
      notification.success({
        message: 'User Updated',
        description: 'The user has been updated successfully.',
      });
      resetAndCloseData();
      await loadUser();
    } else {
      notification.error({
        message: 'Error',
        description: JSON.stringify(res.message),
      });
    }
  };

  useEffect(() => {
    setUserId(dataUpdate._id);
    setFullName(dataUpdate.fullName);
    setPhone(dataUpdate.phone)
  }, [dataUpdate]);

  const resetAndCloseData = () => {
    setIsEditModalOpen(false);
    setUserId('');
    setFullName('');
    setPhone('');
  };

  return (
    <div className='user-form'>
      <Modal
        title='UPDATE USER'
        open={isEditModalOpen}
        onOk={() => handleSubmitForm()}
        onCancel={() => resetAndCloseData()}
        okText='Save'
      >
        <div className='form-control'>
          <span>User Id</span>
          <Input
            value={userId}
            disabled
          />
        </div>
        <div className='form-control'>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div className='form-control'>
          <span>Phone Number</span>
          <Input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default UserFormEdit;
