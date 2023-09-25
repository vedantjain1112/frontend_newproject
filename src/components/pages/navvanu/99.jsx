import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./99.scss";

function Navvanu() {
  useEffect(() => {
    var x = document.getElementsByClassName("anim");

    function myFunction() {
      for (let i = 0; i < x.length; i++) {
        x[i].style.WebkitAnimation = "diagon 1s 1";
        x[i].style.animation = "diagon 1s 1";
      }
    }

    for (let i = 0; i < x.length; i++) {
      x[i].addEventListener("webkitAnimationEnd", myEndFunction);
      x[i].addEventListener("animationend", myEndFunction);
    }

    function myEndFunction() {
      this.className += " ated";
    }

    myFunction();
  }, []);

  const items = [
    "यात्रा के लिए बैग पैक",
    "ब्लैंकेट",
    "शॉल",
    "नैपकिन (2)",
    "प्लास्टिक डब्बा ब्रश करने के लिए (1)",
    "कटाशना",
    "चरवाला",
    "मुंहपत्ती",
    "नवकार वाली",
    "केसर की डिब्बी",
    "वासक्षेप की डिब्बी",
    "मंदिर का बटुआ",
    "यात्रा कार्ड",
    "शत्रुंजय चैत्यवंदन बुक",
    "नोटबुक और पैन",
    "पेन रिलीफ स्प्रे",
    "पेन रिलीफ ऑइंटमेंट",
    "बाम",
    "दंत मंजन",
    "टूथ ब्रश",
    "नारियल तेल",
    "वेसलीन",
    "कंघी",
    "विक्स",
    "टॉर्च",
  ];

  return (
    <>
      <div
        className="buttonContainerContainsBUTTON"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBlock: "30px",
        }}
      >
        <Link to="/">
          <button
            style={{
              border: "2px solid black",
              padding: "10px",
              width: "100px",
              background: "transparent",
              borderRadius: "6px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Home
          </button>
        </Link>
      </div>
      <div className="navannuBody">
        <section className="section99">
          <h1 className="navannu99">
            99 ( नव्वाणु ) में प्रदान की जाने वाली चीजें
          </h1>
          <ul className="unorderedLIST">
            {items.map((item, index) => (
              <li key={index} className="anim listingLI">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Navvanu;
