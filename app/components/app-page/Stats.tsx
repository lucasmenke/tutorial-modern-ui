import { stats } from "../../../constants/constants";
import styles from "../../../styles/style";

export default function Stats() {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className="flex-1 flex flex-row justify-start ss:justify-center items-center m-3">
          <h4 className="font-poppins font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px] text-white">{stat.value}</h4>
          <p className="font-poppins font-normal text-[20px] xs:text-[15px] leading-[26px] xs:leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}
    </section>
  );
}
  