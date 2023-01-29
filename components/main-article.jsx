import style from '../styles/main-article.module.scss';
import urls from '../public/assets/data/urls.json';

const MainArticle = ({content}) => {
    return (
        <div className={style['wrapper']}>
        <div className={style['article-wrapper'] + ' ' + style['article-wrapper--truth']}>
          <div className={style['article__image-container']}>
            <a href={'/' + content.attributes.slug}>
              <img className={style['article__image']} alt={content.attributes.truthCover.data.attributes.alternativeText} src={urls.backend_url + content.attributes.truthCover.data.attributes.url} />
            </a>
          </div>
          <h1 className={style['article__title']}>
            <a href={'/' + content.attributes.slug}>
              {content.attributes.truthTitle}
            </a>
          </h1>  
          <p className={style['article__content']}><span>{content.attributes.truthExcerpt}</span></p>
        </div>
        <div className={style['article-wrapper'] + ' ' + style['article-wrapper--false']}>
          <div className={style['article__image-container']}>
            <a href={'/' + content.attributes.slug}>
              <img className={style['article__image']} alt={content.attributes.falseCover.data.attributes.alternativeText} src={urls.backend_url + content.attributes.falseCover.data.attributes.url} />
            </a>
          </div>
          <h1 className={style['article__title']}>
            <a href={'/' + content.attributes.slug}>
              {content.attributes.falseTitle}
            </a>
          </h1>  
          <p className={style['article__content']}><span>{content.attributes.falseExcerpt}</span></p>
        </div>
      </div>
    )
}

export default MainArticle;