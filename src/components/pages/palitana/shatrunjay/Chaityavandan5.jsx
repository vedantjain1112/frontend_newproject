import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Allch.scss";

function Chaityavandan5() {
  useEffect(() => {
    ScrollHeight();
    window.addEventListener("resize", ScrollHeight);

    return () => {
      window.removeEventListener("resize", ScrollHeight);
    };
  }, []);

  function ScrollHeight() {
    var content = document.querySelector("#taletijaY");
    var container = document.querySelector("#talhatiPalitana");
    if (content && container) {
      content.style.height = container.offsetHeight + "px";
    }
  }

  return (
    <>
      <div>
        <div
          className="flx"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              {" "}
              <button
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
                  borderRadius: "5px",
                  width: "150px",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Home
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="chaityavandantaleti">
          <main className="MAINTaleti">
            <div id="taletijaY"></div>
            <div id="talhatiPalitana">
              <p className="shatrunjayTaleti">
                {" "}
                Shree Aadinath Dada ( देवाधि देवा श्री आदिनाथ भगवान )
              </p>
              <p id="labarum">
                <img
                  src="https://cdn.ymaws.com/sites/jaina.site-ym.com/resource/resmgr/051817_ETemplate/JayTaleti.png"
                  alt="Pratikraman"
                  style={{
                    marginBottom: "50px",
                  }}
                />
              </p>
              <h3 className="taletiStavan">चैत्यवंदन</h3>
              <p className="taletiPARAGRAPH">
                आदिदेव अलवेसरू, विनीतानो राय; <br />
                नाभिराया कुलमंडणो, मरूदेवता माय... 1<br />
                पांचसे धनुष्यनी देहडी, प्रभुजी परम दयाल; <br />
                चोराशी लाख पूर्वनुं, जस आयु विशाल..... 2<br />
                वृषभ लंछन जिन वृषधरू ए, उत्तम गुणमणि खाण;
                <br />
                तस पद पद्म सेवन थकी, लहीए अविचल ठाण.. 3
              </p>
              <br />
              <br />
              <h3 className="taletiStavan">स्तवन</h3>
              <p className="taletiPARAGRAPH">
                लागी रे लागी रे लागी रे मोहे तुमसे लगन लागी-4
                <br />
                <br />
                रुषभ जिणंद दयाल हो मोहे लागी लगन वा-2
                <br />
                लागी लगन वा छोडी ना छुटे-2 <br />
                जब तक घट मे हे प्राण हो मोहे लागी लगन वा-2
                <br />
                रुषभ जिणंद दयाल हो मोहे लागी लगन वा....1
                <br />
                <br />
                विमलाचल मंडण दुख खंडण-2 <br />
                मंडण धर्म विशाल हो मोहे लागी लगन वा-2
                <br />
                रुषभ जिणंद दयाल हो मोहे लागी लगन वा....2
                <br />
                <br />
                विषधर मोर चोर कामिजन-2
                <br />
                दर्शन कर निहाल हो मोहे लागी लगन वा-2
                <br />
                रुषभ जिणंद दयाल हो मोहे लागी लगन वा....3
                <br />
                <br />
                हुं अनाथ तु त्रिभुवन नाथ-2
                <br />
                कर मोरी संभाळ हो मोहे लागी लगन वा-2
                <br />
                रुषभ जिणंद दयाल हो मोहे लागी लगन वा...4
                <br />
                <br />
                आतम आनंद कंद के दाता-2
                <br />
                दाता परम दयाळ हो मोहे लागी लगन वा-2
                <br />
                रुषभ जिणंद दयाल हो मोहे लागी लगन वा
                <br />
              </p>
              <br />
              <br />
              <h3 className="taletiStavan">स्तुति </h3>
              <p className="taletiPARAGRAPH">
                आदि जिनवर राया, जास सोवन्न काया; <br />
                मरुदेवी माया, धोरी लंछन पाया.
                <br />
                जगत स्थिति निपाया, शुद्ध चारित्र पाया; <br />
                केवल सिरी राया, मोक्ष नगरे सिधाया....1
              </p>
              <p className="sachet">
                <img src="https://i.postimg.cc/4NBYNqCR/22.png" alt="Cachet" />
              </p>
            </div>
          </main>

          <svg>
            <filter id="wavy2">
              <feTurbulence
                x="0"
                y="0"
                baseFrequency="0.02"
                numOctaves="5"
                seed="1"
              />
              <feDisplacementMap in="SourceGraphic" scale="20" />
            </filter>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Chaityavandan5;
