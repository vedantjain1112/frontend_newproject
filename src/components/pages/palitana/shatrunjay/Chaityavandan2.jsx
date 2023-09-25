import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Allch.scss";

function Chaityavandan2() {
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
                Shree Shantinath Dada ( श्री शांतिनाथ दादा )
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
                शांति जिनेसर सोलमा, अचिरासुत वंदो ; <br />
                विश्वसेन कुल नभोमणि, भविजन सुखकंदो......1 <br />
                मृग लंछन आउखु, लाख वरस प्रणाम; <br />
                हत्थिणाउर नयरी धणी, प्रभुजी गुणमणि खाण...2 <br />
                चालीश धनुषनी देहडी ए, सम चउरस संठाण; <br />
                वदन पद्म ज्युं चंदलो, दीठे परम कल्याण......3
              </p>
              <br />
              <br />
              <h3 className="taletiStavan">स्तवन</h3>
              <p className="taletiPARAGRAPH">
                म्हारो मुजरो....म्हारो मुजरो....म्हारो मुजरो....ल्यो ने राज,
                साहिब शांति सलूणा जी
                <br />
                <br />
                अचिराजीनां नंदन तोरे, दरिशन हेते आव्यो; <br /> समकित रीझ करो ने
                स्वामी, भक्ति भेटणं लाव्यो....1 <br />
                <br />
                दु:खभंजन के विरुद्ध तमारु, अमने आशा तुमारी: निरागी बहने घट्यो,
                शी गति होंसे अमारी....2
                <br />
                <br />
                कहशे लोक न ताणी केहवु, एवहुँ स्वामी आगे, पण बाळक जो बोली न जाणे,
                तो केम व्हाला लागे....3
                <br />
                <br />
                मारे सो तु समस्य साहिब, तो किम ओए मानु चिंतामणी जेने गांठे
                बांध्युं, तेहने काम किश्यानुं....4
                <br /> <br />
                अध्यातम रवि उग्यो मुज घट, मोह तिमिर हर्युग जुगते : विमल विजय
                वाचकनो सेवक, राम कहे शुभ भगते....5
              </p>
              <br />
              <br />
              <h3 className="taletiStavan">स्तुति </h3>
              <p className="taletiPARAGRAPH">
                शांति जिनेश्वर समरिये, जेनी अचिरा माय <br /> विश्वसेन कुल
                उपन्या, मृग लांछन पाय; <br /> गजपुर नयरीनो घणी, कंचन वरणी काय,
                <br />
                धनुष चालीशनी देहडी, लाख वरसनुं आय..1
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

export default Chaityavandan2;
