<template>
  <template v-for="card in cards" :key="card.code">
    <!-- cards -->
    <div
      class="mx-4 my-3 flex flex-1 flex-col justify-evenly rounded-2xl bg-slate-500/20 p-4 text-center align-middle shadow-md shadow-slate-400/40 transition duration-200 ease-in-out hover:scale-105"
    >
      <img
        class="mx-auto aspect-square h-1/3"
        src="../assets/logo.png"
        alt="No Image Found"
      />

      <pre class="inline text-xl font-semibold text-cyan-400">{{
        card.code
      }}</pre>

      <div class="text-2xl font-semibold text-fuchsia-600">
        {{ card.title }}
      </div>
    </div>
    <!-- end of cards -->
  </template>
</template>

<script>
export default {
  name: "SubjectCard",
  data() {
    return {
      cards: [
        {
          title: "sub 1",
          code: "308A",
        },
        {
          title: "sub 2",
          code: "302B",
        },
        {
          title: "sub 3",
          code: "301C",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
