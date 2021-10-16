import PropTypes from "prop-types";
import React from "react";
import "./ProgressBar.css";

const Progress = ({ percent, name, color, type }) => {
  if (type === "circle") {
    let stylesRight;
    let stylesLeft;
    if (percent <= 50) {
      stylesRight = {
        borderColor: color || "#0d6efd",
        transform: `rotate(${(percent / 100) * 360}deg)`
      };
    } else {
      stylesRight = {
        transform: `rotate(180deg)`,
        borderColor: color || "#0d6efd"
      };
      stylesLeft = {
        transform: `rotate(${((percent - 50) / 100) * 360}deg)`,
        borderColor: color || "#0d6efd"
      };
    }

    return (
      <>
        <div className="title">{name}</div>

        <div className="progressC mx-auto">
          <span className="progress-left">
            <span className="progress-bar" style={stylesLeft}></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar" style={stylesRight}></span>
          </span>
          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div className="h2 font-weight-bold">
              {percent}
              <sup className="small">%</sup>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="title">{name}</div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: percent + "%", background: color || "#0d6efd" }}
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100">
          {percent}%
        </div>
      </div>
    </>
  );
};
Progress.propTypes = {
  percent: PropTypes.number.isRequired,
  name: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string
};
export default Progress;
