import Image from "next/image";
import Header from "./components/Header";
import "./style.css";
import "./style.css";
import HomeComponents from "./HomePage/HomeComponents";
import HomeCard from "./HomePage/HomeCard";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <main className=" relative">
      <Head>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Head>

      <div className={` `}>
        <Header />

        <div
          className={`lg:pt-[400px] lge:pt-[400px] md:pt-[400px] mdsm:pt-[300px]  sm:pt-[250px] sm:px-4 container mx-auto py-6`}
        >
          <div
            className={` grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 sm:px-2 gap-5`}
          >
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
