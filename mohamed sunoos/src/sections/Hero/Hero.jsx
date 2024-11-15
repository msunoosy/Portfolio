import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import linkedinIcon from "../../assets/linkedin-light.svg"
import GithubIcon from "../../assets/github-light.svg"
import twitterIcon from "../../assets/twitter-light.svg"
import cv from "../../assets/cv.pdf"
import { useTheme } from "../../common/themeContext";

function Hero() {
  const {theme,toggleTheme}=useTheme()
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.classModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile pic of sunoos"
        ></img>
        <img src={themeIcon} onClick={toggleTheme}></img>
      </div>
      <div className={styles.info}>
      <h1>Zamzamy Mohamed<br/>Sunoosy</h1>
      <h2>Full stack developer</h2>
      <span>
        <a href="https://www.linkedin.com/" target="_blank">
        <img src={linkedinIcon}></img>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
        <img src={GithubIcon}></img>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
        <img src={twitterIcon}></img>
        </a>
      </span>
    <p>
      with a passion for developing modern full stack web apps for commercial businesses
    </p>
    <a href={cv} download>
      <button className="hover">
     Resume
      </button>

    </a>
      </div>
    </section>
  );
}

export default Hero;
