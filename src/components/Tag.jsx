import React from "react";
import { Link } from "react-router-dom";
import "./Tag.scss";

const TAGS = [
  "stories",
  "facts",
  "sallekhna",
  "pratikraman",
  "jainsymbol",
  "library",
  "sects",
  "festival",
  "panchparmeshthi",
  "aarti",
  "chaityavandan",
  "99",
];

const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children && children.length > 0 ? (
          <>
            {children}
            {children}
          </>
        ) : null}
      </div>
    </div>
  );
};

const Tag = ({ text, link }) => (
  <Link to={link} className="tag">
    {text}
  </Link>
);

const Tagg = () => (
  <>
    <div className="TEXTEDBY" id="tagging">
      <div className="contentofTag">
        <h1
          id="textOFTAG"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
            fontSize: "30px",
            position: "relative",
          }}
        >
          <span className="underlined-text">Know and Learn More</span>
        </h1>
        <h1
          id="textOFTAG"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
            marginBottom: "30px",
            fontSize: "30px",
            position: "relative",
          }}
        >
          <span className="underlined-text">About Jainism 😊</span>
        </h1>
      </div>
    </div>

    <div className="manclsh">
      <div className="ctxt">
        <h1>
          KNOW AND LEARN <br /> MORE ABOUT JAINISM 😊
        </h1>
      </div>
      <div className="appls">
        <div className="tag-list">
          {[...new Array(ROWS)].map((_, i) => (
            <InfiniteLoopSlider
              key={i}
              duration={random(DURATION - 5000, DURATION + 5000)}
              reverse={i % 2}
            >
              {shuffle(TAGS)
                .slice(0, TAGS_PER_ROW)
                .map((tag) => (
                  <Tag text={tag} link={`/${tag}`} key={tag} />
                ))}
            </InfiniteLoopSlider>
          ))}
          <div className="fade" />
        </div>
      </div>
    </div>
  </>
);

export default Tagg;
