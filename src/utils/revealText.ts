import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Animation des Quotes via GSAP

function h2Reveal() {
  const split = new SplitText('.anim-h2', {
    type: 'words',
    wordsClass: 'words',
  });

  gsap.from(split.words, {
    duration: 1,
    opacity: 0.15,
    stagger: 0.25,
    scrollTrigger: {
      trigger: split.words,
      start: 'top 60%',
      end: 'top 40%',
      scrub: 2,
      markers: {
        startColor: 'purple',
        endColor: 'purple',
        fontSize: '0rem',
      },
    },
  });
}
