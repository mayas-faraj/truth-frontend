import React from 'react';
import MainArticle from '../components/main-article';
import Article from '../components/article';
import Category from '../components/category';
import Type from '../components/type';
import urls from '../public/assets/data/urls.json';
import style from '../styles/home.module.scss';

export default function Home({ mainArticle, articles, categories, reports }) {
	return (
    <div className={style.wrapper}>
      <section className={style['main-section']}>
      { mainArticle && <MainArticle content={mainArticle} /> }
      </section>
      <section className={style['content-section']}>
        <section className={style['news-section']}>
          { articles.map(article => <Article key={article.attributes.slug} content={article} />) }
        </section>
        <section className={style['sidebar-section']}>
          <div className={style.categories}>
          { categories.map(category=><Category key={category.attributes.name} content={category} />) }
          </div>
          <div className={style.reports}>
          { <Type content={{reports: reports, attributes: {name:'تقارير قانونية'}}} /> }
          </div>
        </section>
      </section>
    </div>
	);
}

export async function getServerSideProps(context) {
  // read articles
  let result = await fetch(`${urls.backend_url}/api/articles?pagination[page]=1&pagination[pageSize]=10&populate[0]=truthCover&populate[1]=falseCover&sort[0]=createdAt%3Adesc`);
  const articlesResult = await result.json();
  const articles = articlesResult.data;
  let mainArticle = null;

  for (let i = 0; i< articles.length; i++) 
    if(articles[i].attributes.isFeatured) {
      const splicedArray = articles.splice(i, 1);
      mainArticle = splicedArray[0];
      break;
    }
  
  // read reports
  result = await fetch(`${urls.backend_url}/api/reports?pagination[page]=1&pagination[pageSize]=8&populate[0]=cover&populate[1]=content&sort[0]=createdAt%3Adesc`);
  const reportsResult = await result.json();
  const reports = reportsResult.data;

  // read categories
  result = await fetch(`${urls.backend_url}/api/categories?pagination[page]=1&pagination[pageSize]=5`);
  const categoriesResult = await result.json();
  const categories = categoriesResult.data;

  for (let i = 0; i< categories.length; i++) {
    const articlesOfCategoryResult = await fetch(`${urls.backend_url}/api/articles?pagination[page]=1&pagination[pageSize]=4&populate[0]=truthCover&filters[category]=${categories[i].id}&sort[0]=createdAt%3Adesc`);
    const articlesOfCategory = await articlesOfCategoryResult.json();
    const articlesOfCategoryData = articlesOfCategory.data;
    categories[i].articles=articlesOfCategoryData;
    }

  return {
    props: {
      mainArticle,
      articles,
      categories,
      reports
    }
  }
}
