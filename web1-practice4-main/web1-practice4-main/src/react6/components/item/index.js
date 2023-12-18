import React, { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "react6/ThemeContext";

const Item = (props) => {
  const context = useContext(ThemeContext);
  console.log(context);

  const { title, content } = props;
  return (
    <div className="component-item">
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Item;
