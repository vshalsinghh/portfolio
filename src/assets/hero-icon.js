import {Tween} from 'react-gsap';

const HeroIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="480" viewBox="0 0 519 543">
  <g id="Group_2" data-name="Group 2" transform="translate(-1107 -282)">
  <Tween
      from={{ scale: 0}}
      stagger={{ from: 'center', amount: 1, grid: [3, 3]}}
      duration={.8}
      ease="elastic.out(2, 0.5)"
    >
    <rect id="Rectangle_5" data-name="Rectangle 5" width="135" height="127" rx="31" transform="translate(1364 374)" fill="#7bf1b7"/>
    <rect id="Rectangle_9" data-name="Rectangle 9" width="135" height="127" rx="31" transform="translate(1364 581)" fill="#7bf1b7"/>
    <rect id="Rectangle_8" data-name="Rectangle 8" width="135" height="127" rx="31" transform="translate(1491 477)" fill="#d0fee7"/>
    <rect id="Rectangle_7" data-name="Rectangle 7" width="135" height="127" rx="31" transform="translate(1236 477)" fill="#fff"/>
    <rect id="Rectangle_14" data-name="Rectangle 14" width="135" height="127" rx="31" transform="translate(1236 698)" fill="#fff"/>
    <path id="Path_34" data-name="Path 34" d="M31,0h73a31,31,0,0,1,31,31V96a31,31,0,0,1-31,31H31A31,31,0,0,1,0,96V31A31,31,0,0,1,31,0Z" transform="translate(1107 585)" fill="#ebebeb"/>
    <path id="Path_5" data-name="Path 5" d="M38,0A38,38,0,1,1,0,38,38,38,0,0,1,38,0Z" transform="translate(1260 614)" fill="#5c49b5"/>
    <path id="Path_3" data-name="Path 3" d="M38,0A38,38,0,1,1,0,38,38,38,0,0,1,38,0Z" transform="translate(1394 503)" fill="#ffd4ed"/>
    <path id="Path_2" data-name="Path 2" d="M38,0A38,38,0,1,1,0,38,38,38,0,0,1,38,0Z" transform="translate(1394 282)" fill="#ffd4ed"/>
    <path id="Path_7" data-name="Path 7" d="M38,0A38,38,0,1,1,0,38,38,38,0,0,1,38,0Z" transform="translate(1260 384)" fill="#5c49b5"/>
  </Tween>
  </g>
</svg>
);

export default HeroIcon;

