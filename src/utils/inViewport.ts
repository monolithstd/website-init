/* eslint-disable no-console */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  changeNavColortoBlackonLight,
  changeNavColortoBlackonOrange,
  changeNavColortoWhite,
} from './changeNavColor';

gsap.registerPlugin(ScrollTrigger);
//FONCTION

// Animation des Quotes via GSAP

export function isInViewport() {
  const nav = document.querySelector<HTMLElement>('.nav');
  const section = document.querySelector<HTMLElement>('.section.avis');
  if (nav === null && section !== null) {
    return;
  }
  const sectionHeight = section?.offsetHeight;
  const navHeight = nav.offsetHeight;
  const sectionToTravel = sectionHeight - navHeight;
  console.log(sectionHeight);
  console.log(navHeight);
  console.log(sectionToTravel);
  console.log(section);

  ScrollTrigger.create({
    trigger: '.section.avis',
    onEnter: () => changeNavColortoBlackonOrange(),
    onLeave: () => changeNavColortoWhite(),
    onEnterBack: () => changeNavColortoBlackonOrange(),
    onLeaveBack: () => changeNavColortoWhite(),
    scrub: true,
    start: `top 0%`,
    end: `top -100%`,
    /**markers: {
      startColor: 'green',
      endColor: 'blue',
    },*/
  });
}
