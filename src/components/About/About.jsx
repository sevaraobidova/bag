import Title from "../Common/Title/Title";
import classes from "./About.module.scss";
import bag from "../../assets/creative_bag.png";
function About() {
  return (
    <section className={classes.about}>
      <img className={classes["about-img"]} src={bag} alt="bags image" />
      <div className={classes["about-txt"]}>
        <Title
          top="Creative bag only for you."
          main="Lorem ipsum dolor sit amet consectetur adipiscing 
            elit sed do eiusmod."
          mini="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          text="See More"
          color="rgba(47, 47, 47, 1)"
          color1 ="rgba(47, 47, 47, 1)"
          fSize="3.1rem"
        />
      </div>
    </section>
  );
}

export default About;
