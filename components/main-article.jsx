import Link from 'next/link';
import style from '../styles/main-article.module.scss';
import urls from '../public/assets/data/urls.json';

const MainArticle = ({content}) => {
    return (
        <div className={style['wrapper']}>
        <div className={style['article-wrapper'] + ' ' + style['article-wrapper--false']}>
          <div className={style['article__image-container']}>
          { content.attributes.falseCover.data?.attributes?.mime.startsWith('image') && 
            <Link href={'/news/' + content.attributes.slug}>
              <img className={style['article__image']} alt={content.attributes.falseCover.data.attributes.alternativeText} src={urls.image_url + content.attributes.falseCover.data.attributes.url} />
            </Link>
          }
          { content.attributes.falseCover.data?.attributes?.mime.startsWith('video') && 
            <video className={style['article__video']} controls >
              <source src={urls.image_url + content.attributes.falseCover.data.attributes.url} type={content.attributes.falseCover.data.mime} />
            </video>
          }
          </div>
          <h1 className={style['article__title']}>
            <Link href={'/news/' + content.attributes.slug}>
              {content.attributes.falseTitle}
            </Link>
          </h1>  
          <p className={style['article__content']}><span>{content.attributes.falseExcerpt}</span></p>
        </div>
        <div className={style['article-wrapper'] + ' ' + style['article-wrapper--truth']}>
          <div className={style['article__image-container']}>
          { content.attributes.truthCover.data?.attributes?.mime.startsWith('image') && 
            <Link href={'/news/' + content.attributes.slug}>
              <img className={style['article__image']} alt={content.attributes.truthCover.data.attributes.alternativeText} src={urls.image_url + content.attributes.truthCover.data.attributes.url} />
            </Link>
          }
          { content.attributes.truthCover.data?.attributes?.mime.startsWith('video') && 
            <video className={style['article__video']} controls>
              <source src={urls.image_url + content.attributes.truthCover.data.attributes.url} type={content.attributes.truthCover.data.mime} />
            </video>
          }
          </div>
          <h1 className={style['article__title']}>
            <Link href={'/news/' + content.attributes.slug}>
              {content.attributes.truthTitle}
            </Link>
          </h1>  
          <p className={style['article__content']}><span>{content.attributes.truthExcerpt}</span></p>
        </div>
      </div>
    )
}

export default MainArticle;
