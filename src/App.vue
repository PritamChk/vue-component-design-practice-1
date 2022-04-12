<template>
  <div class="flex flex-col justify-center align-middle">
    <div class="container">
      <SignUpForm></SignUpForm>
    </div>
    <div
      class="my-24 flex flex-1 flex-col justify-center align-middle lg:flex-row"
    >
      <SubjectCard></SubjectCard>
    </div>
  </div>
</template>

<script>
import SubjectCard from "./components/SubjectCard.vue";
import SignUpForm from "./components/SignUpForm.vue";
import SignUpForm1 from "./components/SignUpForm.vue";
export default {
  // name:"App",
  components: {
    SubjectCard,
    SignUpForm,
    SignUpForm1,
  },
};
</script>

<style scoped></style>
