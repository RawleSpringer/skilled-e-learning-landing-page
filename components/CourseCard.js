import Image from 'next/image';
import animationIcon from '../public/icon-animation.svg';
import businessIcon from '../public/icon-business.svg';
import cryptoIcon from '../public/icon-crypto.svg';
import designIcon from '../public/icon-design.svg';
import photographyIcon from '../public/icon-photography.svg';

const CourseCard = ({ course }) => {
  let courseIcon;

  if (course.icon === 'animation') {
    courseIcon = animationIcon;
  } else if (course.icon === 'business') {
    courseIcon = businessIcon;
  } else if (course.icon === 'crypto') {
    courseIcon = cryptoIcon;
  } else if (course.icon === 'design') {
    courseIcon = designIcon;
  } else {
    courseIcon = photographyIcon;
  }

  return (
    <article className="h-64 flex flex-col  bg-slate-300 pl-8 mt-12 rounded-md relative">
      <Image
        src={courseIcon}
        alt="course icon"
        width={50}
        height={50}
        className="absolute -top-6 left-10"
      />
      <h3 className="font-bold text-xl mt-12">{course.title}</h3>
      <p className="w-72 mt-4">{course.description}</p>
      <p className="text-orange-500 mt-6">Get Started</p>
    </article>
  );
};

export default CourseCard;
