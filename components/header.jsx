import React from 'react';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import style from '/styles/menu.module.scss';
export default function Header(props) {
  const items=[
    { title: "الصفحة الرئيسية", icon: <HomeIcon/>, link: "/" },
    { title: "حقيقة الأخبار", icon: <LanguageIcon/>, link: "news" },
    { title: "تقارير", icon: <AssignmentIcon/>, link: "reports" },
    { title: "كيفية العمل", icon: <InfoIcon/>, link: "about-us" },
    { title: "اتصل بنا", icon: <CallIcon/>, link: "contact-us" },
  ];
  return (
    <div className={style["wrapper"]}>
      <div className={style["image-container"]}>
        <img src="/assets/imgs/logo.png"/>
      </div>
      <div className={style["nav-wrapper"]}>
        <nav className={style["nav"]}>
          <ul className={style["nav-menu"]}>
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
  );
}
