import React from 'react';
import { Router } from 'next/router'
import ReportPage from '../components/report-page';
import Category from '../components/category';
import urls from '../public/assets/data/urls.json';
import style from '../styles/reports.module.scss';

export default function ReportPage({ reports }) {
	return (
    <div className={style.wrapper}>
      <section className={style['report_section']}>
      <ReportPage key={report.slug} content={report} />
      </section>
      <section className={style['sidebar_section']}>
      { categories.map(category=><Category key={category.name} content={category} />) }
      </section>
    </div>
	);
}

export async function getStaticPaths(context) {
  let result = await fetch(`${urls.backend_url}/api/reports?fields[0]=slug`);
  const reportPaths = await result.json();
  return { 
    paths: reportPaths.data.map(item => ({params: {slug: item.attributes.slug}})),
    fallback: 'blocking'
  }
} 

export async function getStaticProps(context) {
  // read reports
  let result = await fetch(`${urls.backend_url}/api/reports?filters[slug]=${context.params.slug}&populate[0]=cover&populate[1]=content`);
  const reportsResult = await result.json();
  const report = reportsResult.data[0];

  return {
    props: {
		reports
    }
  }
}
