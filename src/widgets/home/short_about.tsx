import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import HomeCategoryLayout from "./home_category_layout";

gsap.registerPlugin(ScrollTrigger);

export default function ShortAbout(): JSX.Element {
   const ref_category_short_about: React.RefObject<HTMLElement> =
      useRef<HTMLElement>(null);
   const ref_paragraph: React.RefObject<HTMLParagraphElement> =
      useRef<HTMLParagraphElement>(null);
   const ref_thumbnail: React.RefObject<HTMLImageElement> =
      useRef<HTMLImageElement>(null);
   const ref_thumbnail_box_shadow: React.RefObject<HTMLDivElement> =
      useRef<HTMLDivElement>(null);

   React.useEffect(() => {
      animate_paragraph(ref_category_short_about, ref_paragraph);
      animate_thumbnail(
         ref_category_short_about,
         ref_thumbnail,
         ref_thumbnail_box_shadow
      );
   }, []);

   return (
      <section
         className="category category_short_about"
         ref={ref_category_short_about}
      >
         <HomeCategoryLayout inner="in_cont_short_about">
            <section className="short_about">
               <div className="short_about_paragraph">
                  <p ref={ref_paragraph}>
                     Welcome to Il Sapore dell'Italia, where every meal is a
                     celebration of authentic Italian flavors crafted with
                     passion. Join us as we take you on a culinary journey
                     filled with tradition, inviting you to savor the essence of
                     Italy in each dish.
                  </p>
               </div>
            </section>
         </HomeCategoryLayout>
         <div className="short_about_thumbnail mt-m-em-xs w-[100vw] flex relative justify-center items-center">
            <div className="short_about_thumbnail_centered w-[100%] flex relative justify-center items-center">
               <div
                  className="short_about_thumbnail_box_shadow pointer-events-none absolute w-[80%] z-[5]"
                  ref={ref_thumbnail_box_shadow}
               ></div>
               <img
                  src="./static/assets/images/italian_cuisine_bg_3.jpg"
                  alt="short about thumbnail"
                  ref={ref_thumbnail}
               />
            </div>
         </div>
      </section>
   );
}

function animate_paragraph(
   ref_category_short_about: React.RefObject<HTMLElement>,
   ref_paragraph: React.RefObject<HTMLParagraphElement>
) {
   if (!ref_paragraph.current || !ref_category_short_about.current) return;

   const split_paragraph: Splitting.Result[] = Splitting({
      target: ref_paragraph.current,
      by: "chars",
   });

   const paragraph_chars: HTMLElement[] | undefined = split_paragraph[0]?.chars;
   if (!paragraph_chars) return;

   const tl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
         trigger: ref_category_short_about.current,
         start: "top-=20% top",
         end: "+=30%",
         scrub: 0.25,
         markers: true,
      },
   });

   tl.to(
      paragraph_chars,
      {
         color: "#f0e8e3",
         stagger: 0.2,
      },
      0.1
   );
}

function animate_thumbnail(
   ref_category_short_about: React.RefObject<HTMLElement>,
   ref_thumbnail: React.RefObject<HTMLImageElement>,
   ref_thumbnail_box_shadow: React.RefObject<HTMLDivElement>
) {
   if (
      !ref_category_short_about.current ||
      !ref_thumbnail.current ||
      !ref_thumbnail_box_shadow.current
   ) {
      return;
   }

   const tl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
         trigger: ref_category_short_about.current,
         start: "top-=10% top",
         end: "+=35%",
         scrub: true,
         toggleActions: "play none none reverse",
      },
   });

   tl.to(ref_thumbnail.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
   }).to(
      ref_thumbnail_box_shadow.current,
      {
         width: "100%",
         ease: "power1.inOut",
      },
      "<"
   );

   tl.add(() => {
      const nested_tl: GSAPTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: ref_category_short_about.current,
            start: "top+=50% top",
            end: "+=57%",
            scrub: true,
            toggleActions: "play none none reverse",
         },
      });

      nested_tl.to(ref_thumbnail.current, {
         clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 80%)",
         y: -50,
         duration: 2,
         ease: "power1.inOut",
      });
   });
}
