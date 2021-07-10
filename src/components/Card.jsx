import React from "react";

export function Card({ title, icon, subtitle, details, value }) {

  return (
    <div className="card-box">
      <div className="card-title tr">
        <p className="value">{value}</p>
      </div>
      <p className="card-title">{title}</p>
    </div>
  );
}

export function BigCard({ title, subtitle }) {
  return (
    <div className="card-box-lg withOverflowingBackground">
      <div className="card-title tr">
        <h6 className="lx-s"> {title}</h6>
        <p>{subtitle}</p>
      </div>
      <p className="lm">5 Tonnes</p>
    </div>
  );
}
