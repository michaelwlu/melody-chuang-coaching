import React from 'react';
import StyleLink from '../StyleLink';

const InstagramEmbed = () => {
  return (
    <section className="mx-auto my-32 text-center">
      <p className="mb-6 text-base font-bold font-themeSerif lg:text-xl">
        Follow me on Instagram at{' '}
        <StyleLink>
          <a
            href="https://www.instagram.com/iammelodychuang/"
            title="IAmMelodyChuang on Instagram"
          >
            @IAmMelodyChuang
          </a>
        </StyleLink>
        !
      </p>
      <div className="max-w-sm mx-auto md:max-w-full">
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div className="elfsight-app-a165fa2d-b972-471f-bc7c-222d1fb005f4"></div>
      </div>
    </section>
  );
};

export default InstagramEmbed;
