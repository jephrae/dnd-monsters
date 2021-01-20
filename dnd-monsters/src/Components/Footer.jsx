import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <div>
      <p>
        data from{" "}
        <a href="https://www.dnd5eapi.co/" style={{ textDecoration: "none" }}>
          {" "}
          dnd5api{" "}
        </a>
      </p>
    </div>
  );
}
