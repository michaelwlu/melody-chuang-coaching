import Head from 'next/head';
import React from 'react';
import FBGroup from '../components/Community/FBGroup';
import Podcast from '../components/Community/Podcast';
import ContactSection from '../components/utils/ContactSection';
import Layout from '../components/utils/Layout';
import WidthWrapper from '../components/utils/WidthWrapper';

const Community = () => {
  return (
    <Layout>
      <Head>
        <title>Community | Melody Chuang Coaching</title>
      </Head>
      <WidthWrapper>
        <main className="flex flex-col items-center mx-auto mt-12 mb-32 space-y-8 lg:flex-row lg:justify-around lg:items-start lg:space-y-0 lg:space-x-10">
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
      </WidthWrapper>
      <ContactSection />
    </Layout>
  );
};

export default Community;
