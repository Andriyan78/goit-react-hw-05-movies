import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HiFilm } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { Header, Link, TextFooter, Footer } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">
            <AiOutlineHome />
            Home
          </Link>
          <Link to="/movies">
            <HiFilm /> Movies
          </Link>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <Footer>
         <TextFooter>
          All rights reserved.
       </TextFooter>
      </Footer>
    </>
  );
};