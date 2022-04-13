<template>
  <div class="absolute top-0 h-full w-full bg-gray-400/80  backdrop-filter backdrop-blur-2xl">
    <!-- <div
      class=""
    ></div> -->
    <ul
      class="relative flex flex-col justify-evenly text-lg font-semibold text-white opacity-100 md:flex-row"
    >
      <li
        class="m-1 rounded-sm p-2 text-blue-400 hover:bg-slate-500 hover:text-fuchsia-200"
      >
        Link 1
      </li>
      <li
        class="m-1 rounded-sm p-2 text-blue-400 hover:bg-slate-500 hover:text-fuchsia-200"
      >
        Link 2
      </li>
      <li
        class="m-1 rounded-sm p-2 text-blue-400 hover:bg-slate-500 hover:text-fuchsia-200"
      >
        Link 3
      </li>
      <li
        class="m-1 rounded-sm p-2 text-blue-400 hover:bg-slate-500 hover:text-fuchsia-200"
      >
        Link 4
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
