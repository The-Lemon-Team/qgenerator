import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MainLogo } from './qgenarator_main.svg';
import { ReactComponent as SecondaryLogo } from './qgenarator_secondary.svg';

import { mainPageUrl } from '../../utils';

export interface ILogoProps {
  isMainLogo: boolean;
}

export const Logo: React.FC<ILogoProps> = ({ isMainLogo }) => {
  const Logo = useMemo(() => (isMainLogo ? MainLogo : SecondaryLogo), [
    isMainLogo,
  ]);

  return (
    <div>
      <Link to={mainPageUrl}>
        <Logo />
      </Link>
    </div>
  );
};
