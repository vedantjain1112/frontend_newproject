import React, { useEffect, useRef } from "react";
import "./Googletranslate.scss";
const GoogleTranslate = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!scriptLoaded.current) {
      // Load Google Translate API script dynamically
      const googleTranslateScript = document.createElement("script");
      googleTranslateScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      googleTranslateScript.async = true;
      document.body.appendChild(googleTranslateScript);

      // Initialize the Google Translate widget
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };

      scriptLoaded.current = true;
    }
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
