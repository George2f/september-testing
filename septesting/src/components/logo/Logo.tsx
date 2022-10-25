import {
  FC,
  useEffect,
  useState,
} from 'react';
import withGreeting from '../../hoc/withGreeting';
import greet from '../../services/greet';
import IGreetingProps from '../../types/IGreetingProps';
import styles from './Styles.module.scss';

interface ILogoProps extends IGreetingProps {
  componentName?: string,
}

const subtitles = [
  'Say do you remember...',
  'Dancing in September...',
  'Never was a cloudy day...',
  'Ba-de-da...',
  'Do you remember...',
  '21st night of September...',
];

const Logo : FC<ILogoProps> = ({
  componentName = 'Logo',
  greeting,
}) => {
  greet(greeting, componentName);
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    setSubtitle(subtitles[Math.floor(Math.random() * subtitles.length)]);
  }, []);

  const handleClick = () => {
    const newSub = subtitles[Math.floor(Math.random() * subtitles.length)];
    console.log(newSub);
    setSubtitle(newSub);
  };

  return (
    <button
      className={styles.container}
      type="button"
      onClick={handleClick}
    >
      <span className={styles.subtitle}>
        {subtitle}
      </span>
      <p className={styles.title}>
        SEPTESTING
      </p>
    </button>
  );
};

export default withGreeting(Logo);
