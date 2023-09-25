import React from "react";
import { Link } from "react-router-dom";
import "./Sutra.scss";

function Sutra() {
  const cardData = [
    { title: "दो प्रतिक्रमण", downloadLink: "" },
    { title: "पंच प्रतिक्रमण", downloadLink: "" },
    { title: "भगवान ऋषभदेव", downloadLink: "" },
  ];

  return (
    <>
      <div className="mainclassOFSUTra">
        <div className="buttonConTAINERS">
          <Link to="/" key="home-link">
            <button
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
                borderRadius: "5px",
                width: "150px",
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",
                margin: "0 auto",
                fontSize: "25px",
              }}
            >
              Home
            </button>{" "}
          </Link>
        </div>
        <div className="cardContainingclass">
          {cardData.map((card, index) => (
            <div className="cardBox" key={index}>
              <div className="carding">
                <h2>{card.title}</h2>
                <div className="contenting">
                  <a href={card.downloadLink} download="" target="_blank">
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sutra;
