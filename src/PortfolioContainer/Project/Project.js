import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Project.css";

const Project = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Acumatica", logoSrc: "education.svg" },
    { label: "Mavenlink", logoSrc: "work-history.svg" },
    { label: "Simcere Pharmaceutical", logoSrc: "programming-skills.svg" },
    { label: "Insurity LLC", logoSrc: "projects.svg" },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Acumatica Cloud ERP"}
          subHeading={"Frontend Software Developer"}
          fromDate={"July 2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Responsible for creating Single-Page Application and developing User
            Interaction screens using HTML5, CSS3, JavaScript, Node.JS, React.JS
            and Semantic-UI.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Used React, Axios to create Components to handle events triggered
            by clients and send requests to the server.
          </span>
          <br />
          <span className="resume-description-text">
            - Applied JSON web tokens for authentication and authorization
            security configurations using Node.JS.
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented Middleware like Redux-thunk in application to retrieve
            data from the back end and to also perform RESTful services.
          </span>
          <br />
          <span className="resume-description-text">
            - Drew responsive charts using JavaScript Highcharts library.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Project Management Tool"}
          subHeading={"Frontend Software Developer"}
          fromDate={"Sep 2019"}
          toDate={"May 2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Responsible for writing Design Documents, page development, state
            management with HTML5, CSS3, JavaScript, React, Redux, React-Router,
            Node.JS, Git.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Created React reusable components and routing to implement
            navigation between the components.
          </span>
          <br />
          <span className="resume-description-text">
            - Contributed in building RESTful API to serve data on React
            front-end screen; which will dynamically chose user inputs for a
            web-app
          </span>
          <br />
          <span className="resume-description-text">
            - Managed state within the app using Redux and persisted certain
            parts of the state to the device via Redux Persist.
          </span>
          <br />
          <span className="resume-description-text">
            - Used Chrome developer toolbar, Firebug, and safari developer tools
            for troubleshooting and debugging.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading
            heading={"Pharmacy Benefit Management"}
            subHeading={"Individual Software Developer"}
            fromDate={"Apr 2018"}
            toDate={"July 2019"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Responsible for building ETL pipeline and recomendation system for
              drug products with Data Scientist using .
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Implemented applications with the Lazy-Loading concept to
              decrease the initial payload time and downloading time for the
              application.
            </span>
            <br />
            <span className="resume-description-text">
              - Used Chrome developer toolbar, Firebug, and safari developer
              tools for troubleshooting and debugging.
            </span>
            <br />
            <span className="resume-description-text">
              - Bundled JavaScript files with Webpack and BABEL.
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading
            heading={"DigitalXPerience Studio"}
            subHeading={"Individual Software Developer"}
            fromDate={"Sep 2017"}
            toDate={"Apr 2018"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Responsible for CSS and UI presentation, Data visualization using
              HTML5, CSS3, JavaScript, Bootstrap, Material-UI, Tableau, Git.
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Worked on Responsive Web Design using Bootstrap Grid system and
              CSS3 Media Query.
            </span>
            <br />
            <span className="resume-description-text">
              - Converted the mock-up UI designs into hand-written HTML, CSS 2/3
              codes.
            </span>
            <br />
            <span className="resume-description-text">
              - Enabled user authentication and data entry retrieval and update
              in full insurance policy lifecycle; structured with industry
              standardized RESTful architecture.
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"PROJECTS"} subHeading={"My Work Experience"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
