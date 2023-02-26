import Link from 'next/link'
import style from '../styles/type.module.scss'
import urls from '../public/assets/data/urls.json'

const Type = ({ content }) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.type__title}>{content.attributes.name}</h2>
      <div className={style.type_reports}>
        {
          content.reports.map(report => (
            <div key={report.attributes.slug} className={style.type__report}>
              <div className={style.type__image_container}>
                <Link href={'/news/' + report.attributes.slug}>
                {
                  report.attributes.cover.data?.attributes?.mime.startsWith('image') && 
                  <img className={style.type__image} alt={report.attributes.cover.data.attributes.alternativeText} src={urls.backend_url + report.attributes.cover?.data.attributes.formats.thumbnail.url} />
                }
                {
                  report.attributes.cover?.data?.attributes?.mime.startsWith('video') && 
                  <video className={style.type__video} controls>
                    <source src={urls.backend_url + report.attributes.cover?.data.attributes.url} type={report.attributes.cover.data.attributes.mime} />
                  </video>
                }
                </Link>
              </div>
              <p className={style.type__report_text}>{report.attributes.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Type;
