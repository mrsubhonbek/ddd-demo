import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { CounterReducer } from '@/modules/counter';
import { pokemonApi } from '@/modules/pokemon';
import { flightApi } from '@/modules/table-flights';

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [flightApi.reducerPath]: flightApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(flightApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
