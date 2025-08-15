import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./WorkPage.css";
import { worksData } from "../../data/artData"; // Import your works data

const WorkPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("illustration");

  // Filter works by category
  const filteredWorks = {
    illustration: worksData.filter((work) =>
      work.category.toLowerCase().includes("illustration")
    ),
    "cover-art": worksData.filter((work) =>
      work.category.toLowerCase().includes("cover")
    ),
    logos: worksData.filter((work) =>
      work.category.toLowerCase().includes("logo")
    ),
  };

  return (
    <section className="work-page">
      <div className="work-page-header">
        <h1 className="work-page-title">Work</h1>

        <div className="work-tabs">
          <Link
            to="illustration"
            className={`tab ${activeTab === "illustration" ? "active" : ""}`}
            onClick={() => setActiveTab("illustration")}
          >
            Illustration
          </Link>
          <Link
            to="cover-art"
            className={`tab ${activeTab === "cover-art" ? "active" : ""}`}
            onClick={() => setActiveTab("cover-art")}
          >
            Cover Art
          </Link>
          <Link
            to="logos"
            className={`tab ${activeTab === "logos" ? "active" : ""}`}
            onClick={() => setActiveTab("logos")}
          >
            Logos
          </Link>
        </div>
      </div>

      <div className="work-grid">
        {filteredWorks[activeTab].map((work) => (
          <Link to={`/work/${work.id}`} key={work.id} className="work-item">
            <img src={work.image} alt={work.title} className="work-image" />
            <div className="work-overlay">
              <h3 className="work-item-title">{work.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WorkPage;
