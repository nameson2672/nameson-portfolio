import Head from "next/head";

export default function HeadInfo({title,image,desc,url}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={desc} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nameson.com.np/${url}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={image} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://nameson.com.np/${url}`}/>
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content={image}></meta>
      </Head>
    </>
  );
}
