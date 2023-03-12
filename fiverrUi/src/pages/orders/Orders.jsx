import React from "react";
import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "adonaitesfay",
    firstname: "Adonai",
    lastname: "Tesfay",
    isSeller: true,
  };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th >{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287129734/original/3db34f64f228e8387ff00920c7f7125404702918/fix-or-enhance-art-generated-by-ai.jpg"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>150</td>
            <td className="user">{currentUser?.username}</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287129734/original/3db34f64f228e8387ff00920c7f7125404702918/fix-or-enhance-art-generated-by-ai.jpg"
                alt=""
              />
            </td>
            <td>Gig 2</td>
            <td>150</td>
            <td className="user">{currentUser?.username}</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287129734/original/3db34f64f228e8387ff00920c7f7125404702918/fix-or-enhance-art-generated-by-ai.jpg"
                alt=""
              />
            </td>
            <td>Gig 3</td>
            <td>150</td>
            <td className="user">{currentUser?.username}</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287129734/original/3db34f64f228e8387ff00920c7f7125404702918/fix-or-enhance-art-generated-by-ai.jpg"
                alt=""
              />
            </td>
            <td>Gig 4</td>
            <td>150</td>
            <td className="user">{currentUser?.username}</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287129734/original/3db34f64f228e8387ff00920c7f7125404702918/fix-or-enhance-art-generated-by-ai.jpg"
                alt=""
              />
            </td>
            <td>Gig 5</td>
            <td>150</td>
            <td className="user">{currentUser?.username}</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
