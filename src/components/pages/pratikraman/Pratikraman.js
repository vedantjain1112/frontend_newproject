import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pratikraman.scss";

function Pratikraman() {
  useEffect(() => {
    ScrollHeight();
    window.addEventListener("resize", ScrollHeight);

    return () => {
      window.removeEventListener("resize", ScrollHeight);
    };
  }, []);

  function ScrollHeight() {
    var content = document.querySelector("#parchment");
    var container = document.querySelector("#contain");
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              textDecoration: "none",
            }}
          >
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
              Read
            </button>{" "}
          </div>
        </div>
        <div className="verywellknownMain">
          <main>
            <div id="parchment"></div>
            <div id="containingPart">
              <p className="inkTitle">Pratikraman ( प्रतिक्रमण )</p>
              <p id="labarum">
                <img
                  src="https://i.ytimg.com/vi/Qg-rnXScY1Q/0.jpg"
                  alt="Pratikraman"
                  style={{
                    marginBottom: "50px",
                  }}
                />
              </p>
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                आत्मा, अपने शुद्ध रूप में, अनंत धारणा, अनंत ज्ञान, अनंत शक्ति से
                युक्त है और अनासक्त है। सांसारिक आत्मा में ये गुण दिखाई नहीं
                देते क्योंकि वह कर्मों से गंदा होता है। धार्मिक सिद्धांतों और
                पवित्र गतिविधियों का पालन करके, हम अपने कर्मों पर विजय पाते हैं
                और अपनी आत्मा को मुक्ति की ओर ले जाते हैं। विभिन्न प्रकार की
                धार्मिक गतिविधियाँ होती हैं, जिन्हें कभी-कभी अनुष्ठान भी कहा
                जाता है, और उनमें से प्रतिक्रमण सबसे महत्वपूर्ण अनुष्ठानों में
                से एक है। प्रतिक्रमण के दौरान हम दैनिक आधार पर अपने गैर-मेधावी
                कार्यों के लिए पश्चाताप करते हैं। हमें अपनी गलतियों का एहसास
                होता है और हम क्षमा मांगते हैं, जिससे हमें कर्मों की तीव्रता को
                कम करने में मदद मिलती है और साथ ही कर्म बंधन से छुटकारा पाने में
                भी मदद मिलती है। प्रतिक्रमण छह अवष्यकों (आवश्यक अनुष्ठानों) का
                एक संयोजन है। <br /> वे हैं:
              </p>
              <br />
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                i) - सामायिक - समभाव की स्थिति <br />
                ii) - चौविसंथो - चौबीस तीर्थंकरों की पूजा करना <br />
                iii)- वंदना - साधुओं और साध्वियों को नमस्कार <br />
                iv)- प्रतिक्रमण - हमने जो गलत किया है उसका एहसास करना और उस पर
                टिप्पणी करना | <br />
                v)- कायोत्सग्गा - आत्मा का ध्यान | <br />
                vi)- प्रत्याख्यान - त्याग
              </p>
              <br />
              <h3
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "flex-start",
                  fontweight: "600",
                }}
              >
                सामायिक
              </h3>
              <br />
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                सामायिक में हम अड़तालीस मिनट तक समभाव में रहते हैं। सामायिक के
                दौरान हम न केवल सभी सांसारिक मामलों को त्याग देते हैं, बल्कि
                राग-द्वेष से भी दूर रहते हैं। यह गतिविधि हमें अपने जुनून और
                इच्छाओं को शांत करने में मदद करती है। सामायिक के लिए तैयार होने
                के लिए, हम साधारण, साफ सफेद कपड़े पहनते हैं और एक शांत स्थान पर
                रहते हैं। सामायिक में रहते हुए, हम नवकार मंत्र का पाठ करते हैं,
                धर्मग्रंथ पढ़ते हैं, ध्यान आदि करते हैं। सामायिक हमें उन साधुओं
                के जीवन की झलक देता है जो जीवन भर सामायिक में रहते हैं। यह सीधे
                तौर पर हमें साधु या साध्वी का जीवन जीने के लिए प्रोत्साहित करता
                है।
              </p>
              <br />
              <h3
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "flex-start",
                  fontweight: "600",
                }}
              >
                चौविसंथो
              </h3>
              <br />
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                चौविसंथो का अर्थ है चौबीस तीर्थंकरों की आराधना। इसका पाठ करके हम
                चौबीस तीर्थंकरों के प्रति अपना सम्मान प्रकट करते हैं। इसका पाठ
                करते समय हमें याद आता है कि ये जिन कितने विजयी थे, जिन्होंने
                क्रोध, अहंकार, लालच और छल आदि जैसे आंतरिक शत्रुओं पर विजय
                प्राप्त की और यह हमें उनके जैसा बनने के लिए प्रोत्साहित करता है।
                इसे चतुर्विंशतिस्तव भी कहा जाता है।
              </p>
              <br />
              <h3
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "flex-start",
                  fontweight: "600",
                }}
              >
                वन्दना
              </h3>
              <br />
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                वन्दना के दौरान हम भिक्षुओं और भिक्षुणियों को प्रणाम करते हैं और
                उनके प्रति अपनी श्रद्धा व्यक्त करते हैं। वे हमारे वर्तमान
                धार्मिक मार्गदर्शक और उपदेशक हैं। झुकते समय हम विनम्र हो जाते
                हैं और इससे हमें अहंकार और क्रोध पर काबू पाने में मदद मिलती है।
                यह हमें भी उनके जैसा बनने की प्रेरणा देता है।' (यदि कोई साधु या
                भिक्षुणी न हो तो हम उत्तर-पूर्व दिशा में अरिहंतों को प्रणाम करते
                हैं जो वर्तमान में यहां से बहुत दूर रह रहे हैं।)
              </p>
              <br />
              <h3
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "flex-start",
                  fontweight: "600",
                }}
              >
                प्रतिक्रमण
              </h3>
              <br />
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                प्रतिक्रमण दो शब्दों से मिलकर बना है, प्र यानी वापसी और अतिक्रमण
                यानी उल्लंघन। इसका शाब्दिक अर्थ है उल्लंघनों से वापस लौटना। जैन
                गृहस्थों के रूप में, हमें अन्य जीवित प्राणियों के प्रति हिंसा को
                कम करने के लिए बारह छोटे व्रतों का पालन करना चाहिए, जो बदले में
                हमारी अपनी आत्माओं को होने वाली क्षति को कम करते हैं। प्रतिक्रमण
                के दौरान हम इन प्रतिज्ञाओं के दौरान होने वाले किसी भी उल्लंघन के
                लिए अपनी गतिविधियों की समीक्षा करते हैं। इस प्रकार, हम अपने
                कार्यों के लिए क्षमा मांगते हैं और अपनी आत्मा को शुद्ध करते हैं
                और अपने भविष्य के कार्यों को सुधारते हैं। अगर हमने ये कसमें नहीं
                खाई हैं तो हमें कामना करनी चाहिए कि ऐसा दिन आए जब हम ये कसमें खा
                सकें।
              </p>
              <br />
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                प्रतिक्रमण आमतौर पर दिन में दो बार किया जाता है: एक बार सुबह,
                रायसी (सुबह) प्रतिक्रमण, उन चीजों के लिए पश्चाताप करने के लिए जो
                हमने रात के दौरान किए होंगे और एक बार देर शाम देवासी (शाम)
                प्रतिक्रमण, उन चीजों के लिए पश्चाताप करने के लिए जो हमने की थीं।
                दिन के समय में किया है. जो लोग दैनिक प्रतिक्रमण करने में असमर्थ
                हैं उन्हें पाक्षिक (पाक्षिक) प्रतिक्रमण करना चाहिए, जो हर पंद्रह
                दिन में एक बार किया जाता है। कुछ तो ऐसे हैं जिन्हें उसके लिए भी
                समय नहीं मिल पाता; उन्हें हर चार महीने में एक बार चौमासी
                (त्रैमासिक) प्रतिक्रमण करना चाहिए। हालाँकि, अगर किसी को इसके लिए
                समय नहीं मिल पाता है, तो उन्हें साल में एक बार संवत्सरी
                (वार्षिक) प्रतिक्रमण करना चाहिए, जो हर जैन के लिए जरूरी माना
                जाता है। प्रतिक्रमण के दौरान पश्चाताप करके, हम अपनी आत्मा से
                कर्म के बंधन को कम करते हैं और भविष्य में वही पाप करने से बचते
                हैं। यदि हम वर्ष में कम से कम एक बार अपने कर्मों के लिए पश्चाताप
                नहीं करते हैं, तो आत्मा के लिए कर्मों का बंधन गंभीर हो जाता है
                और उससे छुटकारा पाना और भी कठिन हो जाता है। वास्तव में, जैसे ही
                किसी को यह एहसास हो कि उसने पाप किया है, उसे प्रतिक्रमण करना
                चाहिए।
              </p>
              <br />
              <h3
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "flex-start",
                  fontweight: "600",
                }}
              >
                कायोत्सर्ग
              </h3>
              <br />
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                कायोत्सर्ग शब्द दो शब्दों काया अर्थात शरीर और उत्सर्ग अर्थात
                त्याग करना से मिलकर बना है। कायोत्सर्ग का अर्थ है किसी के
                शारीरिक आराम और शारीरिक गतिविधियों को त्यागना, इस प्रकार स्थिर
                रहना, या तो खड़े या अन्य मुद्रा में, और शरीर से अलग आत्मा की
                वास्तविक प्रकृति पर ध्यान केंद्रित करना या नवकार मंत्र या
                चौविसंथो का पाठ करना। यह ध्यान का एक रूप है और शुद्ध कायोत्सर्ग
                का अभ्यास करके हम धीरे-धीरे अपनी मानसिक, मौखिक और शारीरिक
                गतिविधियों पर नियंत्रण हासिल कर लेते हैं।
              </p>
              <br />
              <h3
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "flex-start",
                  fontweight: "600",
                }}
              >
                प्रत्याख्यान
              </h3>
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                यह कुछ गतिविधियों का औपचारिक त्याग है, जो कर्मों के प्रवाह को कम
                या रोक देता है। प्रत्याख्यान हमें अपनी इच्छाओं पर नियंत्रण रखना
                सीखने में मदद करता है और हमें बड़े त्याग के लिए तैयार करता है।
              </p>
              <br />
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                इस प्रकार, प्रतिक्रमण हमें दूसरों को नियंत्रित करने, अच्छा काम
                करने वाले लोगों की सराहना करने और हमें उनके रास्ते पर ले जाने
                में मदद करता है।
              </p>
              <p className="cachet">
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

export default Pratikraman;