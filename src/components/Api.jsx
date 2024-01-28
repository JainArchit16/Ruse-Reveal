import { Component } from "react";

import star from "../assets/star2.png";

export class Api extends Component {
  constructor() {
    super();
    this.state = {
      website: "",
      reviews: [],
      count: "0",
      rate: "0",
    };
  }

  async componentDidMount() {
    try {
      let url = "https://rating-web3.onrender.com/getReviews/amazon";
      let url2 = "https://rating-web3.onrender.com/getReviewCount/amazon";
      let url3 = "https://rating-web3.onrender.com/getAverageRating/amazon";
      let data = await fetch(url);
      let parsedData = await data.json();
      let data2 = await fetch(url2);
      let parsedData2 = await data2.json();
      let data3 = await fetch(url3);
      let parsedData3 = await data3.json();
      this.setState({
        website: parsedData.website,
        reviews: parsedData.reviews,
        count: parsedData2.reviewCount,
        rate: parsedData3.averageRating,
      });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  render() {
    return (
      <div
        className="container px-4 py-2"
        id="featured-3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="row g-4 py-4 row-cols-1 row-cols-lg-3 "
          style={{ width: "500px", padding: "10px" }}
        >
          <div className="feature col " style={{ width: "500px" }}>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
            <h className="f" style={{ color: "#00b9c7" }}>
              {this.state.website}({this.state.count})
              <span style={{ float: "right", color: "#bbbe10" }}>
                rating - {this.state.rate}{" "}
              </span>
            </h>
            <br />
            <img
              src={star}
              style={{ float: "right", height: "15px", width: "65px" }}
            />
            <br />
            <hr
              style={{
                borderStyle: "groove",
                borderWidth: "medium",
                borderColor: "#00b9c7",
                backgroundColor: "#00b9c7",
              }}
            />

            <ol
              id="listreview"
              style={{ backgroundColor: " #2c3e50", textAlign: "left" }}
            >
              {this.state.reviews.map((review, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: " #2c3e50",
                    textAlign: "left",
                    height: "47px",
                  }}
                >
                  <li
                    className="calledlist"
                    style={{ backgroundColor: " #2c3e50", color: "#5b5fa7" }}
                  >
                    {review}
                  </li>
                  <br />
                </div>
              ))}
            </ol>
            <div style={{ backgroundColor: " #2c3e50", textAlign: "center" }}>
              <br />

              <input
                type="text"
                id="addreview"
                name="review"
                placeholder="Add Your Review"
                style={{
                  width: "400px",
                  backgroundColor: "#a9e9f8",
                  borderRadius: "5px",
                  borderColor: "#4c5187",
                  marginBottom: "10px",
                  padding: " 8px 20px",
                }}
              />
              <br />
              <input
                type="submit"
                value="ADD REVIEW"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  marginBottom: "2px",
                  padding: " 8px 20px",
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Api;
