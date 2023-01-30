import style from '../styles/category.module.scss';
import urls from '../public/assets/data/urls.json';

const Category = ({content}) => {
    return (
      <div className={style.wrapper}>
        <h2 className={style.category__title}>{content.attributes.name}</h2>
        <div className={style.category__articles}>
        {
          content.articles.map(article => (
            <div className={style.category__article}>
              <div className={style.category__image_container}>
                <img className={style.category__image} alt={article.attributes.truthCover.data.attributes.alternativeText} src={urls.backend_url + article.attributes.truthCover.data.attributes.formats.thumbnail.url}/>
              </div>
              <p className={style.cateogry__article_text}>{article.attributes.title}</p>
            </div>
          ))
        }
        </div>
      </div>
    )
}

export default Category;