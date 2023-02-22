import Image from "next/image";
import styles from "../../../styles/style";
import { arrowUp } from "../../../public/assets";

export default function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row+`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
            <Image src={arrowUp} alt="Arrow" height={23} width={23} className="object-contain" />
        </div>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started</span>
          </p>
      </div>
    </div>
  );
}
 