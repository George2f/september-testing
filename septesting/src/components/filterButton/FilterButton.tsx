import { FC } from 'react';
import withGreeting from '../../hoc/withGreeting';
import greet from '../../services/greet';
import IGreetingProps from '../../types/IGreetingProps';
import styles from './Styles.module.scss';

interface IFilterButtonProps extends IGreetingProps {
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
