import React from "react";
import { useSelector } from "react-redux";

const New = () => {
  const language = useSelector((state) => state.language);
  return (
    <div>
      <h1>{language[language.lang].new} {language[language.lang].message}</h1>
    </div>
  );
};

export default New;
