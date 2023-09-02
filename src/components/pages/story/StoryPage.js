import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import storiesData from "./StoryData";
import "./StoryPage.scss";

function StoryPage() {
  const { storyId } = useParams();
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    const foundStory = storiesData.find((story) => story.id === storyId);
    setSelectedStory(foundStory);
  }, [storyId]);

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

  if (!selectedStory) {
    return null;
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
            <Link to="/stories">
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
                Stories
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="verywellknownMain">
          <main>
            <div id="parchment"></div>
            <div id="containingPart">
              <p className="inkTitle">{selectedStory.name}</p>
              <p id="labarum">
                <img
                  src={selectedStory.imageUrl}
                  alt="Labarum"
                  style={{
                    marginBottom: "30px",
                  }}
                />
              </p>
              <p
                style={{
                  lineHeight: "60px",
                  letterSpacing: "3px",
                }}
              >
                {selectedStory.content}
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

export default StoryPage;
