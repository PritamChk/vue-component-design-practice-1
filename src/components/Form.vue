<template>
  <form
    class="form"
  >
    <div class="form-section">
      <label class="label-2" for="fname">First Name</label>
      <input type="text" placeholder="Type here" class="input-blur" />
    </div>
    <div class="form-section">
      <label class="label-2" for="fname">Last Name</label>
      <input type="text" placeholder="Type here" class="input-blur" />
    </div>
    <div class="form-section">
      <label class="label-2" for="age"> Age </label>
      <input
        class="input-blur"
        type="number"
        name=""
        id=""
        value="20"
        min="18"
        max="30"
      />
    </div>
    <div class="form-section">
      <button type="submit" class="button hover:bg-gradient-to-tl from-lime-400/50 to-gray-800/25">Submit</button>
      <button type="reset" class="button hover:bg-gradient-to-tl from-red-400/40 to-gray-800/25">Reset</button>
    </div>
  </form>

</template>

<script>
export default {
  name: "Form",
};
</script>
