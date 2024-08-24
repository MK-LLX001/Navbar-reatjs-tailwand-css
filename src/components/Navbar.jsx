import React from 'react'
import logo from '../assets/react.svg';
import { Link, Outlet } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
export default function Navbar() {

const Menu = [
  {
    title: 'Home',
    path: '/',
    icon:'',
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoChevronDown/>,
    subMenu: [
      {
        title: 'Submenu 1',
        path: '/about/submenu1',
      },
      {
        title: 'Submenu 2',
        path: '/about/submenu2',
      },
      {
        title: 'Submenu 3',
        path: '/about/submenu3',
      }
    ]
      
  },
  {
    title: 'services',
    path: '/services',
    icon: "",
  }
]

  return (
    <div>
      
      <nav className='flex justify-between bg-white border-b h-[80px] items-center px-[3vw] py-5 top-0 sticky z-10 shadow md:text-xl text-sm'>


         <div className="menu flex gap-4 items-center">
              <div className="logo flex gap-3 items-center">
                <img src={logo} />
                <span className='text-pink font-semibold text-xl'>WebProfiles</span>
              </div>

                {
                  Menu.map((menuItem,index) =>{
                     return(
                         <div
                         key={index}
                         
                         className="menutitle relative group">

                            <Link 
                            to={menuItem.path}
                            className='flex font-semibold md:text-xl items-center text-dark-gray hover:text-dark-grey'>
                              
                                { menuItem.title }
                                { menuItem.icon}

                            </Link>

                                {/* this is submenu  */}

                                {
                                  menuItem.subMenu && (
                                    <div className="submemu absolute left-0 w-[10rem] bg-white text-dark-gray border-b shadow px-4 py-2 rounded-md hidden group-hover:block ">

                                          {
                                            menuItem.subMenu.map((submenuItem, i) => {

                                                return (

                                                      <Link className='flex font-semibold p-2'>
                                                          {submenuItem.title}
                                                      </Link>

                                                )
                                            })
                                          }

                                    </div>
                                  )
                                }

                         </div>
                     )
                  })
                }

         </div>




         <div className='btn flex items-center gap-4'>

          <button className='bg-dark-gray text-white px-4 py-2 text-xl rounded-xl'>login</button>
          <button className='bg-dark-grey text-white px-4 py-2 text-xl rounded-xl'>logout</button>

         </div>



      </nav>

      <Outlet/>

    </div>
  )
}
