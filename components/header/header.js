import React from "react";
import Link from 'next/link';
import styles from "./header.module.css";

const MENU_OPTIONS = [
  {
    label: "Início",
    link: "/",
  },
  {
    label: "Demandas",
    link: "/demandas",
  },
  {
    label: "Quer ajudar?",
    link: "/help"
  },
  {
    label: "Já funcionou",
    link: "/news",
    path: "/"
  },
  {
    label: "Dúvidas",
    link: "/questions",
    path: "/"
  }
];

const Header = () => {
  return (
    <header>
      <nav className={styles.container}>
        <Link href="/">
          <a><img src="/logo.png" alt="Abastece SUS"/></a>
        </Link>
        {MENU_OPTIONS.map((menu, index) => (
          <Link key={index} href={menu.link} as={menu.path}>
            <a className={styles.menu}> {menu.label} </a>
          </Link>
        ))}
      </nav>
    </header>
  )
};

export default Header;
