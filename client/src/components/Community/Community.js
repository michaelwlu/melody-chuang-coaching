import React from 'react';
import FBGroup from './FBGroup';
import Podcast from './Podcast';

const Community = () => {
  return (
    <main className="flex flex-col items-center w-11/12 mx-auto mt-10 mb-32 space-y-8 md:max-w-4xl md:mt-12 lg:space-x-8 lg:flex-row lg:items-start lg:space-y-0">
      <section className="w-full lg:w-1/2">
        <h1 className="mb-6 text-3xl italic font-semibold leading-tight lg:text-3xl font-themeSerif">
          Join my Facebook Group
        </h1>
        <FBGroup />
      </section>

      <section className="w-full lg:w-1/2">
        <h1 className="mb-6 text-3xl italic font-semibold leading-tight lg:text-3xl font-themeSerif">
          Listen to my Podcast
        </h1>
        <Podcast />
      </section>
    </main>
  );
};

export default Community;
