import React from 'react';
import { Link } from 'react-router-dom';
import { CustomDiv } from './StyleComponent';
const Footer = () => {
    return(
        <CustomDiv as="Footer" className="bg-black text-white pt-5 pb-70">
            <CustomDiv className="container">
                <CustomDiv className="row">
                <CustomDiv className="col-lg-3 col-sm-3">
                    <Link to="/" className='fs-1 text-decoration-none text-white fw-bold'>Kk</Link>
                </CustomDiv>
                <CustomDiv className="col-lg-3 col-sm-3">
                    <CustomDiv className="footer-widget mb-30 ml-30">
                    <CustomDiv as="h5" className='mb-4'>ABOUT US</CustomDiv>
                    <CustomDiv className="footer-list">
                        <CustomDiv as="ul" className='list-unstyled'>
                            <CustomDiv as="li" className='pb-2'>
                                <Link to="/" className='text-light text-decoration-none'>About us</Link>
                            </CustomDiv>
                            <CustomDiv as="li" className='pb-2'>
                                <Link to="/" className='text-light text-decoration-none'>Store location</Link>
                            </CustomDiv>
                            <CustomDiv as="li" className='pb-2'>
                                <Link to="/" className='text-light text-decoration-none'>Contact</Link>
                            </CustomDiv>
                        </CustomDiv>
                    </CustomDiv>
                    </CustomDiv>
                </CustomDiv>
                <CustomDiv className="col-lg-3 col-sm-3">
                    <CustomDiv className="footer-widget mb-30 ml-50">
                    <CustomDiv as="h5" className='mb-4'>USEFUL LINKS</CustomDiv>
                    <CustomDiv className="footer-list">
                        <CustomDiv as="ul" className='list-unstyled'>
                            <CustomDiv as="li" className='pb-2'>
                                <Link to="/" className='text-light text-decoration-none'>Returns</Link>
                            </CustomDiv>
                            <CustomDiv as="li" className='pb-2'>
                                <Link to="/" className='text-light text-decoration-none'>Support Policy</Link>
                            </CustomDiv>
                            <CustomDiv as="li" className='pb-2'>
                                <Link to="/" className='text-light text-decoration-none'>FAQs</Link>
                            </CustomDiv>
                        </CustomDiv>
                    </CustomDiv>
                    </CustomDiv>
                </CustomDiv>
                <CustomDiv className="col-lg-3 col-sm-3">
                    <CustomDiv className="footer-widget mb-30 ml-75">
                        <CustomDiv as="h5" className='mb-4'>FOLLOW US</CustomDiv>
                    <CustomDiv className="footer-list">
                        <CustomDiv as="ul" className='list-unstyled'>
                            <CustomDiv as="li" className='pb-2'>
                                <Link to="//www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-light text-decoration-none'>Facebook</Link>
                            </CustomDiv>
                            <CustomDiv as="li" className='pb-2'>
                                <Link to="//www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-light text-decoration-none'>Instagram</Link>
                            </CustomDiv>
                            <CustomDiv as="li" className='pb-2'>
                                <Link to="//www.youtube.com" target="_blank" rel="noopener noreferrer" className='text-light text-decoration-none'>Youtube</Link>
                            </CustomDiv>
                        </CustomDiv>
                    </CustomDiv>
                    </CustomDiv>
                </CustomDiv>
                </CustomDiv>
            </CustomDiv>
        </CustomDiv>
    )
} 
export default Footer