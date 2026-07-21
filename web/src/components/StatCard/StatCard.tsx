import styles from "./StatCard.module.scss";

type StatCardProps = {
  label: string;
  value: string;
  change: string;
  direction: 'up' | 'down';
};

export const StatCard = ({ label, value, change, direction }: StatCardProps) => {
  return (
    <div className={styles.card}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
      <p className={`${styles.change} ${direction === 'up' ? styles.up : styles.down}`}>
        {change}
      </p>
    </div>
  );
};
