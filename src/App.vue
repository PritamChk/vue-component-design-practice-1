<template>
  <div
    class="relative flex flex-col justify-center align-middle scrollbar-hide"
  >
    <img
      class="absolute top-0 h-screen w-screen object-cover"
      src="./assets/wallpaper_2.jpg"
      alt="No Image Found"
    />
    <NavBar></NavBar>
    <div
      class="my-24 flex flex-1 flex-col justify-center align-middle lg:flex-row"
    >
      <SubjectCard></SubjectCard>
    </div>
    <div class="relative">
      <img
        class="absolute top-0 -z-20 h-screen w-screen object-cover"
        src="./assets/wallpaper_1.jpg"
        alt="No Image Found"
      />
      <div
        class="mx-auto mt-10 h-4/5 w-3/5 rounded-md p-4 shadow-sm shadow-stone-50 backdrop-blur-lg backdrop-filter"
      >
        <SignUpForm></SignUpForm>
      </div>
    </div>
    <Form></Form>
  </div>
</template>

<script>
import SubjectCard from "./components/SubjectCard.vue";
import SignUpForm from "./components/SignUpForm.vue";
import SignUpForm1 from "./components/SignUpForm.vue";
import NavBar from "./components/NavBar.vue";
import Form from "./components/Form.vue";

export default {
  // name:"App",
  components: {
    SubjectCard,
    SignUpForm,
    SignUpForm1,
    NavBar,
    Form
  },
};
</script>

<style scoped></style>
