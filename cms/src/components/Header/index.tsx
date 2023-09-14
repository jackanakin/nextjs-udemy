
import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

import { ActiveLink } from '../ActiveLink';

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>
           <Image src={logo} alt="Sujeito Programador Logo"/>
        </ActiveLink>

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <h4>Home</h4>
          </ActiveLink>

          <ActiveLink  href="/posts" activeClassName={styles.active}>
            <h4>Conteúdos</h4>
          </ActiveLink>

          <ActiveLink  href="/sobre" activeClassName={styles.active}>
            <h4>Quem somos?</h4>
          </ActiveLink>
        </nav>

        <a className={styles.readyButton} type="button" href="https://sujeitoprogramador.com">COMEÇAR</a>

      </div>
    </header>
  )
}