import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserInfoForm() {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.patch(
      `http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/api/users/${localStorage.memberid}`,
      userInfo,
    );
    console.log(res);
    return navigate('/');
  };

  return (
    <div>
      <form onChange={onChange} onSubmit={onSubmit}>
        <div>
          이메일
          <input type="email" name="email" />
        </div>
        <div>
          비밀번호
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="제출" />
        </div>
      </form>
    </div>
  );
}

export default UserInfoForm;
