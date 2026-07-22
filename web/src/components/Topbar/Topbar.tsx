"use client";

import { PiggyBank, Settings, Bell, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from './Topbar.module.scss';

const navItems = [
  {
    href: '/',
    label: 'Обзор',
  },
  {
    href: '/transactions',
    label: 'Транзакции',
  },
  {
    href: '/analytics',
    label: 'Аналитика',
  },
  {
    href: '/accounts',
    label: 'Счета',
  },
];

export const Topbar = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/">
          <PiggyBank size={40} />
          <span className={styles.logoText}>Финансы</span>
        </Link>

        <nav className={styles.nav}> 
          <ul className={styles.navList}>
            {navItems.map(item => (
              <li key={item.href}>
                <Link
                  className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ''}`} 
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button className={styles.action}>
            <Settings size={20} />
          </button>
          <button className={styles.action}>
            <Bell size={20} />
          </button>
          <button className={styles.action}>
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
