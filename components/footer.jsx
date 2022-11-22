import React from 'react'
import propTypes from 'prop-types'
import dynamic from 'next/dynamic'
import style from '../styles/footer.module.scss'

export default function Footer (props) {
  if (props.socials)
    for (let i = 0; i < props.socials.length; i++) {
      let path='@mui/icons-material/'+props.socials[i].icon;
      props.socials[i].iconComponent = React.lazy(()=>import(path));
    }

  return (
    <footer>
      <div className={style.wrapper}>
        <div className={style.section}>
          <img src="/assets/imgs/logo.png" alt="website logo" />
        </div>
        <div className={style.section}>
          <h2 className={style.section__title}>{props.aboutTitle && props.aboutTitle}</h2>
          <p className={style.section__text}>{props.aboutContent}</p>
        </div>
        <div className={style.section}>
          <h2 className={style.section__title}>{props.linksTitle}</h2>
          <div className={style.links}>
            {
              props.links != null && props.links.map(link => (
                <a key={link.href} className={style.links__item} target="_blank" rel="noreferrer" href={link.href}>
                  <img className={style['links__item-image']} alt={link.title} src={link.img_src} />
                </a>
              )
              )}
          </div>
        </div>
        <div className={style.section}>
          <h2 className={style.section__title}>{props.socialTitle}</h2>
          <div className={style.socials}>
            {
              props.socials != null && props.socials.map(social => (
                <a key={social.href} className={style.socials__item} target="_blank" rel="noreferrer" href={social.href}>
                  <social.iconCompnent className={style['socials__item-icon']} />
                </a>
              )
              )}
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  aboutTitle: propTypes.string,
  aboutContent: propTypes.string,
  linksTitle: propTypes.string,
  links: propTypes.arrayOf(propTypes.object),
  socialTitle: propTypes.string,
  socials: propTypes.arrayOf(propTypes.object)
}
