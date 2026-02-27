'use client';
import { createContext, useState, useContext } from 'react';

export const initialWordList = [
  {
    word: 'Volatile',
    translation:
      'летучий, изменчивый, взрывоопасный, непостоянный, ветреный, быстро испаряющийся',
    id: 1,
  },
  { word: 'Overcome', translation: 'Преодолевать', id: 2 },
  {
    word: 'Flexible',
    translation: 'гибкий, свободный (о графике, расписании) ',
    id: 3,
  },
];

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [words, setWords] = useState(initialWordList);

  return (
    <AppContext.Provider value={{ words, setWords }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
