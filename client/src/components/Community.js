import React from 'react';

const Community = () => {
  return (
    <main className="max-w-2xl mx-auto mt-16 mb-32">
      <section className="my-6">
        <h1>Join my Facebook Group!</h1>
      </section>

      <section>
        <h1 className="mb-4 text-4xl italic font-semibold font-themeSerif">
          Mind Mastery with Melody Podcast
        </h1>
        <iframe
          src="https://open.spotify.com/embed-podcast/show/6T1NQlaOY4HOjKQpZ0pHpB"
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <p className="mt-8">
          <strong className="font-semibold">Subscribe: </strong>
          <a
            href="https://open.spotify.com/show/6T1NQlaOY4HOjKQpZ0pHpB?si=pST_5g5rRFWFXqw-ZvCg6Q"
            title="Mind Mastery with Melody | Spotify"
            className="text-purple-500 hover:text-purple-700"
          >
            Spotify
          </a>
          &nbsp;/&nbsp;
          <a
            href="https://podcasts.apple.com/us/podcast/the-honor-your-body-podcast/id1478957908"
            title="Mind Mastery with Melody | Apple Podcasts"
            className="text-purple-500 hover:text-purple-700"
          >
            Apple Podcasts
          </a>
          &nbsp;/&nbsp;
          <a
            href="https://www.listennotes.com/c/77dac4f4412a4e3d834c44ff8c7bb6ab/"
            title="Mind Mastery with Melody | Listen Notes"
            className="text-purple-500 hover:text-purple-700"
          >
            Listen Notes
          </a>
          &nbsp;/&nbsp;
          <a
            href="https://www.buzzsprout.com/571735"
            title="Mind Mastery with Melody | Buzzsprout"
            className="text-purple-500 hover:text-purple-700"
          >
            Buzzsprout
          </a>
          &nbsp;/&nbsp;
          <a
            href="https://feeds.buzzsprout.com/571735.rss"
            title="Mind Mastery with Melody | RSS"
            className="text-purple-500 hover:text-purple-700"
          >
            RSS
          </a>
        </p>
      </section>
    </main>
  );
};

export default Community;
