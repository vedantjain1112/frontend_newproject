import React from "react";
import { Link } from "react-router-dom";
import "./Tag.scss";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];

const TAGS = [
  "stories",
  "facts",
  "sallekhna",
  "pratikraman",
  "jainsymbol",
  "library",
  "sects",
  "festival",
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
        {children}
        {children}
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
  <div className="manclsh">
    <div className="ctxt">
      <h1>
        KNOW AND LEARN <br /> MORE ABOUT JAINISM
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
);

export default Tagg;
