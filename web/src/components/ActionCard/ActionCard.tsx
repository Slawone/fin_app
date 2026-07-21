import { LucideIcon } from "lucide-react";
import styles from "./ActionCard.module.scss";

type ActionCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export const ActionCard = ({
  icon: Icon,
  title,
  subtitle,
}: ActionCardProps) => {
  return (
    <button className={styles.card}>
      <span className={styles.icon}>
        <Icon size={20} />
      </span>
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </span>
    </button>
  );
};
