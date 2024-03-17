import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SideNavbar = () => {
    const location = useLocation();
    const navigate=useNavigate()
    const handelLogout=()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/login')
      }
  return (
  //   <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
  // <div className="scrollbar-inner">
  //   <div className="navbar-inner">
  //     <div className="collapse navbar-collapse" id="sidenav-collapse-main">
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <Link className="nav-link active" to={location.pathname==='/newTask'?"/":"/newTask"}>
  //             <i className="ni ni-tv-2 text-primary"></i>
  //             <span className="nav-link-text">{location.pathname==='/newTask'?"الرئيسية":"مهمة جديدة"}</span>
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link " to="/allTasks">
  //             <i className="ni ni-planet text-orange"></i>
  //             <span className="nav-link-text">عرض جميع المهام</span>
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link " to="/allUsers">
  //             <i className="ni ni-pin-3 text-primary"></i>
  //             <span className="nav-link-text">عرض جميع المستخدمين</span>
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link " to="/wallet">
  //             <i className="ni ni-single-02 text-yellow"></i>
  //             <span className="nav-link-text">الخزنة</span>
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link className="nav-link " to="/addUser">
  //             <i className="ni ni-bullet-list-67 text-default"></i>
  //             <span className="nav-link-text">اضافة مستخدم</span>
  //           </Link>
  //         </li>
         

  //         <li onClick={handelLogout} className="nav-item">
  //           <Link className="nav-link" to="">
  //             <i className="ni ni-user-run text-red"></i>
  //             <span className="nav-link-text">تسجيل الخروج</span>
  //           </Link>
  //         </li>
  //       </ul>
      
        
  //     </div>
  //   </div>
  // </div>
  //   </nav>
  <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
  <div class="sidenav-header">
    <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
    <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
      <img src="./assets/img/logo-ct-dark.png" class="navbar-brand-img h-100" alt="main_logo"/>
      <span class="ms-1 font-weight-bold">PapperLess</span>
    </a>
  </div>
  <hr class="horizontal dark mt-0"/>
  <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li className="nav-item">
            <Link className="nav-link active" to={location.pathname==='/newTask'?"/":"/newTask"}>
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </div>
              <span className="nav-link-text">{location.pathname==='/newTask'?"الرئيسية":"مهمة جديدة"}</span>
            </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/allTasks">
        <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </div>
          
          <span className="nav-link-text">عرض جميع المهام</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/allUsers">
        <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </div>
          <span className="nav-link-text">عرض جميع المستخدمين</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/wallet">
        <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </div>
          <span className="nav-link-text">الخزنة</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/addUser">
        <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </div>
          <span className="nav-link-text">اضافة مستخدم</span>
        </Link>
      </li>
         

          <li onClick={handelLogout} className="nav-item">
            <Link className="nav-link" to="">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </div>
              <span className="nav-link-text">تسجيل الخروج</span>
            </Link>
          </li>
    </ul>
  </div>
 
</aside>
  )
}

export default SideNavbar