import React, { PropsWithChildren, ReactNode } from 'react';
import Head from 'next/head';
import { MainNavigation } from '../main-navigation/MainNavigation';
import { useWindowSize } from 'hooks/useWindowSize';

interface IProps {
  title?: string;
  pageType?: string;
  children: ReactNode;
}

export const MainLayout: React.FC<IProps> = (props) => {
  const { title = 'This is the default title', pageType = '' } = props;
  const window = useWindowSize();
  const isRenderPage = pageType && pageType === 'render';
  let height = undefined
  if (window) {
    height = window.height
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <>
        <div style={{ height }} className={`relative flex flex-col w-full`}>
          <header>
            {isRenderPage ? <>Custom Header</> : <MainNavigation />}
          </header>
          <main className={`relative flex-1 flex flex-col ${isRenderPage ? 'overflow-hidden mb-[70px]' : 'overflow-y-auto'}`}>
            {props.children}
          </main>

          {/* Footer Section */}
          <footer className="absolute bottom-0 left-0 right-0 z-50">
            <div className='bg-[#3D3935] flex items-center'>

              {
                isRenderPage && <>Custom Footer</>
              }
            </div>
          </footer>
        </div>
      </>
    </>
  );
};

MainLayout.displayName = 'MainLayout';
