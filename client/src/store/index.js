import { configureStore } from '@reduxjs/toolkit'
import { rootReducer, middlewares } from './utils';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    //Need to add custom middlewares here
      getDefaultMiddleware().concat(middlewares),
    preloadedState,
    enhancers: [],
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./utils', () => store.replaceReducer(rootReducer))
  }

  return store
}