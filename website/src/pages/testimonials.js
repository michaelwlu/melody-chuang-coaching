import Head from 'next/head';
import React from 'react';
import ContactBox from '../components/forms/ContactBox';
import Layout from '../components/utils/Layout';
import WidthWrapper from '../components/utils/WidthWrapper';

const Testimonials = () => {
  return (
    <Layout>
      <Head>
        <title>Testimonials | Melody Chuang Coaching</title>
      </Head>
      <WidthWrapper>
        <main className="mx-auto mt-24 mb-48 text-3xl text-center font-themeSerif">
          Coming soon...
        </main>
      </WidthWrapper>
      <ContactBox />
    </Layout>
  );
};

export default Testimonials;
