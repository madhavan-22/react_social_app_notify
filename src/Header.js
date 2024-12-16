import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Header = ({title}) => {
  const {width} = useContext(DataContext)
  return (
    <header className='Header'>
        <h1> {title} </h1> 
    </header>
  )
}

export default Header

// import React from 'react';
// import { FaMobileAlt, FaTabletAlt, FaLaptop } from 'react-icons/fa';


// const Header = ({title,width}) => {
//   return ( 
//     <header className='Header'>
//           <h1>{title}</h1>
//           {width < 768 ? <FaMobileAlt/>
//               : width < 992 ? <FaTabletAlt/>
//                   : <FaLaptop/> }
//     </header>
//   )
// }

// export default Header