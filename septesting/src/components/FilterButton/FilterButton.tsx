import React, { useContext } from 'react';
import { GreetingContext, greet } from '../../services/greeting';

type FilterButtonProps = {
  componentName?: string,
  onClick: () => void
}

const defaultProps = {
  componentName: 'FilterInput',
};

const FilterButton : React.FC<FilterButtonProps> = ({ onClick, componentName }) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button type="submit" onClick={handleClick}>
      Filter
    </button>
  );
};

FilterButton.defaultProps = defaultProps;

export default FilterButton;
