import { Plus, Minus, ArrowLeftRight } from "lucide-react";
import { ActionCard, StatCard } from "@/components";
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.stats}>
        <div className={styles.column}>
          <StatCard label="Баланс" value="5 502,45 ₽" change="+13.1%" direction="up"/>
          <ActionCard icon={Plus} title="Добавить доход" subtitle="Создать доход вручную" />
        </div>
        <div className={styles.column}>
          <StatCard label="Доходы" value="9 450,00 ₽" change="+3.7%" direction="up"/>
          <ActionCard icon={Minus} title="Добавить расход" subtitle="Создать расход вручную" />
        </div>
        <div className={styles.column}>
          <StatCard label="Расходы" value="3 945,55 ₽" change="-1.5%" direction="down"/>
          <ActionCard icon={ArrowLeftRight} title="Перевод" subtitle="Выбрать сумму и перевести" />
        </div>
      </section>
    </main>
  );
}
