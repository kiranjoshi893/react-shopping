import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
export const Loader = () => <div className="flone-preloader-wrapper"><div className="lds-ripple"><div></div><div></div></div></div>
export const BreadcrumbList = (props) => {
  const pathnames = props.url.pathname.split("/").filter(x => x);
  console.log(pathnames, 'props1111111112')
  console.log(window.location.pathname, 'props1111111111')
  // console.log(isLast, routeTo, 'routeTo')
  
   
    return (
        <>{pathnames.length >= 1 ? <div className='bg-light'>
        <Breadcrumb className='container breadcrumb-custom py-3 mb-4'>
        <li className='breadcrumb-item'><Link to="/">Home</Link></li>
          {pathnames.map((data, index) => {
            console.log(index, 'index')
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            console.log(isLast, routeTo, 'routeTo')
            return isLast ? (<li key={data} className='breadcrumb-item'><span>{data}</span></li>)
              : 
              <li key={data} className='breadcrumb-item'><Link to={routeTo}>{data}</Link></li>
              }
            )}
        </Breadcrumb>
      </div> :  ''}</>
    );
  }