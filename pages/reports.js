import React from 'react';
import Report from '../components/report';
import urls from '../public/assets/data/urls.json';
import style from '../styles/reports.module.scss';

export default function Reports({ reports }) {
	return (
    <div className={style.wrapper}>
      <section className={style['content-section']}>
        { reports.map(report => <Report key={report.slug} content={report} />) }
      </section>
    </div>
	);
}

export async function getStaticProps(context) {
  // read reports
  let result = await fetch(`${urls.backend_url}/api/reports?pagination[page]=1&pagination[pageSize]=12&populate[0]=cover&populate[1]=content`);
  const reportsResult = await result.json();
  const reports = reportsResult.data;

  return {
    props: {
      reports
    }
  }
}
