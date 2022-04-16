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
      class="custom-top absolute h-screen w-screen object-cover"
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
    <div class="flex w-screen flex-col items-center justify-evenly">
      <div class="flex flex-col md:flex-row justify-evenly align-middle w-full">
        <button
          class="button button-success-focus"
          @click="activeTab = 'Form'"
          tabindex="1"
        >
          Signup
        </button>
        <button
          class="button button-success-focus"
          @click="activeTab = 'LoginForm'"
          tabindex="2"
        >
          Login
        </button>
      </div>
      <div class="lg:2/5 my-10 w-4/5 flex-1 md:w-3/5">
        <component :is="activeTab"></component>
      </div>
    </div>
  </div>
</template>

<script>
import SubjectCard from "./components/SubjectCard.vue";
import NavBar from "./components/NavBar.vue";
import Form from "./components/SignUpForm.vue";
import LoginForm from "./components/LoginForm.vue";

export default {
  // name:"App",
  components: {
    SubjectCard,
    NavBar,
    Form,
    LoginForm,
  },
  data() {
    return {
      activeTab: "",
    };
  },
};
</script>

<style scoped>
.custom-top {
  top: 610px;
}
</style>
