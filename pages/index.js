import React, {Fragment} from 'react';
import MainArticle from '../components/main-article';
import Article from '../components/article';
import Category from '../components/category';
import urls from '../public/assets/data/urls.json';
import style from '../styles/home.module.scss';

export default function Home({ mainArticle, articles, categories }) {
	return (
    <div className={style.wrapper}>
      <section className={style['main-section']}>
      { mainArticle && <MainArticle content={mainArticle} /> }
      </section>
      <section className={style['content-section']}>
        <section className={style['news_section']}>
          { articles.map(article => <Article key={article.slug} content={article} />) }
        </section>
        <section className={style['sidebar_section']}>
        { categories.map(category=><Category key={category.name} content={category} />) }
        </section>
      </section>
    </div>
	);
}

export async function getStaticProps(context) {
  // read articles
  let result = await fetch(`${urls.backend_url}/api/articles?pagination[page]=1&pagination[pageSize]=10&populate[0]=truthCover&populate[1]=falseCover`);
  const articlesResult = await result.json();
  const articles = articlesResult.data;
  let mainArticle = null;

  for (let i = 0; i< articles.length; i++) 
    if(articles[i].attributes.isFeatured) {
      const splicedArray = articles.splice(i, 1);
      mainArticle = splicedArray[0];
      break;
    }

  // read categories
  result = await fetch(`${urls.backend_url}/api/categories?pagination[page]=1&pagination[pageSize]=5`);
  const categoriesResult = await result.json();
  const categories = categoriesResult.data;

  for (let i = 0; i< categories.length; i++) {
    const articlesOfCategoryResult = await fetch(`${urls.backend_url}/api/articles?pagination[page]=1&pagination[pageSize]=2&populate[0]=truthCover&filters[category]=${categories[i].id}`);
    const articlesOfCategory = await articlesOfCategoryResult.json();
    const articlesOfCategoryData = articlesOfCategory.data;
    categories[i].articles=articlesOfCategoryData;
    }

  return {
    props: {
      mainArticle,
      articles,
      categories
    }
  }
}
