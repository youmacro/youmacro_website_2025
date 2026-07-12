import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

type IStoreButtonProps = {
  label?: string;
};

const StoreButton = ({
  label = 'Microsoft Store',
}: IStoreButtonProps) => (
  <Link
    className="store-button"
    href={AppConfig.storeUrl}
    rel="noreferrer"
    target="_blank"
  >
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M3 4h8v8H3zm10 0h8v8h-8zM3 14h8v8H3zm10 0h8v8h-8z" />
    </svg>
    <span>
      <small>Download from</small>
      <strong>{label}</strong>
    </span>
    <b aria-hidden="true">&rarr;</b>
  </Link>
);

export { StoreButton };
