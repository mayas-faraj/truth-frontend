import React, {Fragment} from 'react';
import SettingContext from '../components/setting-context.jsx';
import urls from '../public/assets/data/urls.json';
import style from '../styles/home.module.scss';

export default function Home({ mainArticle, articles, categories }) {
console.dir(categories, {depth: null});
	return (
    <div className={style.wrapper}>
    {
      mainArticle && (
      <div className={style['main-article']}>
      {mainArticle.attributes.title}
      </div>
    )}
    {
      articles.map(article => (
        <h2 key={article.title}>{article.attributes.title}</h2>
      ))
    }
    </div>
	);
}

export async function getStaticProps(context) {
  // read articles
  let result = await fetch(`${urls.backend_url}/api/articles?pagination[page]=1&pagination[pageSize]=10`);
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
    const articlesOfCategoryResult = await fetch(`${urls.backend_url}/api/articles?pagination[page]=1&pagination[pageSize]=2&filters[category]=${categories[i].id}`);
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
