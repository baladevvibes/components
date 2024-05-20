import Image from "next/image";
import Header from "./components/Header";
import "./style.css";
import "./font.css";
import HomeComponents from "./HomePage/HomeComponents";
import HomeCard from "./HomePage/HomeCard";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <main>
      <div className={` `}>
        <Header />

        <div className={`pt-[150px] container mx-auto py-6`}>
          <div className={` grid grid-cols-3 gap-10`}>
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
