import React from "react";
import "./Footer.scss";
import { Link as ScrollLink } from "react-scroll";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="global">
      <footer id="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_media_icon">
          <li className="eli lii">
            <a href="https://instagram.com/jainvedant1005?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
              <FaInstagram
                icon="fa-brands fa-instagram"
                style={{ cursor: "pointer" }}
              />
            </a>
          </li>
          <li className="eli lii">
            <a href="https://www.facebook.com/jainvedant1121?mibextid=ZbWKwL">
              <FaFacebook
                icon="fa-brands fa-facebook"
                style={{ cursor: "pointer" }}
              />
            </a>
          </li>
          <li className="eli lii">
            <a href="https://www.linkedin.com/in/vedant-jain-1191ab216">
              <FaLinkedin
                icon="fa-brands fa-linkedin"
                style={{ cursor: "pointer" }}
              />
            </a>
          </li>
          <li className="eli lii">
            <a href="https://www.threads.net/@jainvedant1005">
              <i
                className="fa-brands fa-threads"
                style={{ cursor: "pointer" }}
              ></i>
            </a>
          </li>
          <li className="eli lii">
            <a href="https://twitter.com/jainvedant1211?t=ukrLoFER_OBmseKpUHi5pg&s=08">
              <FaTwitter
                icon="fa-brands fa-twitter"
                style={{ cursor: "pointer" }}
              />
            </a>
          </li>
        </ul>

        <ul className="menuIs" id="menuIs">
          <div className="meranaamli">
            <li className="lione">
              <ScrollLink to="hom" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li className="lione">
              <ScrollLink to="chaturmas" smooth={true} duration={500}>
                Chaturmas
              </ScrollLink>
            </li>
            <li className="lione" id="twoFouur">
              <ScrollLink
                to="tirthankara"
                id="twoFour"
                smooth={true}
                duration={500}
              >
                24 Tirthankara's
              </ScrollLink>
            </li>
            <li className="lione">
              <ScrollLink to="fmt" smooth={true} duration={500}>
                Famous Tirth Locations
              </ScrollLink>
            </li>
          </div>
        </ul>
        <p>Developed and maintained by @ Vedant</p>
        <p>All rights reserved</p>
        <ScrollLink to="hom" smooth={true} duration={500}>
          <i
            id="arrowUp"
            className="fa-solid fa-arrow-up"
            style={{
              position: "absolute",
              right: "20px",
              bottom: "20px",
              color: "#fff",
              fontSize: "1.5rem",
              width: "40px",
              height: "42px",
              textAlign: "center",
              border: "2px solid rgb(27, 114, 149)",
              borderRadius: "50%",
              padding: "8px",
              backgroundColor: "#1f242d",
              cursor: "pointer",
            }}
          ></i>
        </ScrollLink>
      </footer>
    </div>
  );
}

export default Footer;
