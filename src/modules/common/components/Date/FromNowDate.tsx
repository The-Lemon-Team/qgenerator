import React from 'react';
import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';

interface IFromNowDateProps {
  date: string;
}

export const FromNowDate: React.FC<IFromNowDateProps> = ({ date }) => {
  return (
    <>
      {formatDistance(new Date(date), new Date(), {
        locale: ru,
        addSuffix: true,
      })}
    </>
  );
};
