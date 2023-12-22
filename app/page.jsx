"use client";
import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* <h1 className="secondary_head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="gptgreen text-center">AI Powered Prompts</span>
      </h1> */}
      <p className="secondary_head_text gptgreen text-center">
        <span className="gptgreen text-center">
          Your go-to AI-powered platform for limitless creative prompts.
        </span>
      </p>
      <Feed />
    </section>
  );
};

export default Home;
