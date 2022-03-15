import BlogCard from "../../components/BlogCard";
import Transition from "../../components/Transition";
import Head from "next/head";

const blog = () => {
  return (
    <Transition>
      <Head>
        <title>Nameson Gaudel - Blog</title>
      </Head>
      
      <BlogCard />
    </Transition>
  );
};

export default blog;
