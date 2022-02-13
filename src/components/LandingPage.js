import Lottie from 'react-lottie';

// cSpell: disable
import animationData from '../animations/landinganimation/data';

const LandingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={'100%'} width={'100%'} />;
};

export default LandingPage;
