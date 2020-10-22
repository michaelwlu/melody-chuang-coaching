import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import FBGroup from '../components/Community/FBGroup';
import Podcast from '../components/Community/Podcast';

const Community = () => {
  return (
    <Layout>
      <Head>
        <title>Community | Melody Chuang Coaching</title>
      </Head>
      <main className="flex flex-col items-center px-6 mx-auto mt-10 mb-32 space-y-8 md:max-w-4xl md:mt-12 lg:flex-row lg:justify-around lg:items-start lg:space-y-0 lg:space-x-10">
        <section className="w-full lg:w-1/2">
          <h1 className="mb-6 text-3xl font-semibold leading-tight lg:text-3xl font-themeSerif">
            Join my Facebook Group
          </h1>
          <FBGroup />
        </section>

        <section className="w-full lg:w-1/2">
          <h1 className="mb-6 text-3xl font-semibold leading-tight lg:text-3xl font-themeSerif">
            Listen to my Podcast
          </h1>
          <Podcast />
        </section>
      </main>
    </Layout>
  );
};

export default Community;
