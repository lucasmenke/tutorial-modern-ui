import Image from "next/image";
import { clients } from "../../../constants/constants";
import styles from "../../../styles/style";

export default function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px] m-5`}
          >
            <Image
              src={client.logo}
              alt="Client"
              className="w-[100px] sm:w-[192px]  object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
