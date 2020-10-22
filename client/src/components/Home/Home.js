import React from 'react';
import ApplyButton from './ApplyButton';
import Photo from '../../assets/Photo.jpg';
import InstagramEmbed from './InstagramEmbed';

const Home = () => {
  return (
    <div className="mx-auto">
      <img
        src={Photo}
        alt=""
        className="object-cover w-full h-64 mx-auto md:h-128"
      />
      <main className="max-w-5xl px-4 mx-auto mb-32 md:px-8 font-themeSerif">
        <div className="pt-8 pb-8 mx-auto text-center">
          <h1 className="mb-6 text-3xl font-semibold lg:text-4xl">
            Your bs-free, paradigm-shifting, shadow-busting mindset coach
          </h1>
          <ApplyButton buttonText={'Apply for a free consultation'} />
        </div>
        <div className="mt-16 mb-16 space-y-24 text-base lg:text-xl">
          <section className="flex justify-start">
            <div className="md:w-4/7">
              <h1 className="mb-6 text-2xl italic font-semibold lg:text-3xl">
                Do you daydream about a life where…
              </h1>
              <div className="space-y-6 md:pl-3">
                <p>
                  …you walk into a room full of people with absolutely no social
                  anxiety?
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
                  …you feel confident and beautiful in your body, no matter what
                  size, shape or weight?
                </p>
                <p>
                  …you don’t rehash and replay the same scenarios and
                  conversations over and over in your head?
                </p>
              </div>
            </div>
          </section>
          <section className="flex justify-end space-y-6">
            <div className="md:w-4/7">
              <p className="font-bold">
                My name is Melody Chuang, and I help women rewire their brains
                and nervous systems to free themselves from the shackles of
                social conditioning and get the results they want in life.
              </p>
              <p>
                In a nutshell, I turn helpless princesses into sovereign queens.
                My approach is through cognitive reprogramming and energy work,
                finding "breaks" in your thought patterns to ultimately
                transform the way you see yourself and experience the world.
              </p>
            </div>
          </section>
          <section className="flex justify-start space-y-6 md:pl-3">
            <div className="md:w-4/7">
              <p className="font-bold">
                I am a Certified Life Coach and Breathwork Facilitator. But
                let’s be real, my credentials are not what is important here.
              </p>
              <p>
                My mission is to help women who identify as anxious overthinkers
                deprogram conditioned beliefs + reprogram their psyches to get
                the results they want in life.
              </p>
              <p>
                All you need to know is that if I am your coach, you are
                guaranteed* to come out with a radically different relationship
                with yourself — one where your inner critic is no longer running
                the show, where you have your own back, and where you can truly
                call yourself your best friend.
              </p>
            </div>
          </section>
          <section className="flex justify-end space-y-6">
            <div className="md:w-4/7">
              <p className="font-bold">
                When you work with me, you become the master of your life, and
                not the other way around.
              </p>
              <p className="italic">
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
        <section className="mx-auto my-16 text-center font-themeSans">
          <p className="mb-6 text-base font-bold font-themeSerif lg:text-xl">
            Follow{' '}
            <a
              href="https://www.instagram.com/iammelodychuang/"
              title="IAmMelodyChuang on Instagram"
              className="text-blue-500 transition-all duration-100 hover:text-blue-700"
            >
              @IAmMelodyChuang
            </a>{' '}
            on Instagram
          </p>
          <InstagramEmbed />
        </section>
      </main>
    </div>
  );
};

export default Home;
