import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

// eslint-disable-next-line react/prop-types
function YouTubeIframeResponsive({ youtubeID }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
