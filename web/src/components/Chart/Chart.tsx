import { categories } from "@/lib/data";
import styles from "./Chart.module.scss";

export const Chart = () => {
  const total = categories.reduce((sum, category) => {
    return sum + category.amount;
  }, 0);

  let start = 0;

  const conicGradient = categories
    .map((category) => {
      const pct = (category.amount / total) * 100;
      const segment = `${category.color} ${start}% ${start + pct}%`;
      start += pct;
      return segment;
    })
    .join(", ");

  const gradient = `conic-gradient(${conicGradient})`;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Расходы по категориям</h2>
      <div className={styles.chart} style={{ background: gradient }}></div>
      <ul className={styles.legend}>
        {categories.map((category) => (
          <li key={category.name} className={styles.item}>
            <span
              className={styles.color}
              style={{ background: category.color }}
            ></span>
            <span className={styles.name}>{category.name}</span>
            <span className={styles.percent}>
              {(category.amount / total * 100).toFixed(2)}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
