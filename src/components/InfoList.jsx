import React from "react";
import InfoCard from "./InfoCard";
import "./InfoList.scss";

function InfoList({ searchTerm }) {
  return (
    <>
      <div className="by" id="chaturmas">
        <div className="context">
          <h1 id="txtx">Chaturmas</h1>
        </div>
      </div>

      <div className="cardsContain">
        <InfoCard searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default InfoList;
