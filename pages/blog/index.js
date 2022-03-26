import BlogCard from "../../components/BlogCard";
import Transition from "../../components/Transition";
import HeadInfo from "../../components/HeadInfo";

const blog = () => {
  return (
    <Transition>
      <HeadInfo title={"Nameson Gaudel - Blog"}
        image={"/card.jpg"}
        desc={"Fullstack Developer based in Nepal with a passion for building digital services/stuff he want."}
        url={`/blog`}/>
      
      <BlogCard />
    </Transition>
  );
};

export default blog;
