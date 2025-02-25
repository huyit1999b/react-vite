import Input from 'antd/es/input/Input';
import React, { useState } from 'react';
import './user.scss';
import { Button, notification } from 'antd';
import axios from '../../services/axios.customize';
import { createUserAPI } from '../../services/api.service';

const UserForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleOnClick = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: 'User Created',
        description: 'The user has been created successfully.',
      });
    } else {
      notification.error({
        message: 'Error',
        description: JSON.stringify(res.message),
      });
    }
  };

  return (
    <div className='user-form'>
      <div>
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
        <div>
          <Button
            type='primary'
            onClick={() => handleOnClick()}
          >
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
