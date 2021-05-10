import { makeStyles } from "@material-ui/core";
import React, { Component } from "react";
const Tag = ({ text, selectTag }) => {
  const styles = {
    borderRadius: "7px",
    backgroundColor: "white",
    width: "min-content",
  };
  return (
    <div onClick={selectTag} style={styles}>
      {text}
    </div>
  );
};

export default Tag;
