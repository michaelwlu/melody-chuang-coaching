import React from 'react';
import { FacebookProvider, Group } from 'react-facebook';

const FBGroup = () => {
  return (
    <div className="overflow-hidden">
      <FacebookProvider
        appId="3076915805733522"
        onReady={() => console.log('fb ready')}
      >
        <Group
          href="https://www.facebook.com/groups/mastersofthenewparadigm/"
          className="w-full"
          showSocialContext={true}
          showMetaData={false}
          skin="light"
        />
      </FacebookProvider>
    </div>
  );
};

export default FBGroup;
