<template>
  <form
    class="container mx-auto h-4/5 w-3/4 text-sm md:text-lg"
    id="SignUpForm"
  >
    <!-- name group -->
    <div class="flex flex-col justify-center">
      <div class="mx-1 my-1 flex-1 px-2 py-2 text-left text-lg font-medium">
        Name:
      </div>
      <div class="flex flex-wrap justify-around md:space-x-3 md:align-top">
        <!-- fname -->
        <div class="my-2 mx-2 flex-1 p-2">
          <label for="first_name"> First</label>
          <input type="text" name="first_name" id="" placeholder="Selena" />
        </div>
        <!-- lname -->
        <div class="my-2 mx-2 flex-1 p-2">
          <label for="first_name"> Last </label>
          <input type="text" name="first_name" id="" placeholder="Gomez" />
        </div>
      </div>
    </div>
    <!-- end of name group -->
  </form>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      name: {
        first_name: "",
        last_name: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
