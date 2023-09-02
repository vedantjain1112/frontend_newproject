import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card() {
  useEffect(() => {
    const flexContainer = document.getElementById("flex-container");
    const leftButton = document.getElementById("left-bbton");
    const rightButton = document.getElementById("right-bbton");
    let numSlides = flexContainer.children.length;
    let slideWidth = flexContainer.scrollWidth / numSlides;
    let curSlide = 0;

    function handleLeftButtonClick() {
      curSlide = Math.max(curSlide - 1, 0);
      flexContainer.scrollTo({
        left: curSlide * slideWidth,
        behavior: "smooth",
      });
    }

    function handleRightButtonClick() {
      curSlide = Math.min(curSlide + 1, numSlides - 1);
      flexContainer.scrollTo({
        left: curSlide * slideWidth,
        behavior: "smooth",
      });
    }

    leftButton.addEventListener("click", handleLeftButtonClick);
    rightButton.addEventListener("click", handleRightButtonClick);

    return () => {
      leftButton.removeEventListener("click", handleLeftButtonClick);
      rightButton.removeEventListener("click", handleRightButtonClick);
    };
  }, []);

  return (
    <>
      <div className="by" id="tirthankara">
        <div className="context">
          <h1 id="txxXt">24 Tirthankara's</h1>
        </div>
      </div>
      <div className="boooody">
        <div className="canvaas">
          <div className="contain" id="contain">
            <div className="flex-container" id="flex-container">
              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--city">
                            <h2 className="caarrd-front__heading">
                              पहले तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--city">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://tse3.mm.bing.net/th?id=OIP.Q_wgP7KaMdDKDZB0veIkrwHaGU&pid=Api&P=0&h=180"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--city">
                          दादा आदिनाथ <br /> (Rishabhdev Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : बैल</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--city"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--ski">
                            <h2 className="caarrd-front__heading">
                              दूसरे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--ski">
                              View me
                            </p>
                          </div>
                        </div>

                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://tse3.mm.bing.net/th?id=OIP.tCv1TWzNeVEudiCvTg0lEgHaJ4&pid=Api&P=0&h=180"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--ski">
                          अजीतनाथ दादा <br /> (Ajitnath Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : हाथी</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--ski"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--beach">
                            <h2 className="caarrd-front__heading">
                              तीसरे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--beach">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://2.bp.blogspot.com/-eajUj9QAcbM/Wg13jcSkgjI/AAAAAAAAJwE/v9znLoI09mUtL85zPRYZusjwM2umQ967gCLcBGAs/s1600/jain7.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--beach">
                          संभवनाथ जी <br /> (Sambhavnath Ji)
                        </h3>
                        <p className="inside-page__text">
                          प्रतीक चिन्ह : घोड़ा
                        </p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--beach"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--camping">
                            <h2 className="caarrd-front__heading">
                              चौथे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--camping">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://4.bp.blogspot.com/-TDscEx-gHOc/WhPsItWCm9I/AAAAAAAAJ3E/aSn0s2JJchQrubJmGZx9g0-l74_CaZjqwCLcBGAs/s1600/jain17.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--camping">
                          अभिनंदन जी <br /> (Abhinandan Swami Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : बंदर</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--camping"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--city">
                            <h2 className="caarrd-front__heading">
                              पांचवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--city">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://www.indianetzone.com/photos_gallery/53/Sumatinatha.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--city">
                          सुमतिनाथ जी <br /> (Sumatinath Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : चकवा</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--city"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--ski">
                            <h2 className="caarrd-front__heading">
                              छठ्ठे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--ski">
                              View me
                            </p>
                          </div>
                        </div>

                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://www.indianetzone.com/photos_gallery/53/Lord_Padmaprabha_Sixth_Jain_Tirthankara.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--ski">
                          पद्मरभु जी <br />
                          (Padmaprabhu Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : कमल</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--ski"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--beach">
                            <h2 className="caarrd-front__heading">
                              सातवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--beach">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://1.bp.blogspot.com/-0YJRESJMpho/Wg08-34SHbI/AAAAAAAAJu8/fevQ1qIQXnU9W_1i6MemtQqDWiU-ZiYOQCLcBGAs/s1600/jain8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--beach">
                          सुपार्श्वनाथ जी <br /> (Suparshvanath Ji)
                        </h3>
                        <p className="inside-page__text">
                          प्रतीक चिन्ह : साथिया
                        </p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--beach"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--camping">
                            <h2 className="caarrd-front__heading">
                              आठवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--camping">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://1.bp.blogspot.com/-2oNz-ws4CtE/WhPmG1k7h8I/AAAAAAAAJ08/AQkX-APxC30cSfqmbbKJHWmBKTywtaXKQCLcBGAs/s1600/jain%2Bnew%2B8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--camping">
                          चंदा प्रभु जी <br />
                          (Chandaa Prabhu Ji)
                        </h3>
                        <p className="inside-page__text">
                          प्रतीक चिन्ह : चंद्रमा
                        </p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--camping"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--city">
                            <h2 className="caarrd-front__heading">
                              नवमे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--city">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://lh4.ggpht.com/-s3TpciW-O4U/T6akscickzI/AAAAAAAAAho/x5bk5ILYxHU/dada%252520aadeshwarji%25252C%252520shahapur%25255B37%25255D.jpg?imgmax=800"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--city">
                          सुविधिनाथ जी <br /> (Suvidhinath Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : मगर</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--city"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--ski">
                            <h2 className="caarrd-front__heading">
                              दसवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--ski">
                              View me
                            </p>
                          </div>
                        </div>

                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://tse1.mm.bing.net/th?id=OIP.ms1nCm9dXasKcEyQMKgK8AAAAA&pid=Api&P=0&h=180"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--ski">
                          शीतलनाथ जी <br />
                          (Sheetalnath Ji)
                        </h3>
                        <p className="inside-page__text">
                          प्रतीक चिन्ह : कल्पव्रक्ष
                        </p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--ski"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--beach">
                            <h2 className="caarrd-front__heading">
                              ग्यारहवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--beach">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://www.indianetzone.com/photos_gallery/53/Lord_Shreyansanath_Eleventh_Jain_Tirthankara.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--beach">
                          श्रेयांशनाथ जी <br /> (Shreyanshnath Ji)
                        </h3>
                        <p className="inside-page__text">
                          प्रतीक चिन्ह : गेंडा
                        </p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--beach"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--camping">
                            <h2 className="caarrd-front__heading">
                              बारहवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--camping">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://1.bp.blogspot.com/-jkcVFetqNfk/YQ-kElgOIiI/AAAAAAAACrs/2pmrrRmj2nU8fmb4ysttQl3mNy6-EPUrQCLcBGAsYHQ/w1200-h630-p-k-no-nu/%25E0%25A4%25A4%25E0%25A5%2580%25E0%25A4%25B0%25E0%25A5%258D%25E0%25A4%25A5%25E0%25A4%2582%25E0%25A4%2595%25E0%25A4%25B0%2B%25E0%25A4%25B6%25E0%25A5%258D%25E0%25A4%25B0%25E0%25A5%2580%2B%25E0%25A4%25B5%25E0%25A4%25BE%25E0%25A4%25B8%25E0%25A5%2581%25E0%25A4%25AA%25E0%25A5%2582%25E0%25A4%259C%25E0%25A5%258D%25E0%25A4%25AF%2B%25E0%25A4%259C%25E0%25A5%2580%2B%25E0%25A4%2595%25E0%25A5%2580%2B%25E0%25A4%2586%25E0%25A4%25B0%25E0%25A4%25A4%25E0%25A5%2580.webp"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--camping">
                          वासुपूज्य जी <br /> (Vasupujya Swami Ji)
                        </h3>
                        <p className="inside-page__text">
                          प्रतीक चिन्ह : भैंसा
                        </p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--camping"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--city">
                            <h2 className="caarrd-front__heading">
                              तेरहवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--city">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://4.bp.blogspot.com/-cZjuIGoTrv8/Vwjh3wokZVI/AAAAAAAACaA/o56gZgUsc9IXnqnTxfi8Fp4IyY13vBjgA/s640/Vimal%2BNath.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--city">
                          विमलनाथ जी <br /> (Vimalnath Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : शूकर</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--city"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--ski">
                            <h2 className="caarrd-front__heading">
                              चवदवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--ski">
                              View me
                            </p>
                          </div>
                        </div>

                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://tse1.mm.bing.net/th?id=OIP.EpUCcHtNdKrXKX5xS7eOHQAAAA&pid=Api&P=0&h=180"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--ski">
                          अनन्तनाथ जी <br /> (Anantnath Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : सेही</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--ski"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--beach">
                            <h2 className="caarrd-front__heading">
                              पन्द्राहवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--beach">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://1.bp.blogspot.com/-DtfXawBm9Xw/Wi-LjiUiLGI/AAAAAAAAKaE/hcmyichaoZobYrpS0kwtIgAzdP6N_qGjwCLcBGAs/s1600/Shree%2BDharma%2BNath%2B8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--beach">
                          धर्मनाथ जी <br /> (Dharmanath Ji)
                        </h3>
                        <p className="inside-page__text">
                          प्रतीक चिन्ह : ब्रजदंड
                        </p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--beach"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--camping">
                            <h2 className="caarrd-front__heading">
                              सोलहवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--camping">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://1.bp.blogspot.com/-NFMKygSjntw/YAMELJTFhOI/AAAAAAAANmo/V6l0CAWLf_ktXaQuJm13SLH98Cfr4SvSgCLcBGAsYHQ/s225/bhopawar.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--camping">
                          शांतिनाथ जी <br /> (Shantinath Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : हिरण</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--camping"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--city">
                            <h2 className="caarrd-front__heading">
                              सत्रवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--city">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://www.indianetzone.com/photos_gallery/53/Kunthunath_Seventeenth_Jain_Tirthankara.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--city">
                          कुंथुनाथ जी <br /> (Kunthunath Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : बकरा</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--city"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--ski">
                            <h2 className="caarrd-front__heading">
                              अठारह तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--ski">
                              View me
                            </p>
                          </div>
                        </div>

                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://cdn.britannica.com/s:690x388,c:crop/02/143402-050-D1E4EF06/Statue-Jain-Tirthankara-Mahavira.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--ski">
                          अरहनाथ जी <br /> (Arhanath Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : मछली</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--ski"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--beach">
                            <h2 className="caarrd-front__heading">
                              उन्नीसवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--beach">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://2.bp.blogspot.com/-mOUy7k3MK9I/VwjbzwtZmMI/AAAAAAAACYo/i2755xQQuhskr3qu8luw8AwUNHUX5g-0Q/s1600/Mallinath.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--beach">
                          मल्लिनाथ जी <br /> (Mallinath Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : कलश</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--beach"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--camping">
                            <h2 className="caarrd-front__heading">
                              बिस्वे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--camping">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://www.astamangala.com/wp-content/uploads/2014/02/DSCF1502-2-kopie-21.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--camping">
                          मुनिसुव्रत जी <br /> (Munisuvrat Swami Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : कछुआ</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--camping"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--city">
                            <h2 className="caarrd-front__heading">
                              इक्कीसवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--city">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://tse3.mm.bing.net/th?id=OIP.ue-jfdv-yaGDjHcAoM5lwgAAAA&pid=Api&P=0&h=180"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--city">
                          नमिनाथ जी <br /> (Namimath Ji)
                        </h3>
                        <p className="inside-page__text">
                          प्रतीक चिन्ह : नीलकमल
                        </p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--city"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--ski">
                            <h2 className="caarrd-front__heading">
                              बाविसवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--ski">
                              View me
                            </p>
                          </div>
                        </div>

                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://i.ytimg.com/vi/dS55WlQJKYU/hqdefault.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--ski">
                          अरिष्टनेमि जी <br /> (Neminath Dada)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : शंख</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--ski"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--beach">
                            <h2 className="caarrd-front__heading">
                              तेविसवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--beach">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://tse3.mm.bing.net/th?id=OIP.8IOUaiaQNPtmIbGZF_jZAgFYC1&pid=Api&P=0&h=180"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--beach">
                          पार्श्वनाथ जी <br /> (Parshvanath Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : सर्प</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--beach"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="sliide">
                <section className="caarrd-section">
                  <div className="caarrds">
                    <div className="flip-caarrd">
                      <div className="flip-caarrd__container">
                        <div className="caarrd-front">
                          <div className="caarrd-front__tp caarrd-front__tp--camping">
                            <h2 className="caarrd-front__heading">
                              चौबीसवे तीर्थंकर
                            </h2>
                          </div>

                          <div className="caarrd-front__bt">
                            <p className="caarrd-front__text-view caarrd-front__text-view--camping">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="caarrd-back">
                          <img
                            className="video__media video__container"
                            src="https://1.bp.blogspot.com/-qeUJ_h4VlfA/X0COcQi12_I/AAAAAAAAU8o/qWzhmkaymbcGnjEIUHcFE4F7lKYOtxpgACLcBGAsYHQ/s1080/jain_yatra_118200731_334136557630534_5834081035920222795_n.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--camping">
                          महावीर स्वामी जी <br /> (Mahavira Swami Ji)
                        </h3>
                        <p className="inside-page__text">प्रतीक चिन्ह : सिंह</p>
                        <Link
                          to="#"
                          className="inside-page__btn inside-page__btn--camping"
                        >
                          अधिक जाने
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* comment  */}
            </div>

            <div className="bton left-bbtn" id="left-bbton">
              L
            </div>
            <div className="bton right-bbtn" id="right-bbton">
              R
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
