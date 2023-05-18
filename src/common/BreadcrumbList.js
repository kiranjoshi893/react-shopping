import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { CustomDiv } from './StyleComponent';
export const Loader = () => <CustomDiv className="flone-preloader-wrapper"><CustomDiv className="lds-ripple"><CustomDiv></CustomDiv><CustomDiv></CustomDiv></CustomDiv></CustomDiv>
export const BreadcrumbList = (props) => {
  const pathnames = props.url.pathname.split("/").filter(x => x);
  console.log(pathnames, 'props1111111112')
    return (
        <>{pathnames.length >= 1 ? 
        <CustomDiv className='bg-light'>
        <Breadcrumb className='container breadcrumb-custom py-3 mb-4'>
        <CustomDiv as="li" className='breadcrumb-item'><Link to="/">Home</Link></CustomDiv>
          {pathnames.map((data, index) => {
            console.log(index, 'index')
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            // const filteredURL = data.split('-').join(' ');
            const filteredURL = data.replaceAll('%20', ' ');
            const isLast = index === pathnames.length - 1;
            console.log(routeTo.replaceAll('%20',  '-'), 'routeTo')
            return isLast ? (<CustomDiv as="li" key={data} className='breadcrumb-item'><span>{filteredURL}</span></CustomDiv>)
              : 
              <CustomDiv as="li" key={data} className='breadcrumb-item'>
                <Link to={routeTo}>{filteredURL}</Link>
              </CustomDiv>
              }
            )}
        </Breadcrumb>
      </CustomDiv> :  ''}</>
    );
  }
  export default BreadcrumbList