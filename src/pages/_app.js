import Layout from "../components/layout";
import "@/styles/globals.css";
import "animate.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "../components/reducer/counterSlice";

export default function App({ Component, pageProps }) {
  const reducers = combineReducers({ counter });

  const persistConfig = { key: "fast_food", storage };

  const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
