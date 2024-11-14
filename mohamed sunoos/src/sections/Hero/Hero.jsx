import styles from './HeroStyles.module.css'
import heroImg from "../../assets/hero-img.png"
import themeIcon from "../../assets/sun.svg"



function Hero() {
  return <section id='hero' className={styles.container} >
    <div className={styles.classModeContainer}>
      <img className={styles.hero} src={heroImg} alt='Profile pic of sunoos'></img>

      <img src={themeIcon}>
      </img>
    </div>
    </section>
}

export default Hero
