import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built to address the global mental health care gap',
   // Svg: require('@site/static/img/world.png').default,
    description: (
      <>
        In a world where most mental health problems remain undetected, we 
        aim to strengthen the coverage and precision of mental health evaluation.       </>
    ),
  },
  ,
  {
    title: 'Adapt MHIRA to the needs of your service',
    //Svg: require('@site/static/img/gears.png').default,
    description: (
      <>
        MHIRA allows integrating psychometric questionnaires and creating customised reports.
      </>
    ),
  },
  {
    title: 'Support mental health care workers',
    //Svg: require('@site/static/img/handshake.png').default,
    description: (
      <>
        This project was desinged together with front-line health 
        care workers who's primary objective it is  to care for their patients.
      </>
    ),
  }
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        
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
