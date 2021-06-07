import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="white-color">0x4e </span>
          <span className="grey-color">0x69 </span>
          <span className="white-color">0x63 </span>
          <span className="grey-color">0x65 </span>
          <span className="white-color">0x20 </span>
          <span className="white-color">0x77 </span>
          <span className="grey-color">0x6f </span>
          <span className="white-color">0x72 </span>
          <span className="grey-color">0x6b </span>
          <span className="white-color">0x21 </span>

                   21
          {/* <span className="logo-name">{greeting.username}</span> */}
          {/* <span className="grey-color">/&gt;</span> */}
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          {/* <li>
            <a href="#contact">Contact Me</a>
          </li> */}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {/* <a>
              <ToggleSwitch />
            </a> */}
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
