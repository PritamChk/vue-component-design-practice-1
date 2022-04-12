<template>
  <form action="javascript:void(0)" 
  class="flex flex-col text-gray-600">
    <div class="grid grid-flow-col grid-cols-2 grid-rows-3 gap-2">
      <h1 class="cols-span-2">Name</h1>
      <div class="col-span-1">
        <label for="fname">First: </label>
        <input class="input-box" type="text" placeholder="Tatha" required />
      </div>
      <div class="col-span-1">
        <label for="fname">Last: </label>
        <input class="input-box" type="text" placeholder="Gata" required />
      </div>
    </div>
    <div>
      <h1>Credentials</h1>
      <div>
        <label for="email">Email</label>
        <input class="input-box" type="email" autocomplete="on" required />
      </div>
      <div>
        <label for="fname">Password</label>
        <input
          class="input-box"
          type="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
        />
      </div>
    </div>
    <div>
      <input
        class="input-box hover:bg-lime-300 hover:text-black"
        type="submit"
        value="Submit"
      />
      <input
        class="input-box hover:bg-pink-400 hover:text-black"
        type="reset"
        value="Clear"
      />
    </div>
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
