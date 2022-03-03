import React from 'react'
import Transition from '../../components/Transition';
import WorkPages from "../../components/WorkPages"

export async function getStaticPaths() {
    const data = require("../../lib/worksInfo.json");
    // Get the paths we want to pre-render based on posts
  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
    const FindOne = (data) => {
        return data.slug === params.slug;
    }
    const data = require("../../lib/worksInfo.json");
    const slugName = data.filter(FindOne);

  // Pass post data to the page via props
  return { props: { slugName } };
}


const RenderWork = ({ slugName }) => {
    const data = slugName[0];
    return (
      <Transition>
        <WorkPages
          title={data.title}
          desc={data.desc}
          image={data.image}
          stackList={data.stackList}
          id={data.id}
          slug={data.slug}
          codeLink={data.codeLink}
          liveLink={data.liveLink}
          explain={data.explain}
          motivation={data.motivation}
          liveStatus={data.liveStatus}
        />
      </Transition>
    );
};

export default RenderWork;