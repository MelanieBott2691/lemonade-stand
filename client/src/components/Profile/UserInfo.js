import React from 'react';
import './UserInfo.css';
import EditUserModal from './EditUserModal';

export default function UserInfo(props) {
  return (
    <div class="card user">
      <img
        className="profilePic"
        src="https://t3.ftcdn.net/jpg/03/64/62/36/240_F_364623624_eTeYrOr8oM08nsPPEmV8gGb60E0MK5vp.jpg"
        alt="John"
      />
      <h1>{props.user.userName}</h1>
      <p class="title">
        {props.user.firstName} {props.user.lastName}
      </p>
      <p>{props.user.email}</p>
    </div>
  );
}
