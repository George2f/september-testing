import { FC } from 'react';
import FilterButton from '../filterButton';
import {
  greet,
  GreetingProps,
} from '../../services/greeting';
import styles from './Styles.module.scss';
import withGreeting from '../../hoc/withGreeting';

interface IFilterInputProps extends GreetingProps {
  componentName?: string,
  query: string,
  onQueryChange: (query: string) => void,
  onSubmit: () => void
}

const FilterInput : FC<IFilterInputProps> = ({
  query,
  onQueryChange,
  onSubmit,
  greeting,
  componentName = 'FilterInput',
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

export default withGreeting(FilterInput);
