import React from 'react';
import StyledLink from '../utils/StyledLink';

const Podcast = () => {
  return (
    <div>
      <iframe
        title="Mind Mastery with Melody | Spotify Player"
        src="https://open.spotify.com/embed-podcast/show/6T1NQlaOY4HOjKQpZ0pHpB"
        width="100%"
        height="232"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
      <p className="mt-8 text-sm lg:text-base">
        <strong className="font-semibold">Subscribe: </strong>
        <StyledLink
          href="https://open.spotify.com/show/6T1NQlaOY4HOjKQpZ0pHpB?si=pST_5g5rRFWFXqw-ZvCg6Q"
          title="Mind Mastery with Melody | Spotify"
        >
          Spotify
        </StyledLink>
        &nbsp;/&nbsp;
        <StyledLink
          href="https://podcasts.apple.com/us/podcast/the-honor-your-body-podcast/id1478957908"
          title="Mind Mastery with Melody | Apple Podcasts"
        >
          Apple Podcasts
        </StyledLink>
        &nbsp;/&nbsp;
        <StyledLink
          href="https://www.listennotes.com/c/77dac4f4412a4e3d834c44ff8c7bb6ab/"
          title="Mind Mastery with Melody | Listen Notes"
        >
          Listen Notes
        </StyledLink>
        &nbsp;/&nbsp;
        <StyledLink
          href="https://www.buzzsprout.com/571735"
          title="Mind Mastery with Melody | Buzzsprout"
        >
          Buzzsprout
        </StyledLink>
        &nbsp;/&nbsp;
        <StyledLink
          href="https://feeds.buzzsprout.com/571735.rss"
          title="Mind Mastery with Melody | RSS"
        >
          RSS
        </StyledLink>
      </p>
    </div>
  );
};

export default Podcast;
