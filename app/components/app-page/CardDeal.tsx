import Image from "next/image";
import { card } from "../../../public/assets";
import styles, { layout } from "../../../styles/style";
import Button from "./Button";

export default function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="hidden sm:block" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <Image src={card} alt="Card" className="w-full h-full" />
      </div>
    </section>
  );
}
  