import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Allch.scss";

function Chaityavandan4() {
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
                Shree Pundrik Swami Bhagwan ( श्री पुण्डरीक स्वामी भगवान )
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
                आदीश्वर जिनरायनो, गणधर गुणवंत; <br />
                प्रगट नाम पुंडरीक जास, महीमांहे महंत.. 1 <br />
                पंच कोडी साथे मुणींद, अणसण तिहां कीध; <br />
                शुक्लध्यान ध्याता अमूल, केवल वर लीध ..... 2 <br />
                चैत्री पूनमने दिने ए, पाम्या पद महानंद <br />
                ते दिनथी पुंडरीकगिरि, नाम दान सुखकंद.. 3
              </p>
              <br />
              <br />
              <h3 className="taletiStavan">स्तवन</h3>
              <p className="taletiPARAGRAPH">
                एक दिन पुंडरीक गणधरु रे लाल,
                <br />
                पुछे श्री आदिजिणंद सुखकारी रे;
                <br />
                कहीए ते भवजल उतरी रे लाल,
                <br />
                पामीश परमानन्द भववारी रे.... <br />
                <br /> एक दिन पुंडरीक गणधरु रे लाल, पुछे श्री आदिजिणंद सुखकारी
                रे....1
                <br />
                <br /> कहे जिन इण गिरि पामशो रे लाल,
                <br /> नाण अने निर्वाण जयकारी रे : <br />
                तीरथ महिमा वाधशे रे लाल, अधिक अधिक मंडाण निरधारी रे,
                <br /> <br />
                एक दिन पुंडरीक गणधरु रे लाल, पुछे श्री आदिजिणंद सुखकारी रे....2
                <br />
                <br /> इम निसुणी तिहां आवीया रे लाल,
                <br />
                घाती करम कर्या दूर तम वारी रे;
                <br /> पंच क्रोड मुनि पारिवर्या रे लाल, हुआ सिद्धि हजुर भववारी
                रे <br />
                <br /> एक दिन पुंडरीक गणधरु रे लाल, पुछे श्री आदिजिणंद सुखकारी
                रे....3
                <br />
                <br /> चैत्री पुनम दिने कीजीए रे लाल,
                <br /> पूजा विविध प्रकार दिलधारी रे; <br />
                फल प्रदक्षिणा काउसग्गा रे लाल,
                <br /> लोगस्स थुई नमुक्कार नरनारी रे, <br /> <br />
                एक दिन पुंडरीक गणधरु रे लाल, पुछे श्री आदिजिणंद सुखकारी रे....4
                <br /> <br />
                दश वीश त्रीस चालीश भला रे लाल,
                <br /> पचास पुष्पनी माल अति सारी रे;
                <br /> नरभवन लाहो लीजीये रे लाल,
                <br /> जेम होय ज्ञान विशाल मनोहारी रे, <br />
                <br /> एक दिन पुंडरीक गणधरु रे लाल, पुछे श्री आदिजिणंद सुखकारी
                रे....5
                <br />
              </p>
              <br />
              <br />
              <h3 className="taletiStavan">स्तुति </h3>
              <p className="taletiPARAGRAPH">
                पुंडरीक गणधर पाय प्रणमीजे, आदीश्वर जिनचंदजी;
                <br /> नेम विना वीश तीर्थंकर, गिरि चढिआ आनंदजी. <br />
                आगम मांहि पुंडरीक महिमा, भाख्यो ज्ञान दिणंदाजी; <br />
                चैत्री पूनम दिन देवी चक्केसरी, सौभाग्य द्यो सुखकंदाजी.
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

export default Chaityavandan4;
