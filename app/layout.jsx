import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";
export const matadata = {
  title: "PromptShare",
  description: "Discover new prompts for better GPT results.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
