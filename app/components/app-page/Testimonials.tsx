import { feedback } from "../../../constants/constants";
import styles from "../../../styles/style";
import FeedbackCard from "./FeedbackCard";

export default function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-1/2 rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center flex-col md:flex-row  mb-6 sm:mb-16 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="hidden sm:block" /> saying about us
        </h2>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
