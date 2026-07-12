import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = ({ xl = false }: ILogoProps) => (
  <span className={`brand-logo${xl ? ' brand-logo--large' : ''}`}>
    <span className="brand-logo__mark">
      <Image alt="" height={42} priority src="/logo.svg" width={42} />
    </span>
    <span className="brand-logo__copy">
      <strong>{AppConfig.site_name}</strong>
      {xl && <small>Video Downloader</small>}
    </span>
  </span>
);

export { Logo };
