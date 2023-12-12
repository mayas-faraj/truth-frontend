import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import * as icons from '@mui/icons-material';
import style from '/styles/about-us.module.scss'

export default function AboutUs(props) {
  if(props.steps)
    for(let i=0; i<props.steps.length; i++)
      props.steps[i].iconComponent=icons[props.steps[i].icon];
  return (
    <div className={style.wrapper}>
      <h1>{props.title}</h1>
      <div className={style.content}>
        <div className={style.description}>
        { props.description }
        </div>
        <div className={style.timeline__wrapper}>
          <Timeline position="alternate">
          {
            props.steps!=null && props.steps.map(step=>(
              <TimelineItem key={step.title}>
                <TimelineContent>
                  <h2>{ step.title }</h2>
                  <p>{ step.description }</p>
                </TimelineContent>
                <TimelineSeparator>
                   <TimelineConnector/>
                   <TimelineDot><step.iconComponent/></TimelineDot>
                   <TimelineConnector/> 
                </TimelineSeparator>
                <TimelineOppositeContent>
                  <p>{ step.info }</p>
                </TimelineOppositeContent>
              </TimelineItem>
            ))
          }
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: "آلية العمل في كشف الحقائق",
      description: "تعتمد الدول الغربية كأقوى وسائل تبرير مخططاتها معتمدة على القاعدة التي وضعها  جوزيف جوبلز مهندس ماكينة الدعاية الألمانية لمصلحة النازية وأدولف هتلر: «اكذب، اكذب، ثم اكذب حتى يصدقك الناس»،تقوم الدول الغربية بإغراض الشبكة العنكبوتية بالاخبار الكاذبة التي تخدم السياسات والمخططات التي تضعف الشعوب والأمم لسهولة السيطرة عليها.كانت مهمتنا رصد ومتابعة الأخبار المنشرة بشكل كبير لمحالة استنباط الحقائق التي تخفيها ماكينة الاعلام الغربية عن طريق المتابعة والبحث والتدقيق والمراجعة والاعتماد على الخبرات والاستقراء في كشف تزوير الاحداثومن ثم اعداد تقرير كامل ليتم تقديمه للقارئ لبيين الحقيقة المخفية وبالتالي منع الدول الغربية من تعميم الجهل لضمان السيطرة.",
      steps: [
        {title: "الرصد والمتابعة", icon: "Visibility", description: "رصد آلة الأعلام الغربية", info: "فريق بحث علمي"},
        {title: "الدراسة الأولية", icon: "Science", description: "التدقيق والاستقراء للأخبار المشكوك فيها", info: "فريق من الخبراء الاعلاميين"},
        {title: "تصفح المراجع", icon: "LocalLibrary", description: "جمع الاخبار الميدانية المتعلقة مكانيا وزمانيا بالخبر المدروس", info: "فريق خبراء بالتحليل والتدقيق"},
        {title: "اعداد التقرير", icon: "Assignment", description: "جمع المعلومات المستنتجة من المراحل السابقة", info: "فريق اعلامي مختص"},
        {title: "النشر الاعلامي", icon: "EmojiFlags", description: "نشر الحقيقة على موقعنا على شبكة الأنترنت وتوثيق النتائج", info: "فريق اعلامي"},
      ]
    }
  }
}


