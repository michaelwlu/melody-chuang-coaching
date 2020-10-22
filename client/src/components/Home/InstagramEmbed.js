import React from 'react';
import IframeResizer from 'iframe-resizer-react';

const InstagramEmbed = () => {
  return (
    <div>
      <script src="https://snapwidget.com/js/snapwidget.js"></script>
      <IframeResizer
        src="https://snapwidget.com/embed/860909"
        className="w-px min-w-full overflow-hidden border-none snapwidget-widget"
        allowTransparency="true"
        frameBorder="0"
        scrolling="no"
      ></IframeResizer>
      {/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      <iframe
        src="//lightwidget.com/widgets/fb2544e628235850891f95910b474e6e.html"
        scrolling="no"
        allowtransparency="true"
        className="w-full h-64 border-0 lightwidget-widget"
      ></iframe> */}
    </div>
  );
};

export default InstagramEmbed;
