import { component$, useStore, useClientEffect$ } from "@builder.io/qwik";

export const Clock = component$(() => {
  const state = useStore({
    seconds: 0,
  });
  useClientEffect$(() => {
    const interval = setInterval(() => {
      state.seconds++;
    }, 1000);
    return () => clearInterval(interval);
  });

  return <div>Seconds: {state.seconds}</div>;
});
