<template>
  <nav
    class="sticky top-0 z-20 bg-gradient-to-t from-slate-600/60 to-slate-700/80 shadow-md backdrop-blur-sm backdrop-filter"
  >
    <ul class="flex flex-wrap flex-col md:flex-row items-center justify-evenly p-2 align-middle">
      <li
        class="hover: rounded px-5 py-1 backdrop-blur-xl transition-all duration-100 ease-in-out hover:bg-slate-50/50 hover:drop-shadow-xl hover:backdrop-filter"
      >
        <a href="#">Dashboard</a>
      </li>
      <li
        class="hover: rounded px-5 py-1 backdrop-blur-xl transition-all duration-100 ease-in-out hover:bg-slate-50/50 hover:drop-shadow-xl hover:backdrop-filter"
      >
        <a href="#">Profile</a>
      </li>
      <li
        class="hover: rounded px-5 py-1 backdrop-blur-xl transition-all duration-100 ease-in-out hover:bg-slate-50/50 hover:drop-shadow-xl hover:backdrop-filter"
      >
        <a href="#">Sign Up</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
