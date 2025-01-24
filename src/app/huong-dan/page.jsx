"use client";

import React, { useState } from "react";
import Job from "@/components/job";
import Menu from "@/components/menu";
import ShortCut from "@/components/shortcut";
import Link from "next/link";
import Feature from "@/components/feature";
import Ingrediants from "@/components/ingrediants";
import Location from "@/components/location";

import("./huongdan.css");

function HuongDan() {
  const [activeComponent, setActiveComponent] = useState("location");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "shortcut":
        return <ShortCut />;
      case "feature":
        return <Feature />;
        case "ingrediants":
          return <Ingrediants />;
          case "location":
            return <Location />;
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
              activeComponent === "feature" ? "join-button-main" : ""
            }`}
            style={{
              transform: activeComponent === "feature" ? "scale(1.3)" : "none",
              maxWidth: activeComponent === "feature" ? "200px" : "150px",
            }}
            onClick={() => setActiveComponent("feature")}
          >
            <span>Tính năng</span>
          </span>
          <span
            className={`join-button ${
              activeComponent === "location" ? "join-button-main" : ""
            }`}
            style={{
              transform: activeComponent === "location" ? "scale(1.3)" : "none",
              maxWidth: activeComponent === "location" ? "200px" : "150px",
            }}
            onClick={() => setActiveComponent("location")}
          >
            <span>Địa điểm</span>
          </span>
          <span
            className={`join-button ${
              activeComponent === "ingrediants" ? "join-button-main" : ""
            }`}
            style={{
              transform: activeComponent === "ingrediants" ? "scale(1.3)" : "none",
              maxWidth: activeComponent === "ingrediants" ? "200px" : "150px",
            }}
            onClick={() => setActiveComponent("ingrediants")}
          >
            <span>Nguyên Liệu</span>
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
