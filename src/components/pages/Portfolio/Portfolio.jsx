import React, { useState } from "react";
import "./Portfolio.css";

const webProjects = [
  {
    title: "Bank Application",
    description:
      "Bank Application with react with key features such as account summary, beneficiary management, transaction history, and contact support, incorporating key concepts such as routing, form validation, asynchronous operations, and state management.",
    created: "20 Dec 2022",
    techStack: "HTML CSS React",
    github: "https://github.com/focusedgoof/Banking-Application",
  },
  {
    title: "Canteen Management System",
    description:
      "Canteen Management System supports two roles: Admin and Employee. After login, Admins can manage items, menus, purchases, and employee wallets. Employees can view menus, check wallet balance, and make purchases.",
    created: "10 August 2024",
    techStack: "HTML CSS JS Django",
    github: "https://github.com/focusedgoof/Canteen-Management-System-Django",
  },
  {
    title: "E-commerce Platform",
    description:
      "E-commerce Platform includes user registration with verification, secure login, and tailored interfaces for each user role. It's a streamlined platform for demonstrating core concepts of authentication, CRUD operations, and role-based access in an e-commerce context.",
    created: "16 April 2024",
    techStack: "FastAPI",
    github: "https://github.com/focusedgoof/e-commerce",
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
          "This study analyzes public sentiment on Twitter regarding the Russia-Ukraine war, using text data collected via the Twitter API and available on Kaggle. It employs supervised machine learning methods such as Random Forest, XGBoost, SVM, and Logistic Regression to perform sentiment analysis and compares their performance based on metrics like accuracy and precision. The goal is to understand global reactions and the influence of public opinion on international relations during the conflict.",
        link: "https://ieeexplore.ieee.org/abstract/document/10263132/",
        publisher: "IEEE",
        date: "29 September 2023",
        github: "#",
      },
      {
        title: "Text Categorization using Supervised ML",
        description:
          "This paper explores text categorization, a key task in text mining for organizing and managing large volumes of digital information. It evaluates several supervised machine learning algorithms—Logistic Regression, Naive Bayes, Random Forest, SVM, and AdaBoost—based on their accuracy and precision in classifying text. The study finds that SVM performs best with 96.86% accuracy, while AdaBoost shows the lowest performance at 74.49%.",
        link: "https://ieeexplore.ieee.org/abstract/document/10145300",

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
        title: "Explainable AI for Next Generation Agriculture—Current Scenario and Future Prospects",
        description:
          "This chapter highlights the importance of agriculture in India and its evolution toward technology-driven practices. It introduces the role of Artificial Intelligence, particularly Explainable AI (XAI), in improving productivity, sustainability, and decision-making in agriculture. The chapter emphasizes XAI’s potential to address key challenges in the sector and outlines its current applications and future prospects.",
        publisher: "Springer Nature Switzerland",
        bookTitle: "Computational Intelligence in Internet of Agricultural Things",
        date: "28 August 2024",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-67450-1_7",
      },
      {
        title: "Sustainable E-Waste Management: Present Situation, Emerging Solutions, and Future Trends",
        description:
          "This chapter discusses the rapid growth of e-waste due to increased use of electronic devices and its harmful impact on health and the environment. It emphasizes the need for effective e-waste management and explores how technologies like IoT and AI offer smarter solutions despite implementation challenges. The chapter outlines current practices, emerging trends, and future directions in smart e-waste management.",
        publisher: "IGI Global Scientific Publishing",
        bookTitle: "Sustainable Solutions for E-Waste and Development",
        date: "2024",
        link: "https://www.igi-global.com/chapter/sustainable-e-waste-management/338707",
      },
    ],
  },
  {
    type: "journal",
    heading: "Journal Articles",
    data: [
      {
        title: "Enhancing Student Academic Performance Forecasting: A Comparative Analysis of Machine Learning Algorithms",
        description:
          "This study focuses on predicting student academic performance using various Machine Learning (ML) algorithms as part of Educational Data Mining (EDM). It analyzes models like Naïve Bayes, K-Nearest Neighbor, SVM, and Neural Networks using student demographics and academic data, evaluated through metrics such as accuracy, precision, recall, and F1-score. The findings offer practical insights for improving educational strategies and interventions by highlighting the strengths and limitations of each ML approach.",
        journal: "SN Computer Science",
        publisher: "Springer Nature Singapore",
        date: "2 August 2024",
        link: "https://link.springer.com/article/10.1007/s42979-024-03118-3",
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
      <li>
        Github:{" "}
        <span>
          <a href={project.github} target="_blank" rel="noreferrer">
            View Repository
          </a>
        </span>
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
                    View Repository
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
      <div class="portfolio-category">
        {" "}
        <div className="portfolio-heading">
          <h2>{heading}</h2>
        </div>
        <div className="portfolio-category portfolio-item">
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
        </div>
      </div>
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
        {isPopupOpen && (
          <div className="portfolio-popup-container">
            <div className="popup-backdrop" onClick={closePopup}></div>
            {renderPopup()}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
