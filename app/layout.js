import './globals.css';
import Analytics from './components/Analytics';

export const metadata = {
  title: 'MyCompany | Web Development & Digital Marketing',
  description: 'Premium websites, ads, automation, and AI growth for brands in Pakistan and worldwide.'
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{GA_ID ? (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');`,
            }}
          />
        </>
      ) : null}</head>
      <body>
        {GA_ID && <Analytics gaId={GA_ID} />}
        {children}
      </body>
    </html>
  );
}
