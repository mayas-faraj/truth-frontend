import style from '../styles/article.module.scss';
import urls from '../public/assets/data/urls.json';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Article = ({content}) => {
    return (
        <div className={style['wrapper']}>
        <article className={style['article-wrapper']}>
          <div className={style['article__image-container']}>
            <a href={'/' + content.attributes.slug}>
              <img className={style['article__image'] + ' ' + style['article__image--truth']} alt={content.attributes.truthCover.data.attributes.alternativeText} src={urls.backend_url + content.attributes.truthCover.data.attributes.url} />
              <img className={style['article__image'] + ' ' + style['article__image--false']} alt={content.attributes.falseCover.data.attributes.alternativeText} src={urls.backend_url + content.attributes.falseCover.data.attributes.url} />
            </a>
          </div>
          <h1 className={style['article__title']}>
            <a href={'/' + content.attributes.slug}>
              {content.attributes.truthTitle}
            </a>
          </h1>  
          <p className={style['article__content']}>{content.attributes.truthExcerpt}</p>
          <div className={style['article__date']}><AccessTimeIcon/><time dateTime={content.attributes.createdAt}>{new Date(content.attributes.createdAt).toLocaleDateString()}</time></div>
        </article>
      </div>
    )
}

export default Article;