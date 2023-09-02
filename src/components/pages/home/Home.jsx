import { useState } from "react";
import React from "react";
import Navbar from "../../header/Navbar";
import Search from "../../Search";
import Card from "../../Card";
import More from "../../More";
import Footer from "../../footer/Footer";
import InfoList from "../../InfoList";
import NewCardList from "../../NewCardList";
import Quiz from "../quiz/Quiz";
import Quote from "../../quotes/Quote";
import Tag from "../../Tag";
import "./Home.scss";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  return (
    <div>
      <Navbar />
      <Quote />
      <Search handleSearch={handleSearch} />
      <InfoList searchTerm={searchTerm} />
      <div className="cardiAm">
        <Card />
      </div>
      <div className="neWcaRd">
        <NewCardList />
      </div>
      <More />
      <Quiz />
      <Tag />
      <Footer />
    </div>
  );
}

export default Home;
