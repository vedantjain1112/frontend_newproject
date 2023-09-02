import React from "react";
import { Link } from "react-router-dom";
import "./Stories.scss";

function Stories() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(135deg, #FF6B6B, #4BC0C8)",
        }}
      >
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
        </div>
        <section className="heroSection">
          <div className="cardGrid">
            <Link className="cardBlast" to="/story/story1">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(http://www.pixelstalk.net/wp-content/uploads/2016/06/Solid-color-1920x1080-wallpapers.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">AIMUTTA MUNI (अइमुत्ता मुनि)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story2">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://wallpaperaccess.com/full/381891.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">ANAND SHRAVAK (आनंद श्रावक)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story3">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(http://getwallpapers.com/wallpaper/full/7/7/4/135893.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">DAMANAK (दमनक)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story4">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://tse1.mm.bing.net/th?id=OIP.sdf2NvB1OA2gkDx8cYTHeQHaHa&pid=Api&P=0&h=180)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">DHARMA KUMAR (धर्म कुमार)</h3>
              </div>
            </Link>

            <Link className="cardBlast" to="/story/story5">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://tse4.mm.bing.net/th?id=OIP.JPJVgSoqR2dRQ4VcsD_BsQHaEK&pid=Api&P=0&h=180",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Chandanbala</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story6">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://tse1.mm.bing.net/th?id=OIP.tNOnxznxdPLpk8hnbn3eTgHaEo&pid=Api&P=0&h=180)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">God Mahavira and the Cow Herder</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story7">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://wallpapercave.com/wp/3qJIPnH.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Dhanasar (धनसार)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story8">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://www.pixelstalk.net/wp-content/uploads/2016/10/Colorful-Abstract-Backgrounds-Free-Download.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">
                  Kuldhar's Daughter (कुलधर की बेटी)
                </h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story9">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://wallpapercave.com/wp/dHllHH1.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Punyasar (पुण्यसार)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story10">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://png.pngtree.com/back_origin_pic/03/62/22/de933b6f087c387d2c1674244f52e741.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Sage Nandisen (ऋषि नंदीसेन)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story11">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://wallup.net/wp-content/uploads/2018/09/28/655980-wallpapers-colors-colorful-background.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">King Hansa (राजा हंस)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story12">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(http://wallpapercave.com/wp/o8HMSAs.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Sumitra (सुमित्रा)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story13">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://wallup.net/wp-content/uploads/2016/01/309145-colorful-multi_color-abstract.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Mairavati (मैरावती)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story14">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://images.freecreatives.com/wp-content/uploads/2016/03/Beautiful-Colorful-Texture.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Kesari (केसरी)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story15">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://i.ytimg.com/vi/TyauNrbnmVo/maxresdefault.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">
                  Surasen and Mahasen (सूरसेन और महासेन)
                </h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story16">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://wallup.net/wp-content/uploads/2018/09/26/447712-texture-abstract-background-colors.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Queen Chelna and King Shrenik</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story17">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://www.songsandportobellos.com/wp-content/uploads/2018/02/colour.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">ChandKaushik (चंदकौशिक)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story18">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(http://wallpapercave.com/wp/Z40nPoo.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Kamal Sen (कमलसेन)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story19">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://wallpapercave.com/wp/wp4531544.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">
                  Monkey and Sugari (बंदर और सुगरी)
                </h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story20">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(http://wallpapercave.com/wp/sMbYgjE.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Punia Shravak (पुनिया श्रावक)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story21">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(http://getwallpapers.com/wallpaper/full/2/0/f/574279.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Shaalibhadra (शालिभद्र)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story22">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://tse1.mm.bing.net/th?id=OIP.ELLgTWqQXs8p0OHyBod6bgHaDw&pid=Api&P=0&h=180)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">From Robbery to KevalGnan</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story23">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://images6.alphacoders.com/414/414206.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">
                  Vipul and Vijan (विपुल और विजान)
                </h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story24">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://images.freecreatives.com/wp-content/uploads/2016/04/Solid-Color-Purple-Background-.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">VajraKumar (वज्रकुमार)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story25">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(http://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Desktop-Solid-Color-Backgrounds.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Elephant and the blind men</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story26">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://images.freecreatives.com/wp-content/uploads/2016/04/Abstract-Solid-ColorBackground.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">King Megharath (राजा मेघरथ)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story27">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://tse2.mm.bing.net/th?id=OIP.D4ILWnEBn9orl36CCw5nxAHaEL&pid=Api&P=0&h=180)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">GautamSwami (गौतमस्वामी)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story28">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://neilpatel.com/wp-content/uploads/2015/10/colors.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">
                  Acharya Hemchandra (आचार्य हेमचन्द्र)
                </h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story29">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(http://1.bp.blogspot.com/-jq6JK52LIU0/UBVygGrmHJI/AAAAAAAAGws/RMowxae2714/s1600/Abstract+Rainbow+Colours+Wallpapers+8.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Dreams of Maa Trishla</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story30">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://jooinn.com/images/color-background-5.png)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Tirthankara Bhagwan Mahavira</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story31">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://www.teahub.io/photos/full/13-133841_free-art-wallpaper-bright-plain-color-background.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Jambu Swami (जम्बू स्वामी)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story32">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(https://cdn.wallpapersafari.com/83/39/ov8cHn.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">Balbhadra Ram (बलभद्र राम)</h3>
              </div>
            </Link>
            <Link className="cardBlast" to="/story/story33">
              <div
                className="cardBackground"
                style={{
                  backgroundImage:
                    "url(http://wallpapercave.com/wp/9IiDyVZ.jpg)",
                }}
              ></div>
              <div className="cardContent">
                <h3 className="cardHeading">
                  Akroshparishahe Kshapak (आक्रोशपरिषहे क्षपक)
                </h3>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Stories;
