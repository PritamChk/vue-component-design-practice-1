<template>
  <div class="relative">
    <img
      class="absolute top-0 h-screen w-screen object-cover"
      src="./assets/wallpaper_1.jpg"
      alt="No Image Found"
    />
  </div>
  <div>
    <img
      class="absolute custom-top h-screen w-screen object-cover"
      src="./assets/wallpaper_2.jpg"
      alt="No Image Found"
    />
  </div>
  <div
    class="relative flex flex-col justify-center align-middle scrollbar-hide"
  >
    <NavBar></NavBar>
    <div
      class="my-24 flex flex-1 flex-col justify-center align-middle lg:flex-row"
    >
      <SubjectCard></SubjectCard>
    </div>
    <div class="flex flex-col items-center justify-evenly w-screen">
      <div class="my-10 flex-1 w-4/5 md:w-3/5 lg:2/5">
        <Form></Form>
      </div>
      
    </div>
  </div>
</template>

<script>
import SubjectCard from "./components/SubjectCard.vue";
import NavBar from "./components/NavBar.vue";
import Form from "./components/SignUpForm.vue";

export default {
  // name:"App",
  components: {
    SubjectCard,
    NavBar,
    Form,
  },
};
</script>

<style scoped>
.custom-top{
  top:610px
}
</style>
