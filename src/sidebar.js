import React from "react";
import SidebarRow from "./sidebarRow";

function Sidebar() {
  return (
    <>
      <main>
        <div className="sidebar">
          <SidebarRow title="home" />
          <SidebarRow title="home" />
          <SidebarRow title="home" />
        </div>
      </main>
    </>
  );
}

export default Sidebar;
