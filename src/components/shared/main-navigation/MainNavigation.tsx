import React from 'react';
import Link from 'next/link';
import { MainRoutes, Routes } from '../../../constants/Routes';
import styles from './MainNavigation.module.css';
import environment from 'environment';



export const MainNavigation = () => {
  return (
    <nav className={styles.wrapper}>

      <div className={styles.wrapperContainer}>
        <ol className={styles.crumb}>
          <li>
            <Link href={Routes.Index}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={Routes.Upload}>
              <a>Upload</a>
            </Link>
          </li>
          <li>
            <Link href={Routes.About}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href={Routes.Films}>
              <a>Film List</a>
            </Link>
          </li>
          <li>
            <a href={environment.app.users}>Users API</a>
          </li>
        </ol>
      </div>
    </nav>
  );
};

MainNavigation.displayName = 'MainNavigation';
