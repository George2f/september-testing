import { FC } from 'react';
import withGreeting from '../../hoc/withGreeting';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import styles from './Styles.module.scss';

interface IFilterButtonProps extends GreetingProps {
  componentName?: string,
  onClick: () => void
}

const FilterButton : FC<IFilterButtonProps> = ({
  onClick,
  greeting,
  componentName = 'FilterButton',
}) => {
  greet(greeting, componentName);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button className={styles.button} type="submit" onClick={handleClick}>
      Filter
    </button>
  );
};

export default withGreeting(FilterButton);
