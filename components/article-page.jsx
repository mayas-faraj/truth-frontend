import AccessTimeIcon from '@mui/icons-material/AccessTime';
import urls from '../public/assets/data/urls.json';
import style from '../styles/article-page.module.scss';

const ArticlePage = ({ content }) => {
  return (
    <article className={style['wrapper']}>
      <h1 className={style.title}><span>{content.attributes.title}</span></h1>
      <div className={style['image-wrapper']}>
        {content.attributes.falseCover.data?.attributes?.mime.startsWith('image') &&
          <div className={style['image-container'] + ' ' + style['image-container--truth']}>
            <img className={style['article__image']} alt={content.attributes.falseCover.data.attributes.alternativeText} src={urls.image_url + content.attributes.falseCover.data.attributes.url} />
          </div>
        }
        {content.attributes.truthCover.data?.attributes?.mime.startsWith('image') &&
          <div className={style['image-container'] + ' ' + style['image-container--false']}>
            <img className={style['article__image']} alt={content.attributes.truthCover.data.attributes.alternativeText} src={urls.image_url + content.attributes.truthCover.data.attributes.url} />
          </div>
        }
        {content.attributes.falseCover.data?.attributes?.mime.startsWith('video') &&
          <div className={style['video-container'] + ' ' + style['video-container--false']}>
            <video controls className={style['article__video']}>
              <source src={urls.image_url + content.attributes.falseCover.data.attributes.url} type={content.attributes.falseCover.data.mime} />
            </video>
          </div>
        }
        {content.attributes.truthCover.data?.attributes?.mime.startsWith('video') &&
          <div className={style['video-container'] + ' ' + style['video-container--truth']}>
            <video controls className={style['article__video']}>
              <source src={urls.image_url + content.attributes.truthCover.data.attributes.url} type={content.attributes.truthCover.data.mime} />
            </video>
          </div>
        }
      </div>
      <div className={style['subtitle-wrapper']}>
        <h2 className={style['subtitle']}>{content.attributes.truthTitle}</h2>
        <h2 className={style['subtitle']}>{content.attributes.falseTitle}</h2>
      </div>
      <div className={style['excerpt-wrapper']}>
        <p className={style['excerpt'] + ' ' + style['excerpt--truth']}>{content.attributes.truthExcerpt}</p>
        <p className={style['excerpt'] + ' ' + style['excerpt--false']}>{content.attributes.falseExcerpt}</p>
      </div>
      <p className={style['article__content']}>{ content.attributes.content[0] != null ? content.attributes.content[0].body : ""}</p>
      <div className={style['article__date']}><AccessTimeIcon /><time dateTime={content.attributes.createdAt}>{new Date(content.attributes.createdAt).toLocaleDateString()}</time></div>
    </article>
  )
}

export default ArticlePage;
