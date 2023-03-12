import React from "react";
import {Link} from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "ellenitesfay",
    firstname: "Elleni",
    lastname: "Tesfay",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet, consectetur adip 
  lorem, sed diam nonumy Lorem ipsum dolor sit amet, consectetur adip 
  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem ipsum dolor`;
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>{`${currentUser?.firstname} ${currentUser?.lastname}`}</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)} ...
              </Link>
            </td>
            <td>3 hours ago</td>

            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>{`${currentUser?.firstname} ${currentUser?.lastname}`}</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)} ...
              </Link>
            </td>
            <td>5 hours ago</td>

            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>{`${currentUser?.firstname} ${currentUser?.lastname}`}</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)} ...
              </Link>
            </td>
            <td>6 hours ago</td>

            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>{`${currentUser?.firstname} ${currentUser?.lastname}`}</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)} ...
              </Link>
            </td>
            <td>1 day ago</td>

            <td></td>
          </tr>
          <tr>
            <td>{`${currentUser?.firstname} ${currentUser?.lastname}`}</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)} ...
              </Link>
            </td>
            <td>3 days ago</td>

            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
