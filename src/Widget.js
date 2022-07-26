import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const newsArticle = (heading, subtitle) => (
  <div className="widgets__article">
    <div className="widget__articleLeft">
      <FiberManualRecordIcon />
    </div>
    <div className="widget__articleRight">
      <h4>{heading}</h4>
      <p>{subtitle}</p>
    </div>
  </div>
);

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Top 100 programming", "React going number 1")}
      {newsArticle("Bitcoing Breaks $50k", "Bullish going for months")}
      {newsArticle("Covid new variant", "Phillipines alert level 2")}
      {newsArticle("Economy going up again", "Inverstors from other..")}
    </div>
  );
}

export default Widget;
