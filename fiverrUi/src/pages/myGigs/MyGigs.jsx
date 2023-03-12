import React from "react";
import { Link } from "react-router-dom";
import './MyGigs.scss';

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add"><button>Add New Gig</button></Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td><img className="img" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287129734/original/3db34f64f228e8387ff00920c7f7125404702918/fix-or-enhance-art-generated-by-ai.jpg" alt="" /></td>
            <td>Gig 1</td>
            <td>150</td>
            <td>2000</td>
            <td><img className="delete" src="/img/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td><img className="img" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287129734/original/3db34f64f228e8387ff00920c7f7125404702918/fix-or-enhance-art-generated-by-ai.jpg" alt="" /></td>
            <td>Gig 2</td>
            <td>150</td>
            <td>2000</td>
            <td><img className="delete" src="/img/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td><img className="img" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287129734/original/3db34f64f228e8387ff00920c7f7125404702918/fix-or-enhance-art-generated-by-ai.jpg" alt="" /></td>
            <td>Gig 3</td>
            <td>150</td>
            <td>2000</td>
            <td><img className="delete" src="/img/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td><img className="img" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287129734/original/3db34f64f228e8387ff00920c7f7125404702918/fix-or-enhance-art-generated-by-ai.jpg" alt="" /></td>
            <td>Gig 4</td>
            <td>150</td>
            <td>2000</td>
            <td><img className="delete" src="/img/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td><img className="img" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287129734/original/3db34f64f228e8387ff00920c7f7125404702918/fix-or-enhance-art-generated-by-ai.jpg" alt="" /></td>
            <td>Gig 5</td>
            <td>150</td>
            <td>2000</td>
            <td><img className="delete" src="/img/delete.png" alt="" /></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
