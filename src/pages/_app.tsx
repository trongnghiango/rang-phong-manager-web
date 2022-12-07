import '../styles/main.scss';
import '../styles/nprogress.scss'

import React, { useState, useEffect, HtmlHTMLAttributes, ElementType, ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import AppProvider, { APP_STATE_NAME, useStateValue } from 'state/AppProvider';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { INIT_STORED } from 'state/ActionTypes';
import { IState } from 'state/interfaces';
import { useWindowSize } from 'hooks/useWindowSize';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function NextApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const handleStart = () => { setPageLoading(true); };
  const handleComplete = () => { setPageLoading(false); };
  const { dispatch } = useStateValue();

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());

  }, []);

  let storedData: IState;
  useEffect(() => {
    if (JSON.parse(localStorage.getItem(APP_STATE_NAME)!)) {
      storedData = JSON.parse(localStorage.getItem(APP_STATE_NAME)!);
      storedData.teeth.currentStep = -1;

      //checking if there already is a state in localstorage
      //if yes, update the current state with the stored one
      console.log('[STOREDDATA]::\n\n', storedData)
      dispatch({
        type: INIT_STORED,
        payload: storedData,
      });

    }
  }, []);

  return (
    <AppProvider>
      {pageLoading
        ? (<div>Loading</div>) :
        getLayout(<Component {...pageProps} />)
      }
    </AppProvider>

  );
}

// ts-prune-ignore-next
export default NextApp;
