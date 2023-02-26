import React from 'react';
import ReportPage from '../../components/report-page';
import urls from '../../public/assets/data/urls.json';

export default function Slug({ report, categories }) {
	return (
    <div>
      <ReportPage key={report.attributes.slug} content={report} />
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
      report
    }
  }
}
