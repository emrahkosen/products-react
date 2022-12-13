import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "./Row";
import { AiFillFilter } from "react-icons/ai";
import classes from "./Table.module.css";

const Table = (props) => {
  const [subjectSort, setSubjectSort] = useState(null);

  const [messagerows, setMessageRows] = useState(null);

  const language = useSelector((state) => state.language);

  function handleShortBySubject() {
    setSubjectSort((state) => !state);
  }
  const sortfunc = (a, b) => {
    if (subjectSort === null) {
      return 1;
    } else if (subjectSort === true) {
      return a.subject > b.subject ? 1 : -1;
    } else {
      return a.subject < b.subject ? 1 : -1;
    }
  };

  useEffect(() => {
    const myData = []
      .concat(props.messages)
      .sort(sortfunc)
      .map((message, index) => <Row key={index} message={message} />);

    setMessageRows(myData);
  }, [subjectSort]);

  return (
    <div className={classes.component}>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>
              <div className={classes.collomtitle}>
                <div onClick={handleShortBySubject}>
                  {language[language.lang].subject}{" "}
                </div>{" "}
                <AiFillFilter />
              </div>
            </th>
            <th>
              <div className={classes.collomtitle}>
                <div>{language[language.lang].type} </div> <AiFillFilter />
              </div>
            </th>
            <th>
              <div className={classes.collomtitle}>
                <div>{language[language.lang].class} </div> <AiFillFilter />
              </div>
            </th>
            <th>
              <div className={classes.collomtitle}>
                <div>{language[language.lang].date} </div> <AiFillFilter />
              </div>
            </th>
          </tr>

          {messagerows}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
