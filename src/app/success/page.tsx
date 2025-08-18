import styles from "@/styles/Home.module.css"; // Or wherever your CSS file is located

export default function SuccessPage() {
  return (
    <div className={styles.contentContainer}>
      <h1>Payment Successful! 🎉</h1>
      <p>Thank you for your purchase. Your account has been upgraded.</p>
    </div>
  );
}