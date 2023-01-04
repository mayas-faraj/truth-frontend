import React from 'react'
import propTypes from 'prop-types'
import dynamic from 'next/dynamic'
import Tooltip from '@mui/material/Tooltip';
import style from '../styles/footer.module.scss'

export default function Footer (props) {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper+" container"}>
        <div className={style.section}>
          <img src="/assets/imgs/logo.png" className={style.section__logo}  alt="website logo" />
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
                <Tooltip key={link.href} arrow title={link.title}>
                  <a className={style.links__item} target="_blank" rel="noreferrer" href={link.href}>
                    <img className={style['links__item-image']} alt={link.title} src={link.img_src} />
                  </a>
                </Tooltip>
              )
              )}
          </div>
        </div>
        <div className={style.section}>
          <h2 className={style.section__title}>{props.socialTitle}</h2>
          <div className={style.socials}>
            {
              props.socials != null && props.socials.map(social => (
                <Tooltip key={social.href} title={social.title}>
                  <a className={style.socials__item} target="_blank" rel="noreferrer" href={social.href}>
                    <social.icon fontSize="large" className={style['socials__item-icon']} />
                  </a>
                </Tooltip>
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
