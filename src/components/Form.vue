<template>
  <form class="form">
    <div class="form-section">
      <label class="label" for="fname">First Name</label>
      <input required type="text" placeholder="Type here" class="input-blur uppercase" />
    </div>
    <div class="form-section">
      <label class="label" for="fname">Last Name</label>
      <input required type="text" placeholder="Type here" class="input-blur uppercase" />
    </div>
    <div class="form-section">
      <label class="label" for="email">Email</label>
      <input
      required
        type="email"
        placeholder="babla@habla.com"
        class="input-blur lowercase"
      />
    </div>
    <div class="form-section">
      <label class="label" for="email">Password</label>
      <input
      required
        type="password"
        placeholder="Password"
        class="input-blur"
      />
    </div>

    <div class="form-section accent-green-400">
      <label for="Sex" class="label">Category</label>
      <label for="Male" class="radio-option">
        <input
          required
          type="radio"
          class="radio-primary radio-md"
          name="Sex"
          value="student"
          v-model="category"
        /><span> Student </span>
      </label>
      <label for="Female" class="radio-option">
        <input
        required
          type="radio"
          class="radio-primary radio-md"
          name="Sex"
          v-model="category"
          value="teacher"
          checked
        /><span> Teacher </span>
      </label>
    </div>
    <template v-if="category === 'student'">
      <div class="form-section">
        <label for="Sem" class="label">Semester</label>
        <select required class="input-blur" v-model="selected_sem">
          <option disabled selected value="None">Your Semester</option>
          <option v-for="sem in sems" :key="sem" class="label">
            {{ sem }}
          </option>
        </select>
      </div>
      <div class="form-section">
        <label for="Dept" class="label">Department</label>
        <select required class="input-blur uppercase" v-model="selected_dept">
          <option disabled selected value="None">Your Semester</option>
          <option v-for="dept in depts" :key="dept" class="label">
            {{ dept }}
          </option>
        </select>
      </div>
      <div class="form-section">
        <label for="batch" class="label">Batch of</label>
        <input required
          type="number"
          min="1900"
          max="2100"
          step="1"
          value="2020"
          class="input-blur"
        />
      </div>
    </template>
    <!-- <div class="form-section label">
      {{ category }}
      {{ selected_sem }}
      {{ selected_dept }}
    </div> -->
    <div class="form-section">
      <button type="submit" class="button button-success">Submit</button>
      <button type="reset" class="button button-danger">Reset</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      category: "teacher",
      sems: [1, 2, 3, 4, 5, 6, 7, 8],
      selected_sem: "",
      selected_dept: "",
      depts: ["MCA", "BCA", "B.Tech - CS", "B.Tech - ME", "B.Tech - EE"],
    };
  },
};
</script>
