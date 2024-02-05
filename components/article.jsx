import Link from 'next/link';
import style from '../styles/article.module.scss';
import urls from '../public/assets/data/urls.json';

const Article = ({content}) => {
    return (
        <div className={style['wrapper']}>
        <article className={style['article-wrapper']}>
          <div className={style['article__image-container']}>
          { content.attributes.truthCover.data?.attributes?.mime.startsWith('image') && 
            <Link className={style['article-image-link']} href={'/news/' + content.attributes.slug}>
              <img className={style['article__image'] + ' ' + style['article__image--truth']} alt={content.attributes.truthCover.data.attributes.alternativeText} src={urls.image_url + content.attributes.truthCover.data.attributes.url} />
              <img className={style['article__image'] + ' ' + style['article__image--false']} alt={content.attributes.falseCover.data.attributes.alternativeText} src={urls.image_url + content.attributes.falseCover.data.attributes.url} />
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
          <p className={style['article__content']}>{content.attributes.truthExcerpt}</p>
        </article>
      </div>
    )
}

export default Article;
