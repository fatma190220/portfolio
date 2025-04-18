import React, { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [showmodel, setshowmodel] = useState(false);

  const [modeTrans, setmodeTrans] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if (modeTrans === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [modeTrans]);

  return (
    <header className="flex">
      <button
        className="modelbutton"
        onClick={() => {
          setshowmodel(true);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <div />

      <nav>
        <ul className="flex">
        <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">articles</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">speaking</a>
          </li>
          <li>
            <a href="#">uses</a>
          </li>
        </ul>
      </nav>

      <button
        className="modebutton"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            modeTrans === "dark" ? "light" : "dark"
          );
          setmodeTrans(localStorage.getItem("currentMode"));
        }}
      >
        
      {modeTrans === "dark"?<i className="fa-regular fa-moon mode"></i> : <i className="fa-solid fa-sun sun"></i>}  
      </button>

      {showmodel && (
        <div className="back">
          <ul className="model">
            <button
              onClick={() => {
                setshowmodel(false);
              }}
              className="closebutton"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">articles</a>
            </li>
            <li>
              <a href="#">projects</a>
            </li>
            <li>
              <a href="#">speaking</a>
            </li>
            <li>
              <a href="#">uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
