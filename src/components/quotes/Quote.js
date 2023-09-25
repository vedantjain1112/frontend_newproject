import React, { useEffect, useState } from "react";
import "./Quote.scss";
import axios from "axios";

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    axios
      .get("/quote")
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        console.log("Error fetching quotes:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setIsChanging(false);
      }, 1000);

      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [quotes]);

  return (
    <div>
      <article className={`Testimonial${isChanging ? " changing" : ""}`}>
        <section>
          <div id="qout-one">
            {quotes.length > 0 ? (
              <p
                className="bold center-align"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                {quotes[currentQuoteIndex]}
              </p>
            ) : (
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Loading quotes...
              </p>
            )}
          </div>
        </section>
        <div className="circles">
          {quotes.map((_, index) => (
            <div
              key={index}
              className={`circle ${
                index === currentQuoteIndex ? "active" : ""
              }`}
            ></div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default Quote;
