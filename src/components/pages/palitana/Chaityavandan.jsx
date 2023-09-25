import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./Chaityavandan.scss";
const ultraUniqueCards = [
  {
    id: 1,
    icon: "fa-solid fa-gopuram",
    title: "प्रथम चैत्यवंदन",
    text: "जय तलेटी",
    link: "taleti",
  },
  {
    id: 2,
    icon: "fa-solid fa-gopuram",
    title: "द्वितीय चैत्यवंदन",
    text: "श्री शांतिनाथ भगवान",
    link: "shantinath-dada",
  },
  {
    id: 3,
    icon: "fa-solid fa-gopuram",
    title: "तृतीय चैत्यवंदन",
    text: "श्री रायण पादुका",
    link: "rayan-paduka",
  },
  {
    id: 4,
    icon: "fa-solid fa-gopuram",
    title: "चतुर्थ चैत्यवंदन",
    text: "श्री पुण्डरीक स्वामी भगवान",
    link: "pundrik-swami",
  },
  {
    id: 5,
    icon: "fa-solid fa-gopuram",
    title: "पंचम चैत्यवंदन",
    text: "देवाधि देवा श्री आदिनाथ भगवान",
    link: "aadinath-dada",
  },
];

const UltraUniqueCard = (props) => {
  const getStyles = () => {
    const styles = {
      left: `calc(${props.index * 20}% - ${props.index * 20}px)`,
      zIndex: props.index,
    };

    if (props.selected) {
      styles.left = "50%";
      styles.zIndex = 10;
    }

    return styles;
  };

  const handleOnClick = () => {
    if (!props.selected) {
      props.select(props.id);
    }
  };

  const handleClose = () => {
    if (props.selected) {
      props.select(null);
    }
  };

  const getContent = () => {
    console.log("props.link:", props.link);
    console.log("props.text:", props.text);
    if (props.selected) {
      return (
        <div className="ultra-unique-content">
          <div className="ultra-unique-title">
            <h1
              className="oneHHHH"
              style={{
                color: "rgb(120,120,120)",
              }}
            >
              {props.title}
            </h1>
          </div>
          <div className="ultra-unique-text">
            <Link to={`/${props.link}`} style={{ textDecoration: "none" }}>
              <p className="tageswarpagle">{props.text}</p>
            </Link>
          </div>
          <button
            type="button"
            className="ultra-unique-close-button"
            id="lconenotone"
            onClick={handleClose}
          >
            {/* <i className="iceCREAM" class="fas fa-times" /> */}
            <i
              className="iceCREAM fas fa-times"
              style={{
                color: "rgb(120,120,120)",
              }}
            />
          </button>
        </div>
      );
    }

    return null;
  };

  const classes = classNames("ultra-unique-card-wrapper", {
    selected: props.selected,
  });

  return (
    <div className={classes} style={getStyles()} onClick={handleOnClick}>
      <div className="ultra-unique-card">
        <div className="ultra-unique-icon">
          {/* <i className="iceCREAM" class={props.icon} /> */}
          <i
            className={`iceCREAM ${props.icon}`}
            style={{
              color: "rgb(120,120,120)",
            }}
          />
        </div>
        {getContent()}
      </div>
    </div>
  );
};

const Chaityavandan = () => {
  const [selectedUltraUniqueCard, setSelectedUltraUniqueCard] = useState(null);

  const selectUltraUniqueCard = (id) => {
    if (id !== null) {
      setSelectedUltraUniqueCard(
        ultraUniqueCards.find((uniqueCard) => uniqueCard.id === id) || null
      );
    } else {
      setSelectedUltraUniqueCard(null);
    }
  };

  const getUltraUniqueCards = () => {
    return ultraUniqueCards.map((uniqueCard, index) => {
      return (
        <UltraUniqueCard
          key={uniqueCard.id}
          id={uniqueCard.id}
          index={index}
          icon={uniqueCard.icon}
          title={uniqueCard.title}
          text={uniqueCard.text}
          link={uniqueCard.link}
          selected={
            selectedUltraUniqueCard &&
            selectedUltraUniqueCard.id === uniqueCard.id
          }
          select={selectUltraUniqueCard}
        />
      );
    });
  };

  return (
    <div className="ultra-unique-body">
      <div id="ultra-unique-app">
        <div id="ultra-unique-cards-wrapper">
          <div id="ultra-unique-cards">{getUltraUniqueCards()}</div>
        </div>
      </div>
    </div>
  );
};

export default Chaityavandan;
