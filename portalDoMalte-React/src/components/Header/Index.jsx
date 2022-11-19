import styles from "./header.module.css";
import { BeerBottle,MagnifyingGlass, ShoppingCart, SignIn } from "phosphor-react";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
      <a className={styles.font} href=""><BeerBottle /></a>
        <h1>PORTAL DO MALTE</h1>
      </div>
      <div className={styles.menu}>
        <a href="/" className={styles.font}><p>HOME</p></a>
        <a href="/history" className={styles.font}><p>HISTÓRIA</p></a>
        <a href="/styles" className={styles.font}><p>ESTILOS</p></a>
        <a href="/products" className={styles.font}><p>BEER STORE</p></a>
        <a href="/products" className={styles.font}><p>CONTATO</p></a>
      </div>
      <div className={styles.icons}>
        <a className={styles.font} href=""><MagnifyingGlass /></a>
        <a className={styles.font} href=""><ShoppingCart /></a>
        <a className={styles.font} href="/login"><SignIn /></a>
      </div>
    </div>
  );
}


