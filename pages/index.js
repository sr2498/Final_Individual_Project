import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Script from 'next/script';  // <-- Importing Script from next/script

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link 
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" 
          rel="stylesheet" 
          type="text/css" 
        />
      </Head>

      <Script strategy="beforeInteractive" src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
      <Script strategy="beforeInteractive" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></Script>
      <Script strategy="beforeInteractive">
      {`
        (function($) {
          window.fnames = new Array(); 
          window.ftypes = new Array();
          fnames[0]='EMAIL';
          ftypes[0]='email';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      `}
      </Script>

      <section className={utilStyles.headingMd}>
        <h3>(Hi, I'm a Web Developer and Quality Analyst)</h3>
        <p>
          A creative web developer who brings ideas to life through elegant and
          user-friendly website.
        </p>
        <p>
          A dedicated web quality analyst committed to delivering superior
          software quality through meticulous testing, rigorous standards, and
          attention to detail.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About Me</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      {/* Mailchimp Subscription Form */}
      <div id="mc_embed_signup">
        <form 
          action="https://njit.us21.list-manage.com/subscribe/post?u=0d925a2c6f3046f0adcf4d599&amp;id=9cd66f0512&amp;f_id=003f62e1f0" 
          method="post" 
          id="mc-embedded-subscribe-form" 
          name="mc-embedded-subscribe-form" 
          className="validate" 
          target="_blank"
        >
          <h2>Join our Newsletter</h2>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Enter your Email Address to Subscribe <span className="asterisk">*</span></label>
            <input 
              type="email" 
              name="EMAIL" 
              className="required email" 
              id="mce-EMAIL" 
              required 
              placeholder="your@email.com" 
            />
          </div>
          <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
            <input 
              type="text" 
              name="b_0d925a2c6f3046f0adcf4d599_9cd66f0512" 
              tabIndex="-1" 
            />
          </div>
          <input 
            type="submit" 
            name="subscribe" 
            id="mc-embedded-subscribe" 
            className="button" 
            value="Subscribe Now" 
          />
        </form>
      </div>
    </Layout>
  );
}
