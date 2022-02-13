import { createContext } from 'react';

import { navigator } from '../../utils/navigator';

import { INavigator } from '../../interfaces';

export const NavigatorContext = createContext<INavigator>(navigator);
