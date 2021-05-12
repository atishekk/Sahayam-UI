import React, { Component } from "react";
import Tag from "./Tag";

const SideBar = (props) => {
  const tags = ["Hello1", "Hello2", "Hello3"];
  const selectTag = ({ currentTarget: { id } }) => {
    console.log(id);
    return;
  };
  return (
    <div className="sideBarArea">
      <div className="sideBarHeader">Search by tags</div>
      <div className="sideBarTags">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} id={tag} selectTag={selectTag} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
