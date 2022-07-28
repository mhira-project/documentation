import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built to address the global mental health care gap',
      Svg: require('@site/static/img/world.svg').default,
    description: (
      <>
        In a world where most mental health problems remain undetected, we 
        aim to strengthen the coverage and precision of mental health evaluation.       </>
    ),
  },
  ,
  {
    title: 'Adapt MHIRA to the needs of your service',
    Svg: require('@site/static/img/gears.svg').default,
    description: (
      <>
        MHIRA allows integrating psychometric questionnaires and creating customised reports.
      </>
    ),
  },
  {
    title: 'Support mental health care workers',
    Svg: require('@site/static/img/handshake.svg').default,
    description: (
      <>
        This project was designed together with front-line health 
        care workers whose primary objective it is  to care for their patients.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
