import React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Form from '../components/form';
import style from '../styles/contact-us.module.scss';
import logo from '../public/assets/imgs/logo.png';

export default function ContactUs(props) {
	return (
		<div className={style.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <h1>كن شاهدا معنا</h1>
          <p>
          أبلغنا عن خبر كاذب وكن صانع للمحتوى في موقع سيريا فاكت, أرسل لنا المعلومات وسوف يقوم فريقنا بدراستها والتعامل معها بمنتهى المهنية,<br/>
          كما أن موقع سيريا فاكت يرحب بأي استفسار أو سؤال, يمكنكم دوما مراسلتنا من خلال النموذج, أو من خلال البريد الالكتروني ومواقع التواصل الاجتماعي, يمكنك أن تكون صانع للخبر ومراسل في منزلك
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form/>
        </Grid>
      </Grid>
      <figure className={style.logo__container}>
        <img src={logo.src} width={400} className={style.logo}/>
      </figure>
		</div>
	);
}
