import React from "react";
import phone from "../Assets/Icons/call.png";
import designer from "../Assets/Icons/designer.png";
import feedback from "../Assets/Icons/feedback.png";
import stopwatch from "../Assets/Icons/stopwatch.png";
import suitcase from "../Assets/Icons/suitcase.png";
import sai from "../Assets/Icons/logo_sai_light.png";
import styles from "../Assets/common.module.css";

const Introduction = () => {
  return (
    <div>
      <div
        style={{
          margin: "0px auto",
          textAlign: "center",
          fontSize: "20px",
          color: "black",
        }}
      >
        Why SAi solution ?
      </div>
      <div className={styles.introbox}>
        <div className={styles.each}>
          <div>
            <img className={styles.img} src={phone} alt="" />
          </div>
          <div>Great support system</div>
        </div>
        <div className={styles.each}>
          <div>
            <img className={styles.img} src={designer} alt="" />
          </div>
          <div>Quality and on-time delivery</div>
        </div>
        <div className={styles.each}>
          <div>
            <img className={styles.img} src={feedback} alt="" />
          </div>
          <div>Excellent work experience</div>
        </div>
        <div className={styles.each}>
          <div>
            <img className={styles.img} src={stopwatch} alt="" />
          </div>
          <div>Top leading designer on boarded</div>
        </div>
        <div className={styles.each}>
          <div>
            <img className={styles.img} src={suitcase} alt="" />
          </div>
          <div>Great mark<span style={{ color: "black" }}>et review and feedback</span> </div>
        </div>
      </div>
      <div className={styles.welcomeBox}>
        {/* <div className={styles.welcomeSideImage}>
          <img
            style={{ height: "100%", width: "100%" }}
            src={sai}
            alt="SAi solution"
          />
        </div> */}

        <div className={styles.welcomeNote}>
          Greetings from SAi Solutions. Together, we accomplish so much more
          than just specifying the aesthetics of a space. We pay attention to
          far more crucial issues. Things like how it feels, how it works, and
          most importantly, how you are defined by it. We are an interior design
          firm founded on the conviction that a space's true uniqueness lies not
          in how people perceive it, but in how they really use it. Don't merely
          own a lovely space. Own it.
        </div>
      </div>
    </div>
  );
};

export default Introduction;
