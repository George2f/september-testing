import React from 'react';
import { FilterButton } from '..';
import { withGreeting } from '../../hoc';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import styles from './Styles.module.scss';

interface FilterInputProps extends GreetingProps {
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
  greeting,
  componentName,
}) => {
  greet(greeting, componentName);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onQueryChange(event.target.value);
  };

  return (
    <form className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={query}
        placeholder="Filter by username..."
        onChange={handleQueryChange}
      />
      <FilterButton onClick={onSubmit} />
    </form>
  );
};

FilterInput.defaultProps = defaultProps;

export default withGreeting(FilterInput);
