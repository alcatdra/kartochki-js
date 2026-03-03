'use client';
import { createContext, useState, useContext } from 'react';

const initialStacks = [
  {
    id: 'default',
    name: 'Default stack',
    words: [
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
    ],
  },
  {
    id: 'extra',
    name: 'Extra stack',
    words: [],
  },
];

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [stacks, setStacks] = useState(initialStacks);
  const [currentStackId, setCurrentStackId] = useState(initialStacks[0].id);

  const value = {
    stacks,
    setStacks,
    currentStackId,
    setCurrentStackId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
