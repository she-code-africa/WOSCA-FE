import React from "react";
export function Card({ title, icon, subtitle, details, value, imgurl }) {

  return (
    <div className="card-box">
      <div className="">
      <div className="card-header tr">
        <div className="icon-cardbox">
          {icon}
        </div>
        <p className="value">{value}</p>
      </div>
      <p className="title">{title}</p>
      </div>
    </div>
  );
}

export function BigCard({ title, subtitle, button }) {
  return (
    <div className="card-box-lg withOverflowingBackground">
      <div className="card-header tr">
        <h6 className="lx-s"> {title}</h6>
        <p>{subtitle}</p>
      </div>
      {button}
    </div>
  );
}
