import Input from 'antd/es/input/Input';
import React, { useState } from 'react';
import './user.scss';
import { Button, Modal, notification } from 'antd';
import { createUserAPI } from '../../services/user.api.service';

const UserForm = ({ loadUser }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitForm = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: 'User Created',
        description: 'The user has been created successfully.',
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

  const resetAndCloseData = () => {
    setIsModalOpen(false);
    setFullName('');
    setEmail('');
    setPassword('');
    setPhone('');
  };

  return (
    <div className='user-form'>
      <div>
        <div className='top-section'>
          <h2 className='title'>User List</h2>
          <Button
            className='btn btn-primary'
            onClick={() => setIsModalOpen(true)}
          >
            Create User
          </Button>
        </div>
      </div>
      <Modal
        title='CREATE USER'
        open={isModalOpen}
        onOk={() => handleSubmitForm()}
        onCancel={() => resetAndCloseData()}
        okText='CREATE'
      >
        <div className='form-control'>
          <span>Full Name</span>
          <Input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div className='form-control'>
          <span>Email</span>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className='form-control'>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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

export default UserForm;
