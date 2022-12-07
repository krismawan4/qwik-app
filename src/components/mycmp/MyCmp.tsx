import { component$, useStore } from "@builder.io/qwik";

export const MyCmp = component$((props: { name: string }) => {
  // Declare local state
  const state = useStore({
    count: 0,
  });

  // Returns JSX
  return (
    <>
      <span>Hello, {props.name}</span>
      <div>Times: {state.count}</div>
      <button
        onClick$={() => {
          // This will update the local state and cause a re-render.
          // Reactivity is at Qwik's core!
          state.count++;
        }}
      >
        Increment
      </button>
    </>
  );
});
