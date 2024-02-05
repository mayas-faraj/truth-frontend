import Link from 'next/link'
import style from '../styles/category.module.scss'
import urls from '../public/assets/data/urls.json'

const Category = ({ content }) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.category__title}>{content.attributes.name}</h2>
      <div className={style.category__articles}>
        {
          content.articles.map(article => (
            <div key={article.attributes.slug} className={style.category__article}>
              <div className={style.category__image_container}>
                <Link href={'/news/' + article.attributes.slug}>
                {
                  article.attributes.truthCover.data?.attributes?.mime.startsWith('image') && 
                  <img className={style.category__image} alt={article.attributes.truthCover.data.attributes.alternativeText} src={urls.image_url + article.attributes.truthCover?.data.attributes.formats.thumbnail.url} />
                }
                {
                  article.attributes.truthCover?.data?.attributes?.mime.startsWith('video') && 
                  <video className={style.category__video} controls>
                    <source src={urls.image_url + article.attributes.truthCover?.data.attributes.url} type={article.attributes.truthCover.data.attributes.mime} />
                  </video>
                }
                </Link>
              </div>
              <p className={style.category__article_text}>{article.attributes.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category;
