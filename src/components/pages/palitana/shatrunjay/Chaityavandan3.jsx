import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Allch.scss";

function Chaityavandan3() {
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
                Shree Rayan Pagliya Ji (श्री रायण पगलिया जी )
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
                एह गिरि उपर आदि देव, प्रभु प्रतिमा वंदो <br /> रायण हेठे पादुका,
                पूजीने, आणंदो... 1 <br />
                एह गिरनो महिमा अनंत, कुण करे वखाण: चैत्री पूनमने दिने, तेह अधिको
                जाण.. 2 <br />
                एह तीरथ सेवो सदा, आणी भक्ति उदार;
                <br /> श्री शत्रुंजय सुखदायको, दानविजय जयकार.......3
              </p>
              <br />
              <br />
              <h3 className="taletiStavan">स्तवन</h3>
              <p className="taletiPARAGRAPH">
                नीलुडी रायण तरूतले-सुणसुंदरी, पीलुडा प्रभुना पाय रे गुण मंजरी{" "}
                <br />
                उज्जवल ध्याने ध्याईए, सुणसुंदरी, एही ज मुक्ति-उपाय रे, गुण मंजरी
                <br /> <br />
                नीलुडी रायण तरूतले-सुणसुंदरी, पीलुडा प्रभुना पाय रे गुण
                मंजरी....1
                <br />
                <br />
                शीतल छायाए वेसीए सुणसुंदरी रातडो करी मन रंग रे, गुण मंजरी <br />
                पूजीए सोवन फूलडे सुणसुंदरी जेम होय पावन अंग रे गुण मंजरी <br />
                <br />
                नीलुडी रायण तरूतले-सुणसुंदरी, पीलुडा प्रभुना पाय रे गुण
                मंजरी....2
                <br />
                <br /> खीर झरे जेह उपरे सुणसुंदरी नेह घरीने एह रे, गुण मंजरी{" "}
                <br />
                त्रिजे भवे शिवलहे सुणसुंदरी थाये निर्मल देह रे..गुण मंजरी <br />
                <br /> नीलुडी रायण तरूतले-सुणसुंदरी, पीलुडा प्रभुना पाय रे गुण
                मंजरी....3
                <br />
                <br />
                प्रीत धरी प्रदक्षिणा सुणसुंदरी, दीए एहने जे सार रे, गुण मंजरी
                <br />
                <br /> नीलुडी रायण तरूतले-सुणसुंदरी, पीलुडा प्रभुना पाय रे गुण
                मंजरी....4
                <br />
                <br />
                अभंगप्रीति होय तेहने सुणसुंदरी भवोभव तुम आधार रे... गुण मंजरी{" "}
                <br /> <br />
                नीलुडी रायण तरूतले-सुणसुंदरी, पीलुडा प्रभुना पाय रे गुण
                मंजरी....5 <br />
                <br />
                कुसम पत्र फल मंजरी, सुणसुंदरी शाखा, थडने मूल रे, गुण मंजरी
                <br />
                देव तणा वासाय छे सुणसुंदरी, तीरथने अनुकूल रे. गुण मंजरी <br />{" "}
                <br />
                नीलुडी रायण तरूतले-सुणसुंदरी, पीलुडा प्रभुना पाय रे गुण
                मंजरी....6 <br />
                <br />
                तीरथ ध्यान धरो यदा, सुणसुंदरी, सेवो एहनी छांय रे, गुण मंजरी
                <br />
                ज्ञानविमलगुण भाखियो सुणसुंदरी शत्रुंजय महात्म मांही रे.. गुण
                मंजरी <br /> <br /> नीलुडी रायण तरूतले-सुणसुंदरी, पीलुडा प्रभुना
                पाय रे गुण मंजरी....7
                <br />
              </p>
              <br />
              <br />
              <h3 className="taletiStavan">स्तुति </h3>
              <p className="taletiPARAGRAPH">
                श्री शत्रुंजय आदि जिन आव्या, पूरव नवाणुं वारजी;
                <br />
                अनंत लाभ इहां जिनवर जाणी, समोसर्या निरधाजी.
                <br />
                विमल गिरिवर महिमा मोटो, सिद्धाचल इणे ठामजी; <br />
                कांकरे कांकर अनंता सिद्ध्या, एकसो आठ गिरि नामजी.
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

export default Chaityavandan3;
