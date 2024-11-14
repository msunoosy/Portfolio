import styles from './HeroStyles.module.css'
import heroImg from "../../assets/hero-img.png"



function Hero() {
  return <section id='hero'>
    <div>
      <img src={heroImg} alt=''></img>
    </div>
    </section>
  
}

export default Hero
