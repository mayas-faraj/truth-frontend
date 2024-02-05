import style from '../styles/report-page.module.scss';
import urls from '../public/assets/data/urls.json';

const ReportPage = ({ content }) => {
  return (
    <report className={style['wrapper']}>
      <h1 className={style.title}><span>{content.attributes.title}</span></h1>
      <div className={style['image-wrapper']}>
        {content.attributes.cover.data?.attributes?.mime.startsWith('image') &&
          <div className={style['image-container'] + ' ' + style['image-container--truth']}>
            <img className={style['report__image']} alt={content.attributes.cover.data.attributes.alternativeText} src={urls.image_url + content.attributes.cover.data.attributes.url} />
          </div>
        }
        {content.attributes.cover.data?.attributes?.mime.startsWith('video') &&
          <div className={style['video-container'] + ' ' + style['video-container--false']}>
            <video controls className={style['report__video']}>
              <source src={urls.image_url + content.attributes.cover.data.attributes.url} type={content.attributes.cover.data.mime} />
            </video>
          </div>
        }
      </div>
      <p className={style['report__content']}>{ content.attributes.content[0].body }</p>
    </report>
  )
}

export default ReportPage;
