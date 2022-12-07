import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MyCmp } from "~/components/mycmp/MyCmp";
import { Clock } from "~/components/mycmp/Clock";

export default component$(() => {
  return (
    <div>
      <MyCmp name="Riki"></MyCmp>
      <Clock></Clock>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
