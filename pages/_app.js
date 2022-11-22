import Head from 'next/head';
import Header from '/components/header';
import Footer from '../components/footer';
import "../styles/global.scss";

export default function App({Component, pageProps}) {
  const footerProps={
    aboutTitle: "موقع الحقيقة",
    aboutContent: "موقع سوري مهمته رصد الأخبار الزائفة والإضاءة على على الحقيقة بعين سورية",
    linksTitle: "روابط مهمة",
    links: [
      { title: "وزارة الاعلام السورية", href: "http://moi.gov.sy", img_src: "/assets/imgs/logos/moi.png" },
      { title: "موقع الاعلام الالكتروني", href: "http://emediatc.com", img_src: "/assets/imgs/logos/emediatc.png" },
      { title: "المغترب السوري", href: "http://syria-in.com", img_src: "/assets/imgs/logos/syira-in.png" },
      { title: "بتوقيت دمشق", href: "http://damas-times.com", img_src: "/assets/imgs/logos/damas-times.png" },
      { title: "الهيئة العامة للإذاعة والتلفزيون", href: "https://ortas.online", img_src: "/assets/imgs/logos/ortas.png" },
      { title: "وكالة سانا", href: "https://sana.sy", img_src: "/assets/imgs/logos/sana.png" },
    ],
    socialTitle: "تواصل معنا",
    socials: [
      { title: "صفحة فيسبوك", href: "http://facebook.com/", icon: "Facebook" },
      { title: "حساب تويتر", href: "http://twitter.com/", icon: "Twitter" },
      { title: "صفحة بنترست", href: "http://pinterist.com/", icon: "Pinterest" },
      { title: "صفحتنا على اليوتيوب", href: "http://youtube.com/", icon: "Youtube" }
    ]
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
			<Header/>
      <Component {...pageProps}/>
      <Footer {...footerProps} />
    </>
  );
}
