import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head'; // Importing Head for SEO

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{ color: 'black' }}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{ color: 'black' }}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.customButton)}
            to="/docs/intro">
            Go to MHIRA's documentation!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`} // This title is important for SEO.
      description="This site offers a electronic health record for mental health. Implemented in Kosovo, Tanzania and Chile">
      <Head>
        <meta name="description" content="Mental Health questionnaires in electronic format." />
        <meta name="keywords" content="mental health, global health, electronic health record, Africa, Europe, Latin America" />
        {/* Additional SEO tags like Open Graph and Twitter Cards can be added here */}
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
