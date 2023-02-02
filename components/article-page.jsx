import style from '../styles/article-page.module.scss';
import urls from '../public/assets/data/urls.json';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ArticlePage = ({ content }) => {
  return (
    <article className={style['wrapper']}>
      <h1 className={style.title}><span>{content.attributes.title}</span></h1>
      <div className={style['image-wrapper']}>
        {content.attributes.falseCover.data?.attributes?.mime.startsWith('image') &&
          <div className={style['image-container'] + ' ' + style['image-container--truth']}>
            <img className={style['article__image']} alt={content.attributes.falseCover.data.attributes.alternativeText} src={urls.backend_url + content.attributes.falseCover.data.attributes.url} />
          </div>
        }
        {content.attributes.falseCover.data?.attributes?.mime.startsWith('image') &&
          <div className={style['image-container'] + ' ' + style['image-container--false']}>
            <img className={style['article__image']} alt={content.attributes.falseCover.data.attributes.alternativeText} src={urls.backend_url + content.attributes.falseCover.data.attributes.url} />
          </div>
        }
        {content.attributes.falseCover.data?.attributes?.mime.startsWith('video') &&
          <div className={style['video-container'] + ' ' + style['video-container--truth']}>
            <video className={style['article__video']}>
              <source src={urls.backend_url + content.attributes.falseCover.data.attributes.url} type={content.attributes.falseCover.data.mime} />
            </video>
          </div>
        }
        {content.attributes.falseCover.data?.attributes?.mime.startsWith('video') &&
          <div className={style['video-container'] + ' ' + style['video-container--false']}>
            <video className={style['article__video']}>
              <source src={urls.backend_url + content.attributes.falseCover.data.attributes.url} type={content.attributes.falseCover.data.mime} />
            </video>
          </div>
        }
      </div>
      <p className={style['article__content']}>{ content.attributes.content[0].body }</p>
      <div className={style['article__date']}><AccessTimeIcon /><time dateTime={content.attributes.createdAt}>{new Date(content.attributes.createdAt).toLocaleDateString()}</time></div>
    </article>
  )
}

export default ArticlePage;