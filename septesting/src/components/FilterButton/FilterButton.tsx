import { FC } from 'react';
import withGreeting from '../../hoc/withGreeting';
import { greet, GreetingProps } from '../../services/greeting';
import styles from './Styles.module.scss';

interface FilterButtonProps extends GreetingProps {
  componentName?: string,
  onClick: () => void
}

const defaultProps = {
  componentName: 'FilterButton',
};

const FilterButton : FC<FilterButtonProps> = ({ onClick, greeting, componentName }) => {
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

FilterButton.defaultProps = defaultProps;

export default withGreeting(FilterButton);
