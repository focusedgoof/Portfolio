import React, { useState } from "react";
import "./Portfolio.css";

const webProjects = [
  {
    title: "Bank Application",
    description:
      "Banking app that allows users to create accounts and manage finances.",
    created: "4 Dec 2020",
    techStack: "HTML CSS JS Figma",
  },
  {
    title: "Canteen Management System",
    description:
      "A system to manage food orders, billing, and inventory in a canteen.",
    created: "4 Dec 2020",
    techStack: "HTML CSS JS Figma",
  },
  {
    title: "E-commerce Platform",
    description:
      "Online platform for buying/selling products with cart and payment features.",
    created: "4 Dec 2020",
    techStack: "HTML CSS JS Figma",
  },
];

const publications = [
  {
    type: "conference",
    heading: "Conference Publications",
    data: [
      {
        title: "Sentiment Analysis on Russia-Ukraine Conflict",
        description:
          "Used ML models (Random Forest, XGBoost, etc.) to analyze Twitter sentiment. Found dominance of negative sentiment and bot activity.",
        link: "https://ieeexplore.ieee.org/abstract/document/10263132/",
        venue: "IEEE InC4 2023",
        publisher: "IEEE",
        date: "29 September 2023",
        github: "#",
      },
      {
        title: "Text Categorization using Supervised ML",
        description:
          "Evaluated models like SVM, Naive Bayes, Logistic Regression. SVM showed highest accuracy in text classification.",
        link: "https://ieeexplore.ieee.org/abstract/document/10145300",
        venue: "IEEE InC4 2023",
        publisher: "IEEE",
        date: "9 June 2023",
        github: "#",
      },
    ],
  },
  {
    type: "book",
    heading: "Book Chapters",
    data: [
      {
        title: "Deep Learning Approaches for Image Recognition",
        description:
          "Chapter discussing convolutional networks and transfer learning in image classification tasks.",
        publisher: "Springer",
        bookTitle: "Advances in Intelligent Systems and Computing",
        date: "15 July 2022",
        link: "https://link.springer.com/chapter/example-link",
      },
    ],
  },
  {
    type: "journal",
    heading: "Journal Articles",
    data: [
      {
        title: "A Survey on Federated Learning",
        description:
          "Comprehensive review on federated learning frameworks, challenges, and applications in edge computing.",
        journal: "Journal of Machine Learning Research",
        publisher: "MIT Press",
        date: "10 February 2023",
        link: "https://jmlr.org/papers/vexample",
      },
    ],
  },
];

const Portfolio = () => {
  const [popupData, setPopupData] = useState({ type: null, index: null });

  const openPopup = (type, index = null) => {
    setPopupData({ type, index });
  };

  const closePopup = () => {
    setPopupData({ type: null, index: null });
  };

  const isPopupOpen = popupData.type !== null;

  const renderProjectPopup = (project) => (
    <>
      <li>
        Created: <span>{project.created}</span>
      </li>
      <li>
        Tech Stack: <span>{project.techStack}</span>
      </li>
    </>
  );

  const renderPublicationItems = (items, type) =>
    items.map((item, i) => (
      <div key={i} className="publication-item">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <ul className="details-info">
          {type === "conference" && (
            <>
              <li>
                Venue: <span>{item.venue}</span>
              </li>
              <li>
                Publisher: <span>{item.publisher}</span>
              </li>
              <li>
                Date: <span>{item.date}</span>
              </li>
              <li>
                Link:{" "}
                <a href={item.link} target="_blank" rel="noreferrer">
                  View Publication
                </a>
              </li>
              {item.github && (
                <li>
                  GitHub:{" "}
                  <a href={item.github} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                </li>
              )}
            </>
          )}
          {type === "book" && (
            <>
              <li>
                Book Title: <span>{item.bookTitle}</span>
              </li>
              <li>
                Publisher: <span>{item.publisher}</span>
              </li>
              <li>
                Date: <span>{item.date}</span>
              </li>
              <li>
                Link:{" "}
                <a href={item.link} target="_blank" rel="noreferrer">
                  View Chapter
                </a>
              </li>
            </>
          )}
          {type === "journal" && (
            <>
              <li>
                Journal: <span>{item.journal}</span>
              </li>
              <li>
                Publisher: <span>{item.publisher}</span>
              </li>
              <li>
                Date: <span>{item.date}</span>
              </li>
              <li>
                Link:{" "}
                <a href={item.link} target="_blank" rel="noreferrer">
                  View Article
                </a>
              </li>
            </>
          )}
        </ul>
        <hr />
      </div>
    ));

  const renderPopup = () => {
    if (!isPopupOpen) return null;

    const { type, index } = popupData;

    if (type === "project") {
      const project = webProjects[index];
      return (
        <div className="portfolio-popup open">
          <div className="portfolio-popup-close" onClick={closePopup}>
            &times;
          </div>
          <h2 className="details-title">{project.title}</h2>
          <p className="details-description">{project.description}</p>
          <ul className="details-info">{renderProjectPopup(project)}</ul>
        </div>
      );
    }

    const pubCategory = publications.find((p) => p.type === type);
    if (!pubCategory) return null;

    return (
      <div className="portfolio-popup open">
        <div className="portfolio-popup-close" onClick={closePopup}>
          &times;
        </div>
        <h2 className="details-title">{pubCategory.heading}</h2>
        {renderPublicationItems(pubCategory.data, type)}
      </div>
    );
  };

  const renderSection = (heading, items, defaultType, isProject = false) => (
    <>
    <div class="row"> <div className="portfolio-heading">
        <h2>{heading}</h2>
      </div>
      <div className="row portfolio-item">
        {items.map((item, index) => (
          <div
            key={index}
            className="portfolio-item-inner shadow-dark"
            onClick={() =>
              openPopup(
                isProject ? defaultType : item.type,
                isProject ? index : null
              )
            }
          >
            <div className="portfolio-wrapper">
              <span className="portfolio-sub-heading">
                {item.title || item.heading}
              </span>
            </div>
          </div>
        ))}
      </div></div>
     
    </>
  );

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-title padd-15">
          <h2>Portfolio</h2>
        </div>

        {renderSection(
          "Website Development Projects:",
          webProjects,
          "project",
          true
        )}
        {renderSection("Research Publications:", publications, null, false)}
        {renderPopup()}
      </div>
    </section>
  );
};

export default Portfolio;
