import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InfoCard.scss";

function InfoCard({ searchTerm }) {
  const [chaturmasData, setChaturmasData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/info/")
      .then((response) => {
        setChaturmasData(response.data);
        const urls = {};
        response.data.forEach((data) => {
          urls[data._id] = `http://localhost:4001/${data.image}`;
        });
        setImageUrls(urls);

        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const searchQuery = new RegExp(escapedSearchTerm, "i");

    const filtered = chaturmasData.filter((data) => {
      return (
        searchQuery.test(data.name) ||
        searchQuery.test(data.sthal) ||
        searchQuery.test(data.paragraph)
      );
    });

    setFilteredData(filtered);
  }, [chaturmasData, searchTerm]);

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="er">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <>
        {" "}
        <section className="loading">
          <svg viewBox="0 0 710 300" width="100%" height="300">
            <rect width="60" height="300" x="0" />
            <rect width="60" height="300" x="65" />
            <rect width="60" height="300" x="130" />
            <rect width="60" height="300" x="195" />
            <rect width="60" height="300" x="260" />
            <rect width="60" height="300" x="325" />
            <rect width="60" height="300" x="390" />
            <rect width="60" height="300" x="455" />
            <rect width="60" height="300" x="520" />
            <rect width="60" height="300" x="585" />
            <rect width="60" height="300" x="650" />
          </svg>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="bdy">
        {filteredData.length === 0 ? (
          <div className="typing">
            <div className="typewriter-container">
              <h3 className="typewriter-text">No Data Found</h3>
            </div>
          </div>
        ) : (
          filteredData.map((data, index) => (
            <div
              key={data._id}
              className="wrappped"
              style={{ fontFamily: "Tiro Devanagari Hindi', serif" }}
            >
              <div className="personalInfo">
                <img src={imageUrls[data._id]} alt="" />
                <h1
                  className="scrlbr"
                  style={{ fontSize: "30px", overflow: "auto" }}
                >
                  <b
                    className="scrlbr"
                    style={{
                      fontFamily: "Tiro Devanagari Hindi', serif",
                      fontSize: "22px",
                      overflow: "auto",
                    }}
                  >
                    {data.name}
                  </b>
                  <br />
                </h1>
              </div>
              <div className="otherInformation">
                <div className="sthal">
                  <h3
                    className="scrlbr"
                    style={{
                      fontFamily: "Tiro Devanagari Hindi', serif",
                      overflow: "auto",
                    }}
                  >
                    चातुर्मास स्थल: <b className="bold">{data.sthal}</b>
                  </h3>
                </div>
                <div className="bio">
                  <h3
                    style={{
                      fontFamily: "Tiro Devanagari Hindi', serif",
                    }}
                  >
                    अधिक जानकारी :
                  </h3>
                </div>
                <div className="bio-box">
                  <p
                    className="scrlbr"
                    style={{
                      fontFamily: "Tiro Devanagari Hindi', serif",
                      overflow: "auto",
                    }}
                  >
                    {data.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default InfoCard;
