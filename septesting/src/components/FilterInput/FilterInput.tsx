import React, { useContext } from 'react';
import { FilterButton } from '..';
import { GreetingContext, greet } from '../../services/greeting';

type FilterInputProps = {
  componentName?: string,
  query: string,
  onQueryChange: (query: string) => void,
  onSubmit: () => void
}

const defaultProps = {
  componentName: 'FilterInput',
};

const FilterInput : React.FC<FilterInputProps> = ({
  query,
  onQueryChange,
  onSubmit,
  componentName,
}) => {
  const greeting = useContext(GreetingContext);
  greet(greeting, componentName);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onQueryChange(event.target.value);
  };

  return (
    <form>
      <input type="text" value={query} onChange={handleQueryChange} />
      <FilterButton onClick={onSubmit} />
    </form>
  );
};

FilterInput.defaultProps = defaultProps;

export default FilterInput;
