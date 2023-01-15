import useCounter from '../hooks/use-counter';

interface CounterPageProps {
  initialCount: number;
}

function CounterPage({ initialCount }: CounterPageProps) {
  const { count, handleClick } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default CounterPage;
