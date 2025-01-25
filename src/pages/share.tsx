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

        <Section yPadding="pt-00 pb-10">
            <h1 align="center">Help us grow YouMacro by sharing us with your network.</h1>
            <h1 align="center">The more users we have, the more resources we can allocate.</h1>
            <h1 align="center">Just click on one of the buttons below to get started.</h1>
        </Section>

        <ShareButtons />

       </div>
     );
   }


