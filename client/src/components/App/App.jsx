/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment, useEffect, useState } from "react";
// import { Search, Table } from "../";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    // Initial load of data
    axios
      .get("/api/hello")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    /*
    axios
      .get("/api/states")
      .then(response => {
        const data = response.data;
        data.unshift("");
        setStates(data);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/api/genres")
      .then(response => {
        const data = response.data;
        data.unshift("");
        setGenres(data);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/api/attire")
      .then(response => {
        const data = response.data;
        data.unshift("");
        setAttire(data);
      })
      .catch(error => {
        console.log(error);
      });
      */
  }, []);

  const centeredText = css`
    width: 100%;
    text-align: center;
  `;

  return (
    <Fragment>
      <h1 css={centeredText}>React with Flask</h1>
      <p css={centeredText}>{data}</p>
    </Fragment>
  );
};

export default App;
