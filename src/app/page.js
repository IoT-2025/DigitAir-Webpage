"use client"
import { Card, DemoButton, FirstSection, ProfileCards, RepositoryButtons } from "./components";
import { contents } from "./costants";
import { cardsStyles } from "./styles/styles";
import Image from "next/image";
import { digitair_logo } from "./assets";

const Home = () => {
  return (
    <div id='about' className="flex flex-col w-full min-h-screen bg-[#14332F] justify center sm pt-10" >
      <section className="z-0 flex flex-col items-center justify-center w-full px-10 md:h-screen sm:px-0">
        <div className="flex flex-col-reverse items-center justify-center w-full h-[500px] 2xl:h-[700px] pb-12 xl:pb-2 lg:flex-row ">
          <Card card={contents.about}/>
          <div className="flex items-center justify-center w-full h-full md:w-1/2">
              <Image src={digitair_logo} alt="logo" className="object-contain w-[500px] h-full logo-shadow" />
          </div>
        </div>
        <DemoButton />
      </section>

      <FirstSection />

      <section 
          id='contacts' 
          className="flex z-0 flex-col md:flex-row items-center justify-center min-h-screen md:min-h-[600px]"
        >
          <div className="flex flex-col justify-start h-full pb-10 w-[50%]">
            <RepositoryButtons />
            <h1 className="mt-16 mb-4 text-4xl font-bold text-center text-secondary">Team</h1>
            <ProfileCards />

          </div>
      </section>


    </div>
  );
}


export default Home