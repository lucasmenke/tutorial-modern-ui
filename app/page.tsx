import styles from "../constants/style"

export default function AppPage() {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}></div>
        </div>
    </div>
  )
}
