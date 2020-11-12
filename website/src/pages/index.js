import Head from 'next/head';
import React from 'react';
import ApplyButton from '../components/Home/ApplyButton';
import InstagramEmbed from '../components/Home/InstagramEmbed';
import ContactSection from '../components/utils/ContactSection';
import Image from '../components/utils/Image';
import Layout from '../components/utils/Layout';
import WidthWrapper from '../components/utils/WidthWrapper';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Melody Chuang Coaching</title>
      </Head>
      <main className="mx-auto">
        <div className="w-full overflow-hidden h-50s md:h-60s">
          <Image src="m90.jpg" />
        </div>
        <div className="mx-auto font-themeSerif">
          <WidthWrapper>
            <div className="pt-8 pb-8 mx-auto text-center">
              <h1 className="mb-6 text-3xl font-semibold lg:text-4xl">
                Your bs-free, paradigm-shifting, shadow-busting mindset coach
              </h1>
              <ApplyButton buttonText={'Apply for a free consultation'} />
            </div>
          </WidthWrapper>
          <div className="w-full max-w-5xl mx-auto mt-20 mb-16 text-base md:mb-20 md:px-6 md:mt-32 md:space-y-28 lg:text-xl">
            <section className="flex flex-col items-center justify-between space-x-0 space-y-12 md:flex-row md:space-x-12 md:space-y-0">
              <div className="px-6 md:px-0 md:w-4/7">
                <h1 className="mb-6 text-2xl font-semibold lg:text-3xl">
                  Do you daydream about a life where…
                </h1>
                <div className="space-y-6 md:pl-3">
                  <p>
                    …you walk into a room full of people with absolutely no
                    social anxiety?
                  </p>
                  <p>
                    …you aren’t constantly comparing yourself to celebrities,
                    influencers, friends, or that stranger on the street?
                  </p>
                  <p>
                    …you no longer entertain thoughts of what other people may
                    think about you?
                  </p>
                  <p>
                    …you feel confident and beautiful in your body, no matter
                    what size, shape or weight?
                  </p>
                  <p>
                    …you don’t rehash and replay the same scenarios and
                    conversations over and over in your head?
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto overflow-hidden md:shadow-sm h-80 md:w-3/7 md:h-112 lg:h-136">
                <Image src="m84.jpg" />
              </div>
            </section>
            <section className="flex flex-col items-center justify-between space-x-0 space-y-12 md:flex-row md:space-x-12 md:space-y-0">
              <div className="w-full mx-auto overflow-hidden md:shadow-sm h-80 md:w-3/7 md:h-72 lg:h-88">
                <Image src="m41.jpg" className="object-top" />
              </div>
              <div className="px-6 space-y-4 md:px-0 md:w-4/7">
                <p className="font-bold">
                  My name is Melody Chuang, and I help women rewire their brains
                  and nervous systems to free themselves from the shackles of
                  social conditioning and get the results they want in life.
                </p>
                <p>
                  In a nutshell, I turn helpless princesses into sovereign
                  queens. My approach is through cognitive reprogramming and
                  energy work, finding "breaks" in your thought patterns to
                  ultimately transform the way you see yourself and experience
                  the world.
                </p>
              </div>
            </section>
            <section className="flex flex-col items-center justify-between space-x-0 space-y-12 md:flex-row md:space-x-12 md:space-y-0">
              <div className="px-6 mt-16 space-y-4 md:mt-0 md:px-0 md:w-4/7">
                <p className="font-bold">
                  I am a Certified Life Coach and Breathwork Facilitator. But
                  let’s be real, my credentials are not what is important here.
                </p>
                <p>
                  My mission is to help women who identify as anxious
                  overthinkers deprogram conditioned beliefs + reprogram their
                  psyches to get the results they want in life.
                </p>
                <p>
                  All you need to know is that if I am your coach, you are
                  guaranteed* to come out with a radically different
                  relationship with yourself — one where your inner critic is no
                  longer running the show, where you have your own back, and
                  where you can truly call yourself your best friend.
                </p>
              </div>
              <div className="w-full mx-auto overflow-hidden md:shadow-sm h-80 md:w-3/7 md:h-80 lg:h-104">
                <Image src="m31.jpg" className="object-left-top" />
              </div>
            </section>
            <section className="flex flex-col items-center justify-between space-x-0 space-y-12 md:flex-row md:space-x-12 md:space-y-0">
              <div className="w-full mx-auto overflow-hidden md:shadow-sm h-80 md:w-3/7 md:h-72 lg:h-96">
                <Image src="m73.jpg" />
              </div>
              <div className="px-6 space-y-4 md:px-0 md:w-4/7">
                <p className="font-bold">
                  When you work with me, you become the master of your life, and
                  not the other way around.
                </p>
                <p className="">
                  *Caveat? You must hold up your end of the coaching bargain and
                  do the work. As with all relationships, this is a two-way
                  street. I will do everything in my power to push you (with
                  love!) to your greatest transformation, but ultimately, it is
                  you who holds the power to your own growth.
                </p>
              </div>
            </section>
          </div>
          <div className="text-center">
            <ApplyButton buttonText={'Apply for a free consultation'} />
          </div>
          <WidthWrapper>
            <InstagramEmbed />
          </WidthWrapper>
        </div>
      </main>
      <ContactSection />
    </Layout>
  );
};

export default Home;
