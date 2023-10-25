/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Emad",
  lastName: "Abuhamdeh",
  bithday: "08.08.1994",
  address: "khalda str. 22, Amman, Jordan",
  phn: "+962 079 696 33 05",
  email: "emadabuhamdeh@gmail.com",
  serviceLists: [
    "Website Development",
    "Digital Experience",
    "Content Marketing",
    "Social Media Design",
    "Shared Web Hosting",
  ],
  skills: {
    programming: [
      { name: "WordPress", value: "95" },
      { name: "JavaScript", value: "80" },
      { name: "Angular", value: "90" },
      { name: "python", value: "90" },

    ],
    language: [
      { name: "English", value: "95" },
      { name: "Arabic", value: "100" },
    ],
  },
  education: [
    { year: "2017 - 2019", unv: "American University of Madaba", degree: "Master Degree" },
    { year: "2013 - 2017", unv: "Middle East University", degree: "Bachelor Degree" },
  ]
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/about/1.png" alt="" />
                <div className="main" data-img-url="img/about/1.png" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Emad Abuhamdeh.</span> I am a graphic designer,
                  and {`I'm`} very passionate and dedicated to my work. With 20
                  years experience as a professional a graphic designer, I have
                  acquired the skills and knowledge.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
