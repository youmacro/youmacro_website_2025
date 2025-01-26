import Link from 'next/link';
import React from 'react';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from '../templates/Footer';
import { ShareButtons } from '../templates/Share'

import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { Section } from '../layout/Section';
import { Banner } from '../templates/Banner';
import { Hero } from '../templates/Hero';



   export default function About() {
     return (
       <div>
         <Meta title={AppConfig.title} description={AppConfig.description} image={AppConfig.image}/>

        <Section yPadding="py-5">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/*<li>
          <Link href="https://youmacro.com">
            GitHub
          </Link>
        </li>
        */}
        <li>
          <Link target="_blank" href="https://apps.microsoft.com/detail/9NLWCWNH9WHL?rtc=1&hl=en-us&gl=US">Microsoft Store</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

        <Section yPadding="pt-00 pb-5">
            <h1 align="center"><b>Help us grow and improve YouMacro</b></h1>
        </Section>

        <Section yPadding="pt-5 pb-5">
            <h1 align="center"> <b>Tag videos or comments with,   #youmacro_video_downloader</b> </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ul style={{ textAlign: 'left' }}>
                  <li>(1) We will make sure tagged videos download successfully.</li>
                  <li>(2) We will make sure similar videos download successfully.</li>
                  <li>(3) We will add these tagged videos to a test suite.</li>
                </ul>
            </div>
        </Section>

        <Section yPadding="pt-5 pb-10">
            <h1 align="center"> <b>Share your experiences on your socials</b> </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ul style={{ textAlign: 'left' }}>
                  <li>(1) We will find it, read it and give it a thumbs up.</li>
                  <li>(2) We will use these experiences to improve the app.</li>
                  <li>(3) We made it super easy to post by pre-filling fields.</li>
                  <li>(4) <b>Click one of the social buttons below to start. </b></li>
                </ul>
            </div>
        </Section>

        <ShareButtons />





       </div>
     );
   }


