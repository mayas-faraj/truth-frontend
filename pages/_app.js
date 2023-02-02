import Head from 'next/head';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

import Header from '../components/header';
import Footer from '../components/footer';
import "../styles/global.scss";

export default function App({Component, pageProps}) {
  const footerProps={
    aboutTitle: "موقع الحقيقة",
    aboutContent: "موقع سوري مهمته رصد الأخبار الزائفة والإضاءة على على الحقيقة بعين سورية",
    linksTitle: "روابط مهمة",
    links: [
      { title: "وزارة الاعلام السورية", href: "http://moi.gov.sy", img_src: "/assets/imgs/logos/moi-logo.png" },
      { title: "موقع الاعلام الالكتروني", href: "http://emediatc.com", img_src: "/assets/imgs/logos/emc-logo.png" },
      { title: "المغترب السوري", href: "http://syria-in.com", img_src: "/assets/imgs/logos/syriain-logo.png" },
      { title: "بتوقيت دمشق", href: "http://damas-times.com", img_src: "/assets/imgs/logos/damastimes-logo.png" },
      { title: "الهيئة العامة للإذاعة والتلفزيون", href: "https://ortas.online", img_src: "/assets/imgs/logos/ortas-logo.png" },
      { title: "وكالة سانا", href: "https://sana.sy", img_src: "/assets/imgs/logos/sana-logo.png" },
    ],
    socialTitle: "تواصل معنا",
    socials: [
      { title: "صفحة فيسبوك", href: "http://facebook.com/", icon: FacebookIcon },
      { title: "حساب تويتر", href: "http://twitter.com/", icon: TwitterIcon },
      { title: "صفحة بنترست", href: "http://pinterist.com/", icon: PinterestIcon },
      { title: "صفحتنا على اليوتيوب", href: "http://youtube.com/", icon: YouTubeIcon }
    ]
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
			<Header/>
      <div className="container">
        <Component {...pageProps}/>
      </div>
      <Footer {...footerProps} />
    </>
  );
}
