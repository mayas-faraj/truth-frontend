import Link from 'next/link';
import style from '../styles/report.module.scss';
import urls from '../public/assets/data/urls.json';

const Report = ({content}) => {
    return (
        <div className={style.wrapper}>
          <div className={style['image-container']}>
            <Link href={'/reports/' + content.attributes.slug}>
              <img className={style['image-container__image']} src={urls.image_url + content.attributes.cover.data.attributes.url} alt={content.attributes.cover.data.attributes.alternativeText}/>
            </Link>
          </div>
          <div className={style['text-container']}>
            <p className={style['text-container__text']}>{ content.attributes.excerpt }</p>
          </div>
        </div>
    )
}

export default Report;