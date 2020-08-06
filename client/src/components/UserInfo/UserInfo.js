import React from 'react';
import './UserInfo.css';
import EditUserModal from './EditUserModal';

export default function UserInfo(props) {
  return (
    <div className="card">
      <div className="text-center img-circle">
        <img
          alt="product"
          className="img-circle"
          style={{ width: '10rem' }}
          variant="top"
          src={props.user.imageUrl}
        />
      </div>
      <div className="card-body ">
        <h5 className="card-title">{props.user.id}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <label htmlFor="un">Username:</label>
          <input id="un" value={props.user.userName} />
        </li>
        <li className="list-group-item">
          <label htmlFor="em">Email:</label>
          <input id="em" value={props.user.email} />
        </li>
      </ul>
      <div className="card-body">
        <EditUserModal user={props.user} onChange={props.onChange} />
      </div>
    </div>
  );
}
