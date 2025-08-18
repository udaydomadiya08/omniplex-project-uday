import styles from "@/styles/Home.module.css"; // Or wherever your CSS file is located

export default function CancelPage() {
  return (
    <div className={styles.contentContainer}>
      <h1>Payment Canceled 😔</h1>
      <p>Your payment was not completed. Please try again.</p>
    </div>
  );
}