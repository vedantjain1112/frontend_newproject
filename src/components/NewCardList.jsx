import NewCard from "./NewCard";
import React from "react";
import "./NewCardList.scss";

function NewCardList() {
  return (
    <>
      <div className="bycLass" id="tirthankarasnameS">
        <div className="cont">
          <h1 id="teEXt">24 Tirthankara's</h1>
        </div>
      </div>
      <div className="cardsContaineriAm">
        <NewCard />
      </div>
    </>
  );
}

export default NewCardList;
