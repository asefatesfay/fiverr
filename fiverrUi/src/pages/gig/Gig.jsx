import { Slider } from "infinite-react-carousel/lib";
import React from "react";
import "./Gig.scss";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN ></span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png"
              alt=""
              className="pp"
            />
            <span>John Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsToScroll={1} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/273166353/original/36a23dbcca5f787be43e4d27d91668808ca930ec.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/297331964/original/cc45209d9607fde659eab3e914b82ba030bbb4df.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/227338758/original/1317f7d5fc7aaf385b58ac87745181068f47ba15.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/291318306/original/9d5c2f1b1d04d6e643d4482cbd96f1cef7a7d0f1.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285202554/original/c01127ffc44d5984eacb4c34f1bcd8f86fa9625c.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/video/upload/so_0.114175,t_gig_cards_web/m8a0a2zpzbu9xg1fvqh7.png"
              alt=""
            />
          </Slider>
          <h2>About this gig</h2>
          <p>
            Whether you need images for your personal blog, a small business, or
            a large corporation, I have something that will fit your needs. I
            offer a range of image types, including stock photos, product
            images, and custom-designed graphics. I am dedicated to providing
            excellent customer service and ensuring that all of my clients are
            satisfied with their purchases. If you have any questions or special
            requests, please don't hesitate to reach out. I am always happy to
            help.
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png"
                alt=""
              />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="items">
              <div className="item">
                <span className="title">From</span>
                <span className="desc">USA</span>
              </div>
              <div className="item">
                <span className="title">Member since</span>
                <span className="desc">Aug 2022</span>
              </div>
              <div className="item">
                <span className="title">Avg. response time</span>
                <span className="desc">4 hours</span>
              </div>
              <div className="item">
                <span className="title">Last delivery</span>
                <span className="desc">1 day</span>
              </div>
              <div className="item">
                <span className="title">Languages</span>
                <span className="desc">English</span>
              </div>
            </div>
            <hr />
            <p>
              Hi, I’m Ramzi,
              <br />
              A UI/UX Designer with 3+ years of experience from Algeria.
              <br /> In these 3 years, I have worked on many projects in Algeria
              and globally which helped many businesses reach their goal and
              users get their needs. <br />
              On the side, I create content & courses for teaching UX/UI Design
              and graphic design in general on Instagram with the intention of
              educating the next generation of product designers.
            </p>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b73225995664e02232c38230f7bdd4a5-1673421507157/b3c55199-282b-4a25-8888-02a3da45b374.png" alt="" className="pp" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I cannot recommend Ramzika highly enough. The work is exactly as
                requested! Communication was very easy and I was so satisfied
                with my first order that I immediately placed another. I would
                not hesitate to recommend this seller completely. 10/10.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/unlike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I cannot recommend Ramzika highly enough. The work is exactly as
                requested! Communication was very easy and I was so satisfied
                with my first order that I immediately placed another. I would
                not hesitate to recommend this seller completely. 10/10.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/unlike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I cannot recommend Ramzika highly enough. The work is exactly as
                requested! Communication was very easy and I was so satisfied
                with my first order that I immediately placed another. I would
                not hesitate to recommend this seller completely. 10/10.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="packageTab">
          <div className="price">
            <h2>AI generated image</h2>
            <h3>$ 59.99</h3>
          </div>
          <p>Contact me via ''Contact Seller'' button. I will offer a price based on complexity of the image.</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery </span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
          </div>
          <button>Continue</button>
          </div>
          <div className="contactSeller">
            <button>Contact Seller</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
