import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// import {} from '../../../static/img/img_home.png'

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    // img_cinema: 'https://res.cloudinary.com/phanphuoc/image/upload/v1693325739/ygbzlr72zybpjsgaonfw.png',
    description: (
      <>
        My website is designed to provide a user-friendly and easily accessible experience.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    // img_cinema: 'https://res.cloudinary.com/phanphuoc/image/upload/v1693325838/q0nbgp1iw1k6vci8ne5d.png',
    description: (
      <>
        This document allows you to focus on your documents, while we take care of the tasks.
        Please proceed by moving your documents into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by Dev',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    // img_cinema: 'https://res.cloudinary.com/phanphuoc/image/upload/v1693325837/xkusifbmdbwfizatr5gn.png',
    description: (
      <>
        With many years of programming experience, our team is ready to provide 24/7 support.
      </>
    ),
  },
];

function Feature({ Svg, title, description, img_cinema }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
        {/* <img src={img_cinema} className={styles.featureSvg} /> */}
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
