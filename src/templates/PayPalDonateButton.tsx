// components/PayPalDonateButton.tsx
import React, { useEffect, useRef, useState } from 'react';


interface PayPalDonateButtonProps {
  hostedButtonId: string;
}

const PayPalDonateButton: React.FC<PayPalDonateButtonProps> = ({ hostedButtonId }) => {
  const donateButtonRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
    script.charset = 'UTF-8';

    script.onload = () => {
      if (window.PayPal && window.PayPal.Donation) {
        setSdkReady(true);
      } else {
        setError('PayPal SDK failed to load.');
      }
    };

    script.onerror = () => {
      setError('Failed to load PayPal SDK.');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (sdkReady && donateButtonRef.current) {
      try {
        window.PayPal.Donation.Button({
          env: 'production',
          hosted_button_id: hostedButtonId,
          image: {
            src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
            alt: 'Donate with PayPal button',
            title: 'PayPal - The safer, easier way to pay online!',
          },
        }).render('#donate-button');
      } catch (err) {
        setError('Failed to render PayPal button.');
        console.error('PayPal button render error:', err);
      }
    }
  }, [sdkReady, hostedButtonId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div id="donate-button" ref={donateButtonRef}></div>;
};

export default PayPalDonateButton;