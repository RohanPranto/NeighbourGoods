import React from "react";
import { Link } from "react-router-dom";
import gift from "../assets/gift2.jpg";
import Sell from "../pages/Sell";
import Contact from "./Contact";
function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ paddingTop: 200 }}>
            <h1>Get Your Goods!</h1>
            <p className="para-text">
              Discover a new way to trade items that matter to you!
              NeighbourGoods is the ultimate online destination for local
              trading and exchanging within your neighborhood. Say goodbye to
              unused items cluttering your space , you can give them new life by
              swapping with items you need or desire. Join us today and become a
              part of a vibrant and sustainable local exchange network!
            </p>
            <button className="btn btn-success">Learn More</button>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={gift} alt="gift" />
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-5">
        <h2 className="mb-5 text-center">What do you want to do today?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Sell</h5>
                <p className="card-text">
                  Sell your old unused items and make some money!
                </p>
                <Link
                  className="btn btn-success"
                  style={{ color: "white", textDecoration: "none" }}
                  to="/sell"
                >
                  Sell Now
                </Link>{" "}
                {/* Link to the Sell page */}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Buy</h5>
                <p className="card-text">
                  Buy the items you need, you desire at a cheaper cost!
                </p>
                <Link
                  className="btn btn-success"
                  style={{ color: "white", textDecoration: "none" }}
                  to="/buy"
                >
                  Buy Now
                </Link>{" "}
                {/* Link to the Buy page */}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Trade/Exchange</h5>
                <p className="card-text">
                  Trade/Exchange items you no longer need for items you need!
                </p>
                <Link
                  className="btn btn-success"
                  style={{ color: "white", textDecoration: "none" }}
                  to="/trade"
                >
                  Trade Now
                </Link>{" "}
                {/* Link to the Sell page */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-success text-white p-5">
        <div className="container guide">
          {/* sell row */}
          <div className="row">
            <div className="col-md-6">
              <h2>Sell</h2>
              <p className="para-text">
                Turn your unused items into cash by selling them! Transform
                those items you no longer need or use into a source of income.
                Whether it's clothing, electronics, or other belongings that are
                just collecting dust, you can put them up for sale and earn
                money. It's a simple and effective way to add some extra funds
                to your wallet.Our platform provides you with the opportunity to
                effortlessly sell items you no longer need, from clothing and
                accessories to electronics and household items. You can list
                your items for sale in just a few minutes, and we'll help you
                find buyers in your area. It's a great way to make some extra
                cash while also decluttering your home!
              </p>
              <Link
                className="btn btn-light"
                style={{ textDecoration: "none" }}
                to="/sell"
              >
                Sell Now
              </Link>{" "}
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={gift} alt="gift" />
            </div>
          </div>

          {/* buy row */}
          <div className="row" style={{ marginTop: 150 }}>
            <div className="col-md-6">
              <img className="img-fluid" src={gift} alt="gift" />
            </div>

            <div className="col-md-6">
              <h2>Buy</h2>
              <p className="para-text">
                Discover the chance to obtain essential items at a fraction of
                their original cost! Our platform presents you with the
                effortless ability to buy the items you need, crave, and have
                been previously enjoyed by others. From clothing and accessories
                to electronics and household essentials, you can seamlessly
                navigate through our listings to find precisely what you're
                looking for. This not only allows you to save money but also
                grants you access to a diverse range of items that have been
                pre-loved by our community members. Experience smart and
                economical shopping while fulfilling your needs with ease.
              </p>
              <Link
                className="btn btn-light"
                style={{ textDecoration: "none" }}
                to="/buy"
              >
                Buy Now
              </Link>{" "}
            </div>
          </div>

          {/* trade row */}
          <div className="row" style={{ marginTop: 150 }}>
            <div className="col-md-6">
              <h2>Trade/Exchange</h2>
              <p className="para-text">
                Exchange Unwanted Possessions for What You Truly Desire! Our
                platform empowers you to trade the items that no longer serve
                you for the ones you've been longing for. Whether it's clothing,
                electronics, or belongings that have lost their appeal, you can
                easily swap them and find items that align with your current
                needs. This uncomplicated process not only allows you to breathe
                new life into your belongings but also connects you with the
                things you genuinely value. Unlock the potential of your
                possessions by trading them within our community. Bid farewell
                to the items that have fulfilled their purpose and say hello to
                exciting new additions to your life. It's a straightforward and
                efficient method to refresh your surroundings and infuse new
                energy into your belongings. Begin your journey towards a more
                meaningful exchange experience and let your possessions find new
                purpose.
              </p>
              <Link
                className="btn btn-light"
                style={{ textDecoration: "none" }}
                to="/trade"
              >
                Trade / Exchange Now
              </Link>{" "}
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={gift} alt="gift" />
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </div> // closing div tag
  );
}

export default Home;
