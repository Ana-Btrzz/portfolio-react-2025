import React from "react";
import { File } from "lucide-react";
import Profile from "/src/img/profile.jpeg";

const Main = () => {
  return (
    <section id="home" className="scroll-m-20 bg-purple-50 py-16">
      <div className="container mx-auto px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center lg:text-left space-y-6">
          <h1 className="text-xl sm:text-4xl lg:text-x5l font-bold text-purple-900 leading-tight">
            Desenvolvedora Front-End e UX/UI Designer.
          </h1>
          <p className="text-violet-700 text-sm lg:text-lg">
            Sobre Mim Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cum vel obcaecati accusamus provident deleniti numquam beatae quis
            perspiciatis!
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-purple-600 text-white px-3 py-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-purple-700 text-base font-medium"
          >
            <File className="w-5 h-5 mr-2" />
            Veja meu Currículo
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src={Profile}
            alt="profile"
            className="w-80 lg:w-[429px] rounded-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
