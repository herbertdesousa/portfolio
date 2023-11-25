import { useEffect, useRef, useState } from 'react';

import { Grid, Avatar, Menu } from '@/components';
import { About, Header } from '@/modules';

const Home: React.FC = () => {
  const [bottomHeaderHeight, setBottomHeaderHeight] = useState(0);
  const bottomHeader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBottomHeaderHeight(bottomHeader?.current?.clientHeight);
  }, []);

  return (
    <>
      {/* DESKTOP */}
      <div className="relative overflow-y-scroll h-screen lg:block hidden">
        <Grid className="flex" style={{ paddingRight: '0' }}>
          <div className="sticky top-0 h-screen flex justify-between col-span-7">
            <Header />
          </div>

          <main className="col-span-5 relative">
            <div className="sticky top-0 right-0 left-0">
              <Menu />
            </div>

            <div className="pr-16" style={{ marginTop: 'calc(100vh)' }}>
              <About />
            </div>
          </main>
        </Grid>
      </div>

      {/* MOBILE AND TABLET */}
      <div className="relative lg:hidden">
        <Grid>
          <div
            className="
            flex justify-between flex-col col-span-4 md:col-span-8
          "
            style={{ height: `calc(100vh - ${bottomHeaderHeight}px)` }}
          >
            <Header />
            <Avatar />
          </div>
          <div
            ref={bottomHeader}
            className="sticky top-0 left-0 right-0 col-span-4 md:col-span-8"
          >
            <div
              style={{ width: 'calc(100% + 24px + 24px)', marginLeft: '-24px' }}
            >
              <Menu
                onClickOpenOptionLanguage={() => {
                  if (window.scrollY <= 100) {
                    window.scrollTo({ top: 200, behavior: 'smooth' });
                  }
                }}
              />
            </div>
          </div>

          <About />
        </Grid>
      </div>
    </>
  );
};

export default Home;
