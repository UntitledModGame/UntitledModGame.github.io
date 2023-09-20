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
    <header class="homepage" className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="img/title_txt_wide.png" class=".title-img"></img>
        <br/>
        <br/>

        <div>
          <a href="https://steampowered.com">
            <img src="img/play_free_steam.png"></img>
          </a>
        </div>

        <div>
          <a href="https://steampowered.com">
            <img src="img/play_free_steam.png"></img>
          </a>
        </div>

        <div class="container">
          <button class="btn">
            <a href="https://steampowered.com">
              Discord 😎
            </a>
          </button>
        </div>

        <br/>
        <img src="img/umg_hand_logo.png"></img>
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
