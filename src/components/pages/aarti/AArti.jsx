import "./AArti.scss";
import { Link } from "react-router-dom";
import $ from "jquery";

function AArti() {
  $(document).ready(function () {
    var oldId = null;

    $(".tabs-controls__link").click(function (e) {
      e.preventDefault();

      if ($(this).hasClass("tabs-controls__link--active")) {
        return false;
      }

      var currentId = parseInt($(this).data("id"), 10);
      $(".tabs-controls__link--active").removeClass(
        "tabs-controls__link--active"
      );
      $(this).addClass("tabs-controls__link--active");

      if (currentId < oldId) {
        var timing = $(".carderHaha.hidden").length * 100;
        $(".carderHaha ").each(function (index) {
          if (index > currentId - 1 || index == currentId - 1) {
            window.setTimeout(function () {
              $(".carderHaha ").eq(index).removeClass("hidden");
            }, timing - index * 100);
          }
        });
      } else {
        $(".carderHaha").each(function (index) {
          if (index < currentId - 1) {
            window.setTimeout(function () {
              $(".carderHaha ").eq(index).addClass("hidden");
            }, index * 100);
          }
        });
      }

      oldId = currentId;
    });
  });
  return (
    <>
      <div className="gAarti">
        <section class="pageHA">
          <section>
            <ul class="tabs-controls">
              <li class="tabs-controls__item">
                <a
                  href="#"
                  class="tabs-controls__link tabs-controls__link--active"
                  data-id="1"
                >
                  आरती
                </a>
              </li>
              <li class="tabs-controls__item">
                <a href="#" class="tabs-controls__link" data-id="2">
                  मंगल दिवो
                </a>
              </li>
              <li class="tabs-controls__item">
                <a href="#" class="tabs-controls__link" data-id="3">
                  राजेंद्रसूरीश्वरजी दादा
                </a>
              </li>
              <li class="tabs-controls__item">
                <a href="#" class="tabs-controls__link" data-id="4">
                  जयन्तसेन सूरीजी
                </a>
              </li>
              <li class="tabs-controls__item">
                <a href="#" class="tabs-controls__link" data-id="5">
                  नाकोड़ा भैरूजी
                </a>
              </li>
              <li class="tabs-controls__item">
                <a href="#" class="tabs-controls__link" data-id="6">
                  मणिभद्र दादा
                </a>
              </li>
            </ul>
          </section>
          <section class="cardsContainerneeernar">
            <div
              class="carderHaha  card--current"
              id="1"
              style={{
                overflow: "auto",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                आरती
              </h1>
              <h3
                class="tAGHUMEIn"
                style={{
                  lineHeight: "35px",
                  letterSpacing: "3px",
                  fontWeight: "normal",
                }}
              >
                सोने की छडी, रूपे की मशाल, जरीयन का जामा, मोतीयन की माळा, हीरो
                का मुगट, रत्नो का बाजुबंध, सूर्य का तिलक, चंद्र का कुडंल, जीवदया
                प्रतिपालक, इक्षिवाकु वशं विभूषण, अयोध्या नगरी नरेश, नाभिराय ना
                सपूत, मरूदेवा ना नंदन, सुनंदा अने सुमंगला ना हैया ना हार, प्रथम
                राजा, प्रथम श्रमण, प्रथम केवळी, प्रथम तिथँकर, अष्टापद नु आभूषण,
                राणकपुर नु रत्न, शंत्रुजय शिखर शणगार, चक्रेश्र्वरी देवी
                परिपूजिताय गौमुख यक्ष रक्षाय, वृषभ लंछनधारी, श्र्वेत परिकरधारी,
                शिवपद दातार, मोक्षफळ दायक, करूणा ना सागर, दया ना अवतार, अवनि नो
                अलंकार, धरती नो धबकार एवा, श्री सेवन हेवन नो रणकार, एवा मारा
                तमारा आपणा, सौना व्हाला व्हाला, राज राजेश्र्वर, त्रण लोक ना नाथ,
                देवाधिदेव, <b>श्री आदिनाथ दादा</b> नी आरती |
              </h3>
              <div
                className="imagedada"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBlock: "30px",
                }}
              >
                <Link to="https://youtu.be/rvH77SD1Zek?si=SsWE6BQHSCjFFHeV">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "200px",
                      height: "200px",
                    }}
                    src="https://3.bp.blogspot.com/-08fu25HezAA/VwjnxiDkB5I/AAAAAAAACb0/_j0hKq-DX-k-VsRGOu2HMCd80kJyDNiWA/s1600/adinath.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <p>
                {" "}
                <p>
                  जय जय आरती आदि जिणंदा, नाभिराया मरुदेवी के नंदा | <br />
                  <br />
                  पहली आरती पूजा कीजे, <br />
                  नर भव पामी ने ल्हावो लीजे।
                  <br />
                  <span class="right-align">
                    जय जय आरती आदि जिणंदा, नाभिराया मरुदेवी के नंदा |
                  </span>
                  <br />
                </p>
                <br />
                <p>
                  दूसरी आरती दीनदयाला,
                  <br />
                  धुलेवा मंडपमा जग अजुवाळा । <br />
                  <span class="right-align">
                    जय जय आरती आदि जिणंदा, नाभिराया मरुदेवी के नंदा |
                  </span>
                  <br />
                </p>
                <p>
                  तीसरी आरती त्रिभुवन देवा,
                  <br />
                  सुर नर इंद्र करे तोरी सेवा।
                  <br />
                  <span class="right-align">
                    जय जय आरती आदि जिणंदा, नाभिराया मरुदेवी के नंदा |
                  </span>
                  <br />
                </p>
                <p>
                  चौथी आरती चडगति चूरे,
                  <br />
                  मनवांछित फल शिवसुख पूरे। <br />
                  <span class="right-align">
                    जय जय आरती आदि जिणंदा, नाभिराया मरुदेवी के नंदा |
                  </span>
                  <br />
                </p>
                <p>
                  पंचमी आरती पुण्य उपाया, <br />
                  'मूलचंद' ऋषभ गुण गाया।
                  <br />
                  <span class="right-align">
                    जय जय आरती आदि जिणंदा, नाभिराया मरुदेवी के नंदा |
                  </span>
                </p>
              </p>
            </div>
            <div
              class="carderHaha "
              id="2"
              style={{
                overflow: "auto",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                मंगल दिवो
              </h1>
              <h3
                class="tAGHUMEIn"
                style={{
                  lineHeight: "35px",
                  letterSpacing: "3px",
                  fontWeight: "normal",
                }}
              >
                {" "}
                सोने की छडी, रूपे की मशाल, जरीयन का जामा, मोतीयन की माळा, हीरो
                का मुगट, रत्नो का बाजुबंध, सूर्य का तिलक, चंद्र का कुडंल, जीवदया
                प्रतिपालक, इक्षिवाकु वशं विभूषण, अयोध्या नगरी नरेश, नाभिराय ना
                सपूत, मरूदेवा ना नंदन, सुनंदा अने सुमंगला ना हैया ना हार, प्रथम
                राजा, प्रथम श्रमण, प्रथम केवळी, प्रथम तिथँकर, अष्टापद नु आभूषण,
                राणकपुर नु रत्न, शंत्रुजय शिखर शणगार, चक्रेश्र्वरी देवी
                परिपूजिताय गौमुख यक्ष रक्षाय, वृषभ लंछनधारी, श्र्वेत परिकरधारी,
                शिवपद दातार, मोक्षफळ दायक, करूणा ना सागर, दया ना अवतार, अवनि नो
                अलंकार, धरती नो धबकार एवा, श्री सेवन हेवन नो रणकार, एवा मारा
                तमारा आपणा, सौना व्हाला व्हाला, राज राजेश्र्वर, त्रण लोक ना नाथ,
                देवाधिदेव, <b>श्री आदिनाथ दादा</b> नी आरती |
              </h3>
              <div
                className="imagedada"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBlock: "30px",
                }}
              >
                <Link to="https://youtu.be/LvkRKbjz-fA?si=_fWPr49hV_Yqwoc7">
                  {" "}
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "200px",
                      height: "185px",
                    }}
                    src="https://tse3.mm.bing.net/th?id=OIP.Q_wgP7KaMdDKDZB0veIkrwHaGU&pid=Api&P=0&h=180"
                    alt=""
                  />
                </Link>
              </div>
              <p>
                <p>
                  दीवो रे दीवो प्रभु मंगलिक दीवो,
                  <br />
                  आरती उतारण बहु चिरंजीवो
                  <br />
                  <span class="right-align"> ...दीवो रे दीवो... ॥ 1 ॥</span>
                  <br />
                </p>
                <br />
                <p>
                  सोहामणं घेर पर्व दीवाळी,
                  <br />
                  अंबर खेले अमरावाळी । <br />
                  <span class="right-align">...दीवो रे दीवो... ॥ 2 ॥</span>
                  <br />
                </p>
                <p>
                  दीपाल भणे ऐणे कुल अजुवाळी,
                  <br />
                  भावे भगते विघन निवारी।
                  <br />
                  <span class="right-align">..दीवो रे दीवो... ॥ 3 ॥</span>
                  <br />
                </p>
                <p>
                  दीपाल भणे ऐणे ऐ कलिकाले,
                  <br />
                  आरती उतारी राजा कुमार पाले ।
                  <br />
                  <span class="right-align">..दीवो रे दीवो... ॥ 4 ॥</span>
                  <br />
                </p>
                <p>
                  अम घेर मंगलिक तुम घेर मंगलिक,
                  <br />
                  मंगलिक चतुर्विध संघ में होजो ।
                  <br />
                  <span class="right-align">..दीवो रे दीवो... ॥ 5 ॥</span>
                </p>
                <br />
              </p>
            </div>
            <div
              class="carderHaha "
              id="3"
              style={{
                overflow: "auto",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                गुरुदेव श्रीमद विजय राजेंद्र सूरीश्वरजी दादा
              </h1>
              <h3
                class="tAGHUMEIn"
                style={{
                  lineHeight: "35px",
                  letterSpacing: "3px",
                  fontWeight: "normal",
                }}
              >
                | प्रातः स्मरणीय, अनेक ग्रंथ निर्माता, परम योगिन्द्राचार्य,
                कलिकाल कल्पतरु, ऋषभजी ना लाल, माता केशर ना दुलारा, मोहनखेड़ा
                तीर्थाधिपति, दादा गुरुदेव{" "}
                <b>श्रीमद विजय राजेंद्र सूरीश्वरजी महाराज साहेब</b> की आरती |
              </h3>

              <div
                className="imagedada"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBlock: "30px",
                }}
              >
                <Link to="https://youtu.be/YPPJX4mSIkA?si=13in2RsCeYt1ZV86">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "260px",
                      height: "200px",
                    }}
                    src="https://tse3.mm.bing.net/th?id=OIP.RHbQgTLaqpbF2_djnPd7dwHaEK&pid=Api&P=0&h=180"
                    alt=""
                  />
                </Link>
              </div>
              <p>
                <p>
                  ॐ जय जय गुरुदेवा, स्वामी जय जय गुरुदेवा <br />
                  सूरि राजेंद्र की आरती - 2, करपा शिव मेवा।
                  <br />
                  <span class="right-align">॥ ॐ जय जय गुरुदेवा ॥</span>
                </p>
                <br />
                <br />
                <p>
                  छत्तीस गुण के धारक, तारक उपकारी, गुरु तारक उपकारी। <br />
                  शत्रु मित्र सम जाने -2, बाल ब्रह्मचारी ।<br />
                  <span class="right-align">॥ ॐ जय जय गुरुदेवा ॥</span>
                  <br />
                </p>
                <br />
                <p>
                  धन्य पिता ऋषभाजी, केशर महतारी, गुरु केशर महतारी।
                  <br />
                  धन्य भरतपुर नगरी-2, जन्मे गुणधारी ।<br />
                  <span class="right-align">॥ ॐ जय जय गुरुदेवा ॥</span>
                  <br />
                </p>
                <br />
                <p>
                  मिथ्या तिमिर विनाशक, चिन्तामणि जेवा, गुरु चिंतामणि जेवा।
                  <br />
                  मनवांछित फलदाता-2, करिये गुरु सेवा।
                  <br />
                  <span class="right-align">॥ ॐ जय जय गुरुदेवा ॥</span>
                  <br />
                </p>
                <br />
                <p>
                  हुए समाधित गुरुवर, श्री मोहनखेड़ा, गुरु श्री मोहनखेड़ा । <br />
                  करुँ भक्ति तन मन से-2, पार करो बेड़ा। <br />
                  <span class="right-align">॥ ॐ जय जय गुरुदेवा ॥</span>
                </p>
                <br />
                <br />
                <p>
                  पूज्य यतीन्द्र कृपा से, पूरण हुई आशा, गुरु पूरण हुई आशा ।{" "}
                  <br />
                  'कुंदन' वंदन कर ले-2, कटे कर्म पाशा।
                  <br />
                  <span class="right-align">॥ ॐ जय जय गुरुदेवा ॥</span>
                </p>
                <br />
              </p>
            </div>
            <div
              class="carderHaha "
              id="4"
              style={{
                overflow: "auto",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                पुण्य सम्राट जयंतसेन सूरीश्वर जी
              </h1>
              <h3
                class="tAGHUMEIn"
                style={{
                  lineHeight: "35px",
                  letterSpacing: "3px",
                  fontWeight: "normal",
                }}
              >
                पुण्य सम्राट <b>जयंतसेन सूरीश्वर जी</b> महाराज साहेब की आरती
              </h3>
              <div
                className="imagedada"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBlock: "30px",
                }}
              >
                <Link to="https://youtu.be/boYgyM4hAjA?si=ei8BYuJzobx3zlN5">
                  {" "}
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "240px",
                      height: "240px",
                    }}
                    src="https://tse1.mm.bing.net/th?id=OIP.Wcr1RTWhDICjvobDJ4jZZgHaHa&pid=Api&P=0&h=180"
                    alt=""
                  />
                </Link>
              </div>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrcaecat cupidatat nonv
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div
              class="carderHaha "
              id="5"
              style={{
                overflow: "auto",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                श्री नाकोड़ा भैरव देव की आरती
              </h1>
              <h3 class="tAGHUMEIn"></h3>

              <div
                className="imagedada"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBlock: "30px",
                }}
              >
                <Link to="https://youtu.be/NFOXP-tUL4Q?si=ytTABEBapedBneZY">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "200px",
                      height: "190px",
                    }}
                    src="https://tse2.mm.bing.net/th?id=OIP.RUw-MNjppWxxeo1S33vwzAAAAA&pid=Api&P=0&h=180"
                    alt=""
                  />
                </Link>
              </div>

              <p>
                <p>
                  ॐ जय जय जयकारा, वारी जय जय झंकारा,
                  <br /> आरती उतारो भविजन मिलकर, भैरव रखवाला <br /> वारी जीवन
                  रखवाला, ॐ जय जय जयकारा || १ ||
                </p>
                <br />
                <p>
                  तुम समकीत सुरनर मनमोहक, मंगल नितकारा, वारी मंगल नितकारा,{" "}
                  <br /> श्री नाकोडा भैरव सुनदर, जन मन हरनारा <br /> वारी जन मन
                  हरनारा ,ॐ जय जय जयकारा|| २ ||
                </p>
                <br />
                <p>
                  खडग त्रिशूलधर ख-पर सोहे, डमरु करधारा, वारी डमरु करधारा,
                  <br /> अदभुत रुप अनोखी रचना, मकुट कुंडल सारा
                  <br />
                  वारी मकुट कुंडल सारा, ॐ जय जय जयकारा || ३ ||
                </p>
                <br />
                <p>
                  ॐ ह्रीं क्षां क्ष मंत्र बिज युत, नाम जपे ताहरा, वारी नाम जपे
                  ताहरा <br />
                  रिद्धि सिद्धि अरु सम्पद मनोहर, जीवन सुखकारा,
                  <br />
                  वारी जीवन सुखकारा, ॐ जय जय जयकारा || ४ ||
                </p>
                <br />
                <p>
                  कुशल करे तेरा नाम लीया नीत ,आनंद कर नारा, वारी आनंद कर नारा
                  <br />
                  रोग शोक दखु : दारिद्र हरता, वंचित दातारा,
                  <br /> वारी वंचित दातारा, ॐ जय जय जयकारा || ५ ||
                </p>
                <br />
                <p>
                  श्रीफल लापसी मातर सुखडी , लड्डू तेल धारा, वारी लड्डू तेल धारा
                  <br />
                  धुप दीप फु ल माल आरती, नित्त नये रविवारा,
                  <br />
                  वारी नित्त नये रविवारा, ॐ जय जय जयकारा || ६ ||
                </p>
                <br />
                <p>
                  वेयावछ करता संघ तेरी , ध्यान अडग धारा, वारी ध्यान अडग धारा
                  <br />
                  हिम्मत हीत से चित मै धर्ता, भाव्यनन्द प्यारा
                  <br />
                  वारी भाव्यनन्द प्यारा , ॐ जय जय जयकारा || ७ ||
                </p>
                <br />
                <p>
                  दो हजार के शुभ संवत्सर, पोष मॉस रसाला, वारी पोष मॉस रसाला,
                  <br />
                  श्री सघं मिलकर करे आरती, मंगल शीवमाला,
                  <br />
                  वारी मंगल शीवमाला, ॐ जय जय जयकारा || ८ ||
                </p>
              </p>
            </div>
            <div
              class="carderHaha "
              id="6"
              style={{
                overflow: "auto",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                मणिभद्र दादा की आरती
              </h1>

              <h3 class="tAGHUMEIn"> </h3>

              <div
                className="imagedada"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBlock: "30px",
                }}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "190px",
                  }}
                  src="https://tse1.mm.bing.net/th?id=OIP.MlptgphSqffQgs0byZ4-bgHaFu&pid=Api&P=0&h=180"
                  alt=""
                />
              </div>

              <p>
                Labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                volupest laborum.
              </p>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default AArti;
