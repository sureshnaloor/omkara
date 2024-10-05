import { useEffect, useRef } from 'react';

const PujaStream = () => {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    // Check if the script is already added
    if (!document.querySelector('script[src="https://meet.jit.si/external_api.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://meet.jit.si/external_api.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        initializeJitsi();
      };
    } else {
      initializeJitsi();
    }

    return () => {
      // Clean up the Jitsi API instance
      if (jitsiContainerRef.current) {
        jitsiContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  const initializeJitsi = () => {
    const domain = 'meet.jit.si';
    const options = {
      roomName: 'PujaStreamRoom',
      width: '100%',
      height: 500,
      parentNode: jitsiContainerRef.current,
      configOverwrite: {
        startWithAudioMuted: true,
        startWithVideoMuted: false,
      },
      interfaceConfigOverwrite: {
        filmStripOnly: false,
        SHOW_JITSI_WATERMARK: false,
      },
      userInfo: {
        displayName: 'Puja Host',
      },
    };
    new window.JitsiMeetExternalAPI(domain, options);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Live Puja Stream</h2>
        <div ref={jitsiContainerRef} style={{ height: '500px' }} />
      </div>

      {/* Add your interactions for comments, likes, and gifts here */}
    </div>
  );
};

export default PujaStream;