import "./App.css";
import darkLogo from "../assets/images/logo-dark.svg";
import lightLogo from "../assets/images/logo-light.svg";
import hero from "../assets/images/image-hero.webp";
import bg1 from "../assets/images/bg-pattern-1.svg";
import bg2 from "../assets/images/bg-pattern-2.svg";
import bg3 from "../assets/images/bg-pattern-3.svg";
import founder from "../assets/images/image-founder.webp";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import facebook from "../assets/images/icon-facebook.svg";
import one from "../assets/images/one.svg";
import two from "../assets/images/two.svg";
import three from "../assets/images/three.svg";

function App() {
  return (
    <>
      <header className="h-[760px] bg-header-mobile md:bg-header-tablet lg:bg-header-desktop bg-cover bg-no-repeat relative">
        <nav className="flex items-center justify-between p-8 text-white">
          <img src={lightLogo} alt="" />
          <div>
            <p className="hover:text-[#44ffa1] cursor-pointer">
              Apply for access
            </p>
            <div className="h-[1px] w-32 bg-[#44ffa1] absolute"></div>
          </div>
        </nav>

        <section className="relative">
          <img
            src={bg1}
            alt=""
            className="absolute md:right-[53rem] lg:left-0 hidden md:block"
          />
          <div className="mt-20 relative">
            <h1 className="font-semibold text-5xl md:text-7xl text-white md:w-[32rem] mx-auto">
              Data tailored to your needs
              <div className="h-[1px] w-40 md:w-56 bg-[#44ffa1] absolute top-12 md:top-16 right-56 md:right-96 lg:right-[50rem]"></div>
            </h1>
            <button className="bg-[#44ffa1] p-4 font-abel font-bold mt-10 hover:bg-transparent hover:text-[#44ffa1] hover:border-[#44ffa1] hover:border-2">
              Learn More
            </button>
          </div>
          <img src={bg2} alt="" className="absolute right-0 hidden md:block" />
        </section>

        <img
          src={hero}
          alt=""
          className="md:w-[65rem] mx-auto relative top-52"
        />
      </header>

      <section
        className="md:h-[1000px] lg:h-[960px] p-64 md:p-96 bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop 
      bg-no-repeat bg-cover relative -z-10 top-[-5.5rem]"
      >
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="w-96 flex flex-col items-center">
            <img src={one} alt="" className="w-16" />
            <h2 className="font-semibold text-3xl text-[#24053e] my-5">
              Actionable insights
            </h2>
            <p className="text-[#24053e] font-abel">
              Optimize your products, improve customer satisfaction and stay
              ahead of the competition with our product data analytics.
            </p>
          </div>
          <div className="w-96 flex flex-col items-center">
            <img src={two} alt="" className="w-16" />
            <h2 className="font-semibold text-3xl text-[#24053e] my-5">
              Data-driven decisions
            </h2>
            <p className="text-[#24053e] font-abel">
              Make data-driven decisions with our product data analytics. Our
              AI-generated reports help you unlock insights hidden in your
              product data.
            </p>
          </div>
          <div className="w-96 flex flex-col items-center">
            <img src={three} alt="" className="w-16" />
            <h2 className="font-semibold text-3xl text-[#24053e] my-5">
              Always affordable
            </h2>
            <p className="text-[#24053e] font-abel">
              Always affordable pricing that scales with your business. Get
              top-quality product data analytics services without hidden costs
              or unexpected fees.
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center md:items-start flex-col md:flex-row justify-center my-20">
        <img src={founder} alt="" className=" w-80 md:w-[25rem]" />
        <div className="bg-[#24053e] md:w-[50rem] p-4 flex items-center md:items-start flex-col md:relative top-40 right-32">
          <h3 className="font-semibold text-3xl md:text-6xl text-white my-5">
            Be the first to test
          </h3>
          <p className="text-start w-96 text-white my-8">
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </p>
          <button className="bg-[#44ffa1] p-4 font-abel w-fit md:w-auto font-bold hover:bg-transparent hover:text-[#44ffa1] hover:border-[#44ffa1] hover:border-2">
            Apply for access
          </button>
          <img
            src={bg3}
            alt=""
            className="absolute right-0 top-52 hidden md:block"
          />
        </div>
      </section>

      <footer className="my-20 md:my-40 mx-auto w-fit">
        <div>
          <img src={darkLogo} alt="" />
        </div>
        <div className="flex items-center gap-4 mt-10 justify-center">
          <img src={facebook} alt="" className="w-4" />
          <img src={twitter} alt="" className="w-4" />
          <img src={instagram} alt="" className="w-4" />
        </div>
      </footer>
    </>
  );
}

export default App;
