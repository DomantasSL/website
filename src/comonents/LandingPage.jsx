/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiSvelte, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import "./LandingPage.css";
// import FaceSvg from "../assets/mf-avatar.svg";
import About from "../assets/about-us.png.svg";
import div_befor from "../assets/div_before.svg";
// import Logo from "../assets/logo.png.svg";
import Logo3 from "../assets/logo3.png.svg";
import s1 from "../assets/s1.png.svg";
import s2 from "../assets/s2.png.svg";
import s3 from "../assets/s3.png.svg";
import s4 from "../assets/s4.png.svg";
import Home_avtar from "../assets/main.svg";
import { Typewriter } from "react-simple-typewriter";

var navbar = document.querySelector("header");
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const LandingPage = () => {
  return (
    <>
      <header className="header">
        <div className="content navbar">
          <div className="logo">
            {/* <img src={Logo} alt={" not found"} /> */}
            <h1>Dev Company</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#hero">home</a>
              </li>
              <li>
                <a href="#intro">about</a>
              </li>
              <li>
                <a href="#portfolio">services</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="content landingpage" id="hero">
        <div className="left left-content">
          <div className="head">
            <div className="hii">
              <h3>HELLO</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="name">
            <h1>
              <Typewriter
                words={["WE ARE DEVS"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={80}
              />
            </h1>
            <h5 className="about1">
              <Typewriter
                words={[
                  "We will create best apps",

                  "SaaS",
                  "&",
                  "BaaS",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h5>
          </div>
          <div className="btn">
            <button>Services</button>
            <div className="hire">
              <button>Contact us</button>
            </div>
          </div>
        </div>
        <div className="right forgot">
          <img src={Home_avtar} alt="" />
        </div>
      </section>
      <section className="intro" id="intro">
        <div className="left forgot">
          <img src={About} alt="" />
        </div>
        <div className="right">
          <div className="about">
            <div className="about-text">
              <h2>
                About <br />
                us <br />
              </h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="content content-logo" id="portfolio">
        <div className="left">
          <div className="top">
            <div className="image">
              <a href="#">
                <AiOutlineHtml5 style={{ color: "orange", fontSize: "70px" }} />
                <p>HTML 5</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <FaCss3Alt style={{ color: "blue", fontSize: "70px" }} />
                <p>css 3</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <TbBrandJavascript
                  style={{ color: "yellow", fontSize: "70px" }}
                />
                <p>javascript</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <FaBootstrap style={{ color: "purple", fontSize: "70px" }} />
                <p>bootstrap</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiTailwindcss
                  style={{ color: "light-blue", fontSize: "70px" }}
                />
                <p>tailwindcss</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiReact style={{ color: "blue", fontSize: "70px" }} />
                <p>react</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <SiSvelte style={{ color: "red  ", fontSize: "50px" }} />
                <p>svelte</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiMongodb style={{ color: "green", fontSize: "60px" }} />
                <p>mongodb</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <img src={Logo3} alt="" />
                <p>HTML 5</p>
              </a>
            </div>
          </div>
        </div>
        <div className="right Experience">
          <div className="sk wid">
            <div className="div-image">
              <img src={div_befor} alt="" />
            </div>
            <div className="contact wid">
              <div className="year wid">
                <h1>69+</h1>
                <h3>
                  Years
                  <br />
                  Experience
                  <br />
                  Working
                </h3>
              </div>

              <div className="no wid">
                <div className="sub-no">
                  <p>Call us now</p>
                  <h2 type="tel">+6969 696 69</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offers" id="services">
        <div className="headline">
          <h1>Our services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="offer-content">
          <div className="offer-img">
            <img src={s1} alt="" />
            <h2>Developing</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="offer-img">
            <img src={s2} alt="" />
            <h2>Testing</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="offer-img">
            <img src={s3} alt="" />
            <h2>Scamming</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="offer-img">
            <img src={s4} alt="" />
            <h2>Money Laundering</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="project">
          <h1>
            Quality work <br />
            Trust us
          </h1>
        </div>
      </section>
      <section className="update-main" id="contact">
        <div className="update">
          <div className="text">
            <h2>Get updates</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="btns">
            <input
              type="email"
              className="email"
              name="email"
              placeholder="email address"
            />
            <button>Get Started</button>
          </div>
        </div>
      </section>
      <section className="footer">
        <footer>
          <div className="text">
            <h1>Dev Company</h1>
            <h2>Our Socials</h2>
            <div className="icon">
              <a href="https://www.linkedin.com/">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>

              <i className="fa fa-instagram" aria-hidden="true"></i>
              <a href="https://github.com">
                {" "}
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>

              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
          </div>
          <p>
            Copyright ©2023 All rights reserved | Made with hatred
          </p>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
