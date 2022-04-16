<template>
  <form
    class="form"
  >
    <div class="form-section">
      <label class="label" for="fname">First Name</label>
      <input type="text" placeholder="Type here" class="input-blur" />
    </div>
    <div class="form-section">
      <label class="label" for="fname">Last Name</label>
      <input type="text" placeholder="Type here" class="input-blur" />
    </div>
    <div class="form-section">
      <label class="label" for="age"> Age </label>
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
      <button type="submit" class="button hover:bg-gradient-to-tl from-lime-400/50 to-green-200/25">Submit</button>
      <button type="reset" class="button hover:bg-gradient-to-tl from-red-400/40 to-pink-200/50">Reset</button>
    </div>
  </form>

</template>

<script>
export default {
  name: "Form",
};
</script>
