import React from 'react';

import { Grid, Menu } from '@/components';
import Header from './Header';

interface ISectionProps {
  showMenu?: boolean;
}

const Section: React.FC<ISectionProps> = ({ children, showMenu = true }) => {
  return (
    <>
      {/* DESKTOP */}
      <div className="relative overflow-y-scroll h-screen lg:block hidden">
        <Grid className="flex" style={{ paddingRight: '0' }}>
          <div className="sticky top-0 h-screen flex justify-between col-span-7">
            <Header />
          </div>

          <main className="col-span-5 relative">
            {showMenu && (
              <div className="sticky top-0 right-0 left-0">
                <Menu />
              </div>
            )}

            <div className="pr-16 pt-12">{children}</div>
          </main>
        </Grid>
      </div>

      {/* MOBILE AND TABLET */}
      <div className="relative lg:hidden">
        {showMenu && <Menu />}
        <Grid>
          <div className="py-12 col-span-4 md:col-span-8">{children}</div>
        </Grid>
      </div>
    </>
  );
};

export default Section;
