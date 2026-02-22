import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Índice Glucémico y Diabetes – Cambia tu vida hoy",
  description: "Descubre cómo el índice glucémico puede transformar tu salud y prevenir la diabetes. Guía completa con estrategias probadas y bonos especiales.",
  keywords: "índice glucémico, diabetes, nutrición, salud, dieta, glucosa",
};

import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1375264397705552');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1375264397705552&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
      </body>
    </html>
  );
}
