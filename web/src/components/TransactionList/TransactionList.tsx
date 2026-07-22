"use client";

import { useTransactionsStore } from "@/store/useTransactionsStore";
import { formatMoney } from "@/lib/format";
import styles from "./TransactionList.module.scss";

export const TransactionList = () => {
  const transactions = useTransactionsStore((store) => store.transactions);

  return (
    <section className={styles.transactions}>
      <h2 className={styles.title}>Последние транзакции</h2>
      <p className={styles.subtitle}>История последних транзакций</p>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Описание</th>
              <th scope="col">Способ</th>
              <th scope="col">Дата</th>
              <th scope="col">Сумма</th>
            </tr>
          </thead>
          <tbody className={styles.body}>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>{transaction.method}</td>
                <td>{transaction.date}</td>
                <td
                  className={`${styles.amount} ${transaction.amount < 0 ? styles.amountDown : styles.amountUp}`}
                >{formatMoney(transaction.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
