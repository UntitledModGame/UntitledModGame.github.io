import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Powerful',
    Img: require('@site/static/img/mechanical_arm.png').default,
    description: (
      <>
        UMG comes with an insanely powerful modding API, equipped with
        a custom ECS framework and creative tooling.
        The only real limit is the human mind!
      </>
    ),
  },
  {
    title: 'Tuned for Cooperation',
    Img: require('@site/static/img/cooperative.png').default,
    description: (
      <>
        UMG is designed for compatibility
        which is encouraged at an API level.
        Mods are intended to build on top of each other.
      </>
    ),
  },
  {
    title: 'Fun!',
    Img: require('@site/static/img/nerd.png').default,
    description: (
      <>
        Creating stuff is meant to be fun!
        If you are a nerd 🤓 like me, you should give UMG modding 
        a try. 
        I promise you, things are done differently here.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={Img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
