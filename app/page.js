import Image from "next/image";
import Header from "./components/Header";
import "./style.css";
import "./font.css";
import HomeComponents from "./HomePage/HomeComponents";
import HomeCard from "./HomePage/HomeCard";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <main className=" relative">
      
      <div className={` `}>
      
        <Header />
        <div className={`pt-[150px] sm:pt-[120px] sm:px-4 container mx-auto py-6`}>
          <div className={` grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 sm:px-2 gap-5`}>
            {HomeComponents?.map((v, i) => {
              return (
                <HomeCard
                  title={v?.title}
                  img={v?.image}
                  tag={v?.tag}
                  link={v?.link}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
