import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row mt-15 bg-bg gap-6 md:gap-50 py-12 items-center md:items-start">
      <div className="shrink-0 order-first flex justify-center md:justify-start">
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: "50%",
            overflow: "hidden",
          }}
          className="md:w-[320px] md:h-[320px]"
        >
          <Image
            src="/images/profilepic.jpeg"
            alt="Medhani Premathilaka"
            width={320}
            height={320}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex-1 text-center md:text-left px-4 md:px-0">
        <h2 className="text-4xl font-bold text-letters">
          Medhani Premathilaka
        </h2>
        <p
          className="mt-2 text-xl text-letters1 font-bold"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Computer Science Undergraduate, University of Ruhuna.
        </p>
        <p className="mt-4 max-w-xl  mx-auto md:mx-0 text-letters1 ">
          I’m passionate about DevOps and cloud technologies. I enjoy learning
          fast and applying new concepts through real-world projects. I’m
          actively building hands-on experience with deployment, automation, and
          system workflows. I work well in team environments and value
          collaboration in problem solving. Clear communication is one of my
          strengths, especially when working with diverse teams. I’m eager to
          grow as a developer while moving steadily towards a DevOps-focused
          career.
        </p>
      </div>
    </section>
  );
}

export default Hero;
