import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
export const Loader = () => <div className="flone-preloader-wrapper"><div className="lds-ripple"><div></div><div></div></div></div>
export const BreadcrumbList = (props) => {
    console.log(props.data.pathname, 'props1111111111')
    return (
        <div className='bg-light'>
        <Breadcrumb className='container breadcrumb-custom py-3 mb-4'>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }