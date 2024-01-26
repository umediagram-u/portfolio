import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Usmonjon Hasanov's portfolio`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="title" content={pageTitle && `${pageTitle} - Usmonjon Hasanov's portfolio`}></meta>
      <meta name="description" content="About Usmonjon Hasanov. Highly analytical and detail oriented problem solver with 2+ years of deep learning in Front-End and Back-End web development.
" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;