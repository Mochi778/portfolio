import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

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
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Experiences", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 75 },
    { skill: "Node JS", ratingPercentage: 75 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 85}
  ];

  const projectsDetails = [
    {
      title: "Marvenlink: Project Management Tool",
      duration: { fromDate: "Sep 2019", toDate: "May 2020" },
      description:
        "Built to help service business by hosting projects, financials, collaboration and resources management in a single environment.",
      subHeading: "Technologies Used: HTML, CSS, JavaScript, React, Node.JS, Git",
    },
    {
      title: "Simcere: Pharmacy Benefit Management",
      duration: { fromDate: "Apr 2018", toDate: "July 2019" },
      description:
        "Provide for racking of all incoming pharmacy information, build specific benefits using Dynamic Plan and Benefits Module allowing for user-defined restrictions  ",
      subHeading:
        "Technologies Used: HTML, CSS, JavaScript, Mongo DB, Express, Node.JS, Redux, SVN.",
    },
    {
      title: "Insurity: DigitalXPerience Studio",
      duration: { fromDate: "Sep 2017", toDate: "Apr 2018" },
      description:
        "Empower client to start the creation of digital insurance App with unique User-Interface (UI) experiences with highly customized features. ",
      subHeading:
        "Technologies Used: HTML, CSS, JavaScript, Bootstrap, Material-UI, Git.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Southern California, Los Angeles CA"}
        subHeading={"Master of Science in Electrical Engineering"}
      />

      <ResumeHeading
        heading={"University of Connecticut, Storrs CT"}
        subHeading={"Bachelor of Science in Biomedical Engineering"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Acumatica Cloud ERP"}
          subHeading={"Frontend Software Developer"}
          fromDate={"July-2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Responsible for creating Single-Page Application and developing User Interaction screens using HTML5, CSS3, JavaScript, Node.JS, React.JS and Semantic-UI. 
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Used React, Axios to create Components to handle events triggered by clients and send requests to the server.
          </span>
          <br />
          <span className="resume-description-text">
            - Applied JSON web tokens for authentication and authorization security configurations using Node.JS.
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented Middleware like Redux-thunk in application to retrieve data from the back end and to also perform RESTful services.
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
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Travelling"
        description="Travelling takes me out of comfort zone and inspires me to try new things!"
      />
      <ResumeHeading
        heading="Handcrafting"
        description="Cultivate me the artistic feeling and make anything for myself."
      />
      <ResumeHeading
        heading="Gardening"
        description="Enjoy the silent and relaxed moment and feel the flow of nature."
      />
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
        <ScreenHeading title={"RESUME"} subHeading={"My Formal Bio Details"} />
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

export default Resume;
