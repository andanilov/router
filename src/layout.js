import React from 'react';
import AnotherUserPageLink from './components/AnotherUserPageLink';
import StyledLink from './components/SlyledLink';

const Layout = ({ children }) => (
    <section className="page">
      <header className="header page__header">
        <nav className="header-nav">

          <div className="header-nav__block">
            <h3 className="header-nav__title"><StyledLink to="/">Home Page</StyledLink></h3>
            <ul>
              <li><StyledLink to="/users">User list</StyledLink></li>
            </ul>
          </div>
          
          <div className="header-nav__block">
            <h3 className="header-nav__title"><StyledLink to="/users">Users List page</StyledLink></h3>
            <ul>
              <li><StyledLink to="/users/1/profile">User page</StyledLink></li>
              <li><StyledLink to="/">Home page</StyledLink></li>
            </ul>
          </div>  
          
          <div className="header-nav__block">
            <h3 className="header-nav__title"><StyledLink to="/users/1/profile">User page</StyledLink></h3>
            <ul>
              <li><StyledLink to="/users/1/edit">User edit page</StyledLink></li>
              <li><StyledLink to="/users">Users list</StyledLink></li>
            </ul>
          </div>
          
          <div className="header-nav__block">
            <h3 className="header-nav__title"><StyledLink to="/users/1/edit">User edit page</StyledLink></h3>
            <ul>
              <li><StyledLink to="/users/1/profile">User page</StyledLink></li>
              <li><AnotherUserPageLink>Another user page</AnotherUserPageLink></li>
              <li><StyledLink to="/users">Users list page</StyledLink></li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="page__main">
        {children}
      </main>
    </section>
);
 
export default Layout;
