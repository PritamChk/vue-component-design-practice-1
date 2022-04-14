<template>
  <div class="relative flex flex-col justify-center align-middle">
    <img 
    class="absolute w-screen h-screen top-0 object-cover"
    src="./assets/wallpaper_1.jpg" alt="No Image Found">
    <NavBar></NavBar>
    <div
      class="my-24 flex flex-1 flex-col justify-center align-middle lg:flex-row"
    >
      <SubjectCard></SubjectCard>
    </div>
    <div
      class="mx-auto mt-10 h-4/5 w-3/5 rounded-md p-4 shadow-md shadow-fuchsia-500"
    >
      <SignUpForm></SignUpForm>
    </div>
  </div>
</template>

<script>
import SubjectCard from "./components/SubjectCard.vue";
import SignUpForm from "./components/SignUpForm.vue";
import SignUpForm1 from "./components/SignUpForm.vue";
import NavBar from "./components/NavBar.vue";
export default {
  // name:"App",
  components: {
    SubjectCard,
    SignUpForm,
    SignUpForm1,
    NavBar,
  },
};
</script>

<style scoped></style>
