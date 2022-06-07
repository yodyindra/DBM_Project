import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Overview from "./monumentDetail";
import Location from "./location";
import Sidebar from "./sidebar";
import Develop from "./develop";
import Timeline from "./timeline";
import Progress from "./progress";
import Fund from "./fund";
import NFTPage from "./nft-page";
import OwnerNFT from "./owner-nft";
import FinanceReport from "./finance-report";
import BuyConfirm from "./buyConfirmation";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/location" element={<Location />} />
        <Route path="/develop" element={<Develop />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/fund" element={<Fund />} />
        <Route path="/nft-page" element={<NFTPage />} />
        <Route path="/owner-nft" element={<OwnerNFT />} />
        <Route path="/finance-report" element={<FinanceReport />} />
        <Route path="/buy-confirm" element={<BuyConfirm />} />
      </Routes>
    </div>
  );
}
