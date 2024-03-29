import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import Header from '../components/header';
import Footer from '../components/footer';
import colors from '../styles/colors.module.scss';
import '../styles/globals.scss';

export default function App({Component, pageProps}) {
  const footerProps={
    aboutTitle: "سيريا فاكت",
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
      { title: "صفحة فيسبوك", href: "http://facebook.com/therealimage", icon: FacebookIcon },
      { title: "حساب منصة أكس", href: "http://twitter.com/therealimage", icon: XIcon },
      { title: "صفحتنا على اليوتيوب", href: "http://youtube.com/therealimage", icon: YouTubeIcon }
    ]
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: colors.primaryColor
      },
      secondary: {
        main: colors.secondaryColor
      }
    },
    direction: 'rtl'
  })
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
			<Header/>
      <div className="container">
        <ThemeProvider theme={theme}>
          <Component {...pageProps}/>
        </ThemeProvider>
      </div>
      <Footer {...footerProps} />
    </>
  );
}
