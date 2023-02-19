import styles from "../constants/style";

export default function AppPage() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </div>
      {/* Hero */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>
      {/* Main */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Stats Business Billing</div>
      </div>
    </div>
  );
}
