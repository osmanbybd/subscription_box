import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/user.png'
import { AuthContext } from '../component/provider/AuthCotext';
import { toast } from 'react-toastify';
import Loading from '../component/Loading';


const Navbar = () => {

  const {user,logOut} =use(AuthContext)





  const handleLogOut =( ) =>{
    logOut()
    .then(result => {
      console.log(result)
      toast.error("Log Out ")
        if(!user){
    return <Loading></Loading>
  }
      
    })
    .catch(error =>{
      console.log(error)
    })
  }


    return (
   
<div className="navbar container   mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/contact'>contact Us</Link></li>
        {
      user && <li className='text-lg font-bold'><NavLink to='/faq'>FAG</NavLink></li>
    }
       {
        user ? <button onClick={handleLogOut} className="btn btn-secondary">logout</button>:
          <Link to='/auth/login' ><button className="btn btn-primary">log in</button></Link>
      }

        
      
       
      </ul>
    </div>
    <Link to='/' className=" text-2xl font-bold ">Subscription <span className='text-blue-500 '>Box</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='text-lg font-bold'><NavLink to='/'>Home</NavLink></li>
    <li className='text-lg font-bold'><NavLink to='/profile'>Profile</NavLink></li>
    <li className='text-lg font-bold'><NavLink to='/contact'>contact Us</NavLink></li>
    {
      user && <li className='text-lg font-bold'><NavLink to='/faq'>FAG</NavLink></li>
    }

     
    </ul>
  </div>
  <div className="navbar-end gap-4 hidden lg:flex"  >
        <img className='w-14 h-14  rounded-full  tooltip tooltip-bottom cursor-pointer'
        // data-tip={user.displayName}
        title={user ? user.displayName : 'Guest User'}
        src={`${user ? user.photoURL : logo}`} alt="" />
        

      {
        user ? <button onClick={handleLogOut} className="btn btn-secondary">logout</button>:
          <Link to='/auth/login' ><button className="btn btn-primary">log in</button></Link>
      }

  </div>
</div>

    );
};

export default Navbar;