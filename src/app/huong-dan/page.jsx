"use client";

import React, { useState } from "react";
import Job from "@/components/job";
import Menu from "@/components/menu";
import ShortCut from "@/components/shortcut";
import Link from "next/link";

import("./huongdan.css");

function HuongDan() {
  const [activeComponent, setActiveComponent] = useState("menu");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "shortcut":
        return <ShortCut />;
      case "menu":
        return <Menu />;
      case "job":
        return <Job />;
      default:
        return null;
    }
  };

  return (
    <div className="instruction-main">
      <div className="selection-menu">
        <div className="join-container">
          <span
            className={`join-button ${
              activeComponent === "shortcut" ? "join-button-main" : ""
            }`}
            style={{
              transform: activeComponent === "shortcut" ? "scale(1.3)" : "none",
              maxWidth: activeComponent === "shortcut" ? "200px" : "150px",
            }}
            onClick={() => setActiveComponent("shortcut")}
          >
            <span>Phím tắt</span>
          </span>
          <span
            className={`join-button ${
              activeComponent === "menu" ? "join-button-main" : ""
            }`}
            style={{
              transform: activeComponent === "menu" ? "scale(1.3)" : "none",
              maxWidth: activeComponent === "menu" ? "200px" : "150px",
            }}
            onClick={() => setActiveComponent("menu")}
          >
            <span>Menu</span>
          </span>
          <span
            className={`join-button ${
              activeComponent === "job" ? "join-button-main" : ""
            }`}
            style={{
              transform: activeComponent === "job" ? "scale(1.3)" : "none",
              maxWidth: activeComponent === "job" ? "200px" : "150px",
            }}
            onClick={() => setActiveComponent("job")}
          >
            <span>Nghề nghiệp</span>
          </span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">{renderActiveComponent()}</div>
        </div>
      </div>
    </div>
  );
}

export default HuongDan;
