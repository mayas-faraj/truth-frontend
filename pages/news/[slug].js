import React from 'react';
import { Router } from 'next/router'
import ArticlePage from '../../components/article-page';
import Category from '../../components/category';
import urls from '../../public/assets/data/urls.json';
import style from '../../styles/slug.module.scss';

export default function Slug({ article, categories }) {
	return (
    <div className={style.wrapper}>
      <section className={style['article_section']}>
      <ArticlePage key={article.slug} content={article} />
      </section>
      <section className={style['sidebar_section']}>
      { categories.map(category=><Category key={category.name} content={category} />) }
      </section>
    </div>
	);
}

export async function getStaticPaths(context) {
  let result = await fetch(`${urls.backend_url}/api/articles?fields[0]=slug`);
  const articlePaths = await result.json();
  return { 
    paths: articlePaths.data.map(item => ({params: {slug: item.attributes.slug}})),
    fallback: 'blocking'
  }
} 

export async function getStaticProps(context) {
  // read articles
  let result = await fetch(`${urls.backend_url}/api/articles?filters[slug]=${context.params.slug}&populate[0]=truthCover&populate[1]=falseCover&populate[2]=content`);
  const articlesResult = await result.json();
  const article = articlesResult.data[0];

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
      article,
      categories
    }
  }
}
