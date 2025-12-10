import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import HeaderInsight from "../components/insight/HeaderInsight";
import Report from "../components/insight/Report";
import SummarySection from "../components/insight/SummarySection";
import ChartSection from "../components/insight/ChartSection";
import LearningStyleSection from "../components/insight/LearningStyleSection";
import RecommendationSection from "../components/insight/RecommendationSection";
import FooterInsight from "../components/insight/FooterInsight";

export default function InsightDashboard() {
  const [range, setRange] = useState(7);

  return (
    <div className="min-h-screen w-full bg-[#f8f8f8] text-gray-900">
      
      {/* NAVBAR dari component HeaderInsight */}
      <HeaderInsight />

      {/* Spacer karena navbar fixed */}
      <div className="h-[100px]"></div>

      {/* CONTENT */}
      <main>
        <Report />
        <SummarySection />
        <ChartSection range={range} setRange={setRange} />
        <LearningStyleSection />
        <RecommendationSection />
      </main>

      <FooterInsight />
    </div>
  );
}
