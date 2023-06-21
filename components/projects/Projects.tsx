"use client";
import React from "react";
import { H2 } from "../ui/heading";
import Others from "./Others";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
type Props = {};
import { Pagination } from "swiper";
import { P } from "../ui/paragraph";

function Projects({}: Props) {
  const projects = [
    {
      id: "sa",
      image: "/1.jpg",
      name: "Joystick Project",
      role: "community manager",
    },
    {
      id: "sas",
      image: "/2.jpg",
      name: "Bearphabet NFTs",
      role: "Community Moderator",
    },
    {
      id: "sass",
      image: "/3.jpg",
      name: "Fair Protocol",
      role: "Communuity Moderator",
    },

    {
      id: "ssass",
      image: "/4.jpg",
      name: "Naked Panda",
      role: "community manager",
    },
    {
      id: "sdsassq",
      image: "/5.jpg",
      name: "WEN Project",
      role: "Chat Engager",
    },
    {
      id: "ssfassq",
      image: "/5.jpg",
      name: "Gmeta",
      role: "Chat Engager",
    },
    {
      id: "sewsassq",
      image: "/5.jpg",
      name: "XOXO",
      role: "Community Manager",
    },
    {
      id: "sewUsq",
      image: "/5.jpg",
      name: "Kitsune Foxes Squad",
      role: "Collab manager",
    },
  ];

  return (
    <section id="experience" className="my-20">
      <div className="py-10">
        <H2 className=" ">
          <span className="hidden sm:block">Projects</span>
          <span className="block sm:hidden">Pjs</span>
        </H2>
        <P>
          In no particular order, here are some of the projects I&rsquo;ve had
          the privilege to work with:
        </P>
      </div>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"> */}
      <div className="s space-y-[1px]">
        {projects.map((item) => (
          // <div className="bg-red-100 h-[30vh] relative" key={item.id}>
          //   <Image src={item.image} alt="" fill />
          // </div>
          <div
            className="bg-white/75 hover:bg-white transition-all duration-700 px-2 text-black"
            key={item.id}
          >
            <P className="text-black capitalize">{item.role}</P>
            <H2 className="text-2xl hover:cursor-pointer">{item.name}</H2>
            {/* <ImageHover src={item.image} alt="" /> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
