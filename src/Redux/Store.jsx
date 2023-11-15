
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './Reducers';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';



const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user', 'app'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});
let persistor = persistStore(store);
export { persistor, store };