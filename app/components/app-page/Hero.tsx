import Image from "next/image";
import styles from "../../../styles/style";
import { discount, robot } from "../../../public/assets";

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex-col ${styles.flexStart} xl:px-0 sm:px-16 px-6`}
      >
        {/* Discount text */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="Discount" height={32} width={32} />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For
            <span className="text-white"> 1 Month</span> Account
          </p>
        </div>
        {/* Heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
            <br className="sm:block hidden" /> Payment Methode.
          </h1>
        </div>
      </div>
    </section>
  );
}
