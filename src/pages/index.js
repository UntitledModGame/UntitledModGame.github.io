import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const style = `
      .centered {
        margin: auto;
      }
  `
  return (
    <header class="homepage" className={clsx('hero hero--primary', styles.heroBanner)}>
      <style>{style}</style>
      <div className="container">
        <div class="centered">
          <img src="img/title_txt_wide.png" class=".title-img"></img>
        </div>
        <br/>
        <br/>

        <div class="centered">
          <a href="https://steampowered.com">
            <img src="img/play_free_steam.png"></img>
          </a>
        </div>

        <div class="centered">
          <a href="https://steampowered.com">
            <img src="img/join_discord.png"></img>
          </a>
        </div>

        <br/>
        <img src="img/umg_hand_logo.png"></img>
      </div>
    </header>
  );
}

export default function Home() {
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
