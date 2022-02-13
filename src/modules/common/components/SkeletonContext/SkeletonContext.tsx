import React from 'react';

interface ISkeletonContextProps {
  isLoading: boolean;
}

export const SkeletonContext = React.createContext<ISkeletonContextProps>({
  isLoading: false,
});
