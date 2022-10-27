import { FC } from 'react';
import withGreeting from '../../hoc/withGreeting';
import IGreetingProps from '../../types/IGreetingProps';
import styles from './Styles.module.scss';

interface IFilterButtonProps extends IGreetingProps {
  onClick: () => void
}

const FilterButton : FC<IFilterButtonProps> = ({
  onClick,
  greet,
  componentName = 'FilterButton',
}) => {
  greet?.(componentName);

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
