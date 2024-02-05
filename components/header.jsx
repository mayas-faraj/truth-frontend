import React from 'react';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import style from '/styles/menu.module.scss';
export default function Header(props) {
  const items=[
    { title: "الرئيسية", icon: <HomeIcon/>, link: "/" },
    { title: "تقارير", icon: <AssignmentIcon/>, link: "/reports" },
    { title: "آلية التحقق", icon: <InfoIcon/>, link: "/about-us" },
    { title: "أبلغنا عن خبر كاذب", icon: <CallIcon/>, link: "/contact-us" },
  ];

  const [activeMenu, setActiveMenu] = React.useState(false)

  return (
    <>
    <h1 className={style["title"]}>الخبر <span className={style["title--false"]}>الكاذب</span> والخبر <span className={style["title--truth"]}>الصحيح</span></h1>
    <div className={style["wrapper"]}>
      <div className={style["logo-container"]}>
        <img src="/assets/imgs/logo.png"/>
      </div>
      <div className={style["nav-wrapper"]}>
        <div className={style["mobile-nav"]}>
          <MenuIcon className={style["mobile-nav__button"]} onClick={() => setActiveMenu(!activeMenu)}/>
        </div>
        <nav className={style["nav"]} onClick={() => setActiveMenu(false)}>
          <ul className={style["nav-menu"] + (activeMenu ? " " + style["nav-menu--active"]: "")}>
          {
            items.map(item=>(
              <li key={item.link} className={style["nav__item"]}>
                    <Link href={item.link}>
                      {item.icon}
                      <span className={style["nav__text"]}>{item.title}</span>
                    </Link>
              </li>
            ))
          }
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
}
