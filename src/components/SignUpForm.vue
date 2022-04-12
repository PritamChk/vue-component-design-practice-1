<template>
  <form
    action="javascript:void(0)"
    class="flex flex-col justify-center align-middle text-gray-600"
  >
    <div
      class="grid grid-flow-row grid-cols-2 grid-rows-3 gap-2 md:grid-rows-2"
    >
      <h1 class="form-header col-span-2 ml-2 self-center">Name</h1>
      <div class="col-span-2 md:col-span-1">
        <label class="label" for="fname">First: </label>
        <input class="input-box" type="text" placeholder="Tatha" required />
      </div>
      <div class="col-span-2 md:col-span-1">
        <label class="label" for="fname">Last: </label>
        <input class="input-box" type="text" placeholder="Gata" required />
      </div>
    </div>
    <div
      class="grid grid-flow-row grid-cols-2 grid-rows-3 gap-2 md:grid-rows-2"
    >
      <h1 class="form-header col-span-2 ml-2 self-center">Credentials</h1>
      <div class="col-span-2 md:col-span-1">
        <label class="label" for="fname">Email: </label>
        <input
          class="input-box"
          type="email"
          placeholder="tatha@gata.com"
          required
        />
      </div>
      <div class="col-span-2 md:col-span-1">
        <label class="label" for="fname">Password: </label>
        <input
          class="input-box"
          type="password"
          placeholder="******"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
        />
      </div>
    </div>

    <div
      class="mt-6 flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-evenly md:space-x-2 md:align-baseline"
    >
      <input
        class="flex-1 rounded-3xl bg-lime-300 py-2 px-10 text-xl font-bold text-black hover:bg-lime-200"
        type="submit"
        value="Submit"
      />
      <input
        class="flex-1 rounded-3xl bg-pink-300 px-10 py-2 text-xl font-bold text-black hover:bg-pink-200"
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
