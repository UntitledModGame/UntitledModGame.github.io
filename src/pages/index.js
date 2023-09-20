import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="img/title_txt_wide.png" class=".title-img"></img>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://steampowered.com">
            Free Steam Download 🎮️
          </Link>
        </div>

        <br/>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://steampowered.com">
            Discord 😎
          </Link>
        </div>

        <p>
          Untitled Mod Game (or UMG) is a game where all gameplay is built as a mod. With the whole platform being built with modding in mind, the limits are practically endless.
          <br/>
          Want to build a giant wall to defend against zombie invaders? Sure! Perhaps you would prefer to play as the zombie horde instead? With UMG's flexible setup, this is possible. The entities you control don't even need to be players; you can walk around worlds as a paintbrush, or a chest if you want!
          <br/>
          With the platform's extensive worldediting tools, you can also create completely custom worlds and levels for you and your friends to explore!
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`UMG`}
      description="A 2d game based on mods">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
