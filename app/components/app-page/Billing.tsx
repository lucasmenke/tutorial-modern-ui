import Image from "next/image";
import { apple, bill, google } from "../../../public/assets";
import styles, { layout } from "../../../styles/style";

export default function Billing() {
  return (
    <section id="products" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <Image
          src={bill}
          alt="Billing"
          className="w-full h-full relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <Image
            src={apple}
            alt="Apple_Store"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <Image
            src={google}
            alt="Google_Play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
