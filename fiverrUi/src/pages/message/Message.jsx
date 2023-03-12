import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className="link">
            Messages > Elleni Tesfay >
          </Link>
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/108333371/original/b7dcf649b10de56b8dca9b1b05b1d07c660f6bb2/create-3d-ebook-covers.jpg"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis pariatur, earum iure sunt officia neque explicabo velit
              atque aut, aliquam nobis molestias! Vero explicabo quibusdam saepe
              facilis suscipit perspiciatis illum?
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/108333371/original/b7dcf649b10de56b8dca9b1b05b1d07c660f6bb2/create-3d-ebook-covers.jpg"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis pariatur, earum iure sunt officia neque explicabo velit
              atque aut, aliquam nobis molestias! Vero explicabo quibusdam saepe
              facilis suscipit perspiciatis illum?
            </p>
          </div>

          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/108333371/original/b7dcf649b10de56b8dca9b1b05b1d07c660f6bb2/create-3d-ebook-covers.jpg"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis pariatur, earum iure sunt officia neque explicabo velit
              atque aut, aliquam nobis molestias! Vero explicabo quibusdam saepe
              facilis suscipit perspiciatis illum?
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/108333371/original/b7dcf649b10de56b8dca9b1b05b1d07c660f6bb2/create-3d-ebook-covers.jpg"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis pariatur, earum iure sunt officia neque explicabo velit
              atque aut, aliquam nobis molestias! Vero explicabo quibusdam saepe
              facilis suscipit perspiciatis illum?
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/108333371/original/b7dcf649b10de56b8dca9b1b05b1d07c660f6bb2/create-3d-ebook-covers.jpg"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis pariatur, earum iure sunt officia neque explicabo velit
              atque aut, aliquam nobis molestias! Vero explicabo quibusdam saepe
              facilis suscipit perspiciatis illum?
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/108333371/original/b7dcf649b10de56b8dca9b1b05b1d07c660f6bb2/create-3d-ebook-covers.jpg"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis pariatur, earum iure sunt officia neque explicabo velit
              atque aut, aliquam nobis molestias! Vero explicabo quibusdam saepe
              facilis suscipit perspiciatis illum?
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/108333371/original/b7dcf649b10de56b8dca9b1b05b1d07c660f6bb2/create-3d-ebook-covers.jpg"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis pariatur, earum iure sunt officia neque explicabo velit
              atque aut, aliquam nobis molestias! Vero explicabo quibusdam saepe
              facilis suscipit perspiciatis illum?
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/108333371/original/b7dcf649b10de56b8dca9b1b05b1d07c660f6bb2/create-3d-ebook-covers.jpg"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis pariatur, earum iure sunt officia neque explicabo velit
              atque aut, aliquam nobis molestias! Vero explicabo quibusdam saepe
              facilis suscipit perspiciatis illum?
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea placeholder="write a message" cols="30" rows="10" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
