<template>
  <template v-for="card in cards" :key="card.code">
    <!-- cards -->
    <div
      class="mx-4 my-3 flex flex-1 flex-col flex-wrap justify-evenly rounded-2xl bg-slate-500/20 p-4 text-center align-middle shadow-md shadow-blue-400/20 backdrop-blur-md backdrop-filter transition duration-150 ease-in-out hover:scale-105 hover:bg-slate-400/20 hover:backdrop-blur-lg object-cover"
    >
      <img
        class="mx-auto aspect-square h-2/5"
        src="../assets/logo.png"
        alt="No Image Found"
      />

      <pre class="inline text-xl font-semibold text-cyan-400">{{
        card.code
      }}</pre>

      <div class="text-2xl font-semibold text-slate-50">
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
        {
          title: "sub 4",
          code: "304B",
        },
        {
          title: "sub 5",
          code: "351C",
        },
        {
          title: "sub 6",
          code: "601C",
        },
      ],
    };
  },
};
</script>

