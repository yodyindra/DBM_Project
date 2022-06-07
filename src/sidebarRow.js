import React from "react";
import "./sidebarRow.css";

function SidebarRow(props) {
  return (
    <>
      <main>
        <div className="sidebar_row">
          <h2 className="sidebarRow_title">{props.title}</h2>
        </div>
      </main>
    </>
  );
}

export default SidebarRow;
