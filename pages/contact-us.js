import React, {Fragment} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Form from '../components/form';
import Contacts from '../components/contacts';

export default function ContactUs(props) {
	return (
		<Fragment>
      <h1>اتصل بنا</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <p>
          موقع كشف الحقيقة يرحب بأي استفسار أو سؤال, يمكنكم دوما مراسلتنا من خلال النموذج, أو من خلال البريد الالكتروني ومواقع التواصل الاجتماعي, يمكنك أن تكون صانع للخبر ومراسل في منزلك
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form/>
        </Grid>
        <div>
          <Contacts/>
        </div>
      </Grid>
		</Fragment>
	);
}
