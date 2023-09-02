import React, { useState, useEffect } from "react";
import "./Search.scss";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaSearch } from "react-icons/fa";

function Search({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [liveVoiceSearchResults, setLiveVoiceSearchResults] = useState([]);
  const [isLiveVoiceSearchActive, setIsLiveVoiceSearchActive] = useState(false);

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (transcript && isLiveVoiceSearchActive) {
      handleSearch(transcript);
      setSearchQuery(transcript);
      resetTranscript();
    }
  }, [transcript, handleSearch, isLiveVoiceSearchActive]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };

  const handleSpeechRecognition = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setIsLiveVoiceSearchActive(false);
      handleSearch(searchQuery);
    } else {
      setIsLiveVoiceSearchActive(true);
      const languageOptions = ["hi-IN", "gu-IN", "en-IN"];
      SpeechRecognition.startListening({
        continuous: true,
        language: languageOptions,
      });
    }
  };

  function handleSubmitButton(e) {
    e.preventDefault();
    setIsLiveVoiceSearchActive(false);
    handleSearch(searchQuery);
  }

  return (
    <div className="searchingWrapper" id="hom">
      <form className="isSearching" onSubmit={handleSubmitButton}>
        <input
          type="text"
          placeholder="Search"
          className="searchingInput"
          value={searchQuery}
          onChange={handleChange}
        />
        <i
          className={`fa-solid ${
            listening ? "fa-microphone-slash" : "fa-microphone"
          }`}
          style={{ marginRight: "8px", fontSize: "20px", cursor: "pointer" }}
          onClick={handleSpeechRecognition}
        ></i>
        <button type="submit" className="isSearchingButton">
          <FaSearch
            className="fa-solid fa-magnifying-glass"
            style={{
              fontSize: "19px",
            }}
          />
        </button>
      </form>
      {isLiveVoiceSearchActive && (
        <div>
          <ul>
            {liveVoiceSearchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
