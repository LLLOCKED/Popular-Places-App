import { ReactNode } from 'react';
import layout from './layout.module.scss';
import Navbar from './navbar/Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={layout.screen}>
      <Navbar />
      <main className={layout.main}>{children}</main>
    </div>
  );
};

export default Layout;
