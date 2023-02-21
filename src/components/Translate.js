import React, { useState } from "react";

import Dropdown from "./Dropdown";
import Convert from './Convert';

const languages = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Germany",
    value: "de",
  },
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(languages[1]);
  const [text, setText] = useState("How are you?");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        options={languages}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output:</h3>
      <Convert 
        text={text}
        language={language}
      />
    </div>
  );
};

export default Translate;
