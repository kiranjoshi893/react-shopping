import React from 'react'
import { useLocation} from 'react-router'
import { BreadcrumbList } from '../common/Common'

function Home(props) {
  const navigate = useLocation()
  console.log(navigate.pathname, 'history1111')
  return (<>
    <BreadcrumbList url={navigate}/>
    <div className='container'>Home page</div>
    </>
  )
}

export default Home