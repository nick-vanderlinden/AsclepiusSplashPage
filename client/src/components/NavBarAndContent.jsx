import React from "react";
import azuress from "../Assets/azuress.png";
import githublogo from "../Assets/githublogo.png";
import linkedinlogo from "../Assets/linkedinlogo.png";
import nick from "../Assets/nick.png";
import hugh from "../Assets/hugh.png";
import cam from "../Assets/cam.png";
import kola from "../Assets/kola.png";
import john from "../Assets/john.png";

const NavBarAndContent = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <nav className="toolbar">
        <a
          href="#home"
          className="toolbarText"
          onClick={() => scrollToSection("homeDiv")}
        >
          Home
        </a>
        <a
          href="#about"
          className="toolbarText"
          onClick={() => scrollToSection("aboutDiv")}
        >
          About
        </a>
        <a
          href="#features"
          className="toolbarText"
          onClick={() => scrollToSection("featuresDiv")}
        >
          Features
        </a>
        <a
          href="#getStarted"
          className="toolbarText"
          onClick={() => scrollToSection("getStartedDiv")}
        >
          Get Started
        </a>
        <a
          href="#team"
          className="toolbarText"
          onClick={() => scrollToSection("teamDiv")}
        >
          Team
        </a>
      </nav>
      <div id="content">
        <div id="homeDiv"></div>

        <div id="aboutDiv">
          <h2 className="headerText">About</h2>
          <p className="contentText">
            Asclepius is a Kubernetes node health monitoring service for local
            or deployed K8s clusters, providing real time information on your
            nodes.
          </p>
          {/* Content*/}
        </div>

        <div id="featuresDiv">
          <h2 className="headerText">Features</h2>
          <div class="feature-item">
            <img src={azuress} alt="Connect Prompt Screen Shot" />
            <div>
              <h2 className="feature-header-text">Cloud Connected Clusters</h2>
              <p className="contentText">
                Connect local or cloud hosted clusters - Seamlessly follow along
                Asclepius’s prompt flow to connect either an Azure AKS, AWS EKS
                or local hosted K8s cluster. Our application will execute
                terminal commands in the background to pull config files and
                collect cluster data without you having to pore over
                documentation.
              </p>
            </div>
          </div>
          <div class="feature-item">
            <div>
              <h2 className="feature-header-text">View Cluster Health</h2>
              <p className="contentText">
                Visualize your cluster's node health at a glance with intuitive
                color coding on a dynamically rendered D3.js vector graph.
              </p>
            </div>
            <img src={azuress} alt="Connect Prompt Screen Shot" />
          </div>
          <div class="feature-item">
            <img src={azuress} alt="Connect Prompt Screen Shot" />
            <div>
              <h2 className="feature-header-text">Identify Pods</h2>
              <p className="contentText">
                By clicking on a node, Asclepius provides robust health metrics by executing a CLI interaction with kubelet in the backend, saving you time and helping you understand load immediately.
              </p>
            </div>
          </div>
        </div>

        <div id="getStartedDiv">
          <h2 className="headerText">How To Get Started:</h2>
          <p className="contentText" id="getStartedText">
            To get started with Asclepius, check out our repo on&nbsp;
            <a
              href="https://github.com/oslabs-beta/Asclepius"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00BFFF" }}
            >
              Github!
            </a>
          </p>
          <p className="contentText" id="getStartedText2">We've also posted a short article on&nbsp;
          <a
              href="medium.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00BFFF" }}
            >
              Medium.
            </a>
          </p>
          {/* Content*/}
        </div>

        <div id="teamDiv">
          <h2 className="headerText">Meet the Team:</h2>
          <div className="teamMembers">
            <div className="teamName">
              John Norlin
              <div className="teamImages" id="johnImage">
                <img src={john} alt="John Picture" />
              </div>
              <div className="linkIcons">
                <a
                  href="https://www.linkedin.com/in/johnwsnorlin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinlogo} alt="Linkedin/ GitHub icons" />
                </a>
                <a
                  href="https://github.com/johnnorlin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githublogo} alt="Linkedin/ GitHub icons" />
                </a>
              </div>
            </div>

            <div className="teamName">
              Nick Vanderlinden
              <div className="teamImages" id="nickImage">
                <img src={nick} alt="Nick Picture" />
              </div>
              <div className="linkIcons">
                <a
                  href="https://www.linkedin.com/in/nick-vanderlinden-36329b14a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinlogo} alt="Linkedin/ GitHub icons" />
                </a>
                <a
                  href="https://github.com/nick-vanderlinden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githublogo} alt="Linkedin/ GitHub icons" />
                </a>
              </div>
            </div>

            <div className="teamName">
              Hugh Stapleton
              <div className="teamImages" id="hughImage">
                <img src={hugh} alt="Hugh Picture" />
              </div>
              <div className="linkIcons">
                <a
                  href="https://www.linkedin.com/in/hugh-stapleton-92b44558/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinlogo} alt="Linkedin/ GitHub icons" />
                </a>
                <a
                  href="https://github.com/tackleshaft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githublogo} alt="Linkedin/ GitHub icons" />
                </a>
              </div>
            </div>

            <div className="teamName">
              Cameron Blair
              <div className="teamImages" id="camImage">
                <img src={cam} alt="Cam Picture" />
              </div>
              <div className="linkIcons">
                <a
                  href="https://www.linkedin.com/in/cameron-blair-a2aa60259/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinlogo} alt="Linkedin/ GitHub icons" />
                </a>
                <a
                  href="https://github.com/CamB975"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githublogo} alt="Linkedin/ GitHub icons" />
                </a>
              </div>
            </div>

            <div className="teamName">
              Kola Bamgbose
              <div className="teamImages" id="kolaImage">
                <img src={kola} alt="Kola Picture" />
              </div>
              <div className="linkIcons">
                <a
                  href="https://www.linkedin.com/in/kola-b-023383171/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinlogo} alt="Linkedin/ GitHub icons" />
                </a>
                <a
                  href="https://github.com/kbamgbosee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githublogo} alt="Linkedin/ GitHub icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarAndContent;
