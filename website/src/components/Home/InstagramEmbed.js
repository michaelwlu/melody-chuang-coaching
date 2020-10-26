import React from 'react';
import StyledLink from '../utils/StyledLink';

const InstagramEmbed = () => {
  return (
    <section className="mx-auto my-20 text-center md:my-32">
      <p className="mb-6 text-base font-bold font-themeSerif lg:text-xl">
        Follow me on Instagram at{' '}
        <StyledLink
          href="https://www.instagram.com/iammelodychuang/"
          title="IAmMelodyChuang on Instagram"
        >
          @IAmMelodyChuang
        </StyledLink>
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
