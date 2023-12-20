import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Your go-to AI-powered platform for limitless creative prompts. Explore,
        share, and collaborate on inspiring ideas, fueling your storytelling
        journey. Join a vibrant community of creators and unlock endless
        creativity!
      </p>
        
      <Feed />
    </section>
  );
};

export default Home;
