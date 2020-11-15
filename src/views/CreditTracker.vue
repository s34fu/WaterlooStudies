<template>
    <div>
        <div>
            <p>Select your faculty:</p>
            <select v-model="userFaculty">
                <option v-for="faculty in faculties" :key="faculty" :value="faculty">{{ faculty }}</option>
            </select>
            <p>Select your year</p>
            <select v-model="userYear">
                <option v-for="year in yearsOfStudy" :key="year" :value="year">{{ year }}</option>
            </select>
            <p>Enter what courses you have taken and which category they fall in</p>
            <input v-model="userCourse"> falls in <input v-model="userCourseCategory"> <b-button variant="success" @click="addCourse">Add</b-button>
        </div>
        <div>
            <b-button variant="primary" @click="calculate()">Calculate</b-button>
        </div>
        <hr>
        <div>
            <p>You have entered the following courses and their category</p>
            <li v-for="(userCourse, index) in userCourses" :key="index">
                <span>{{ userCourse.course }}</span> is in <span>{{ userCourse.category }}</span>
                <b-button class="removeCourseButton" variant="danger" @click="removeCourse(index)">X</b-button>
            </li>
        </div>
    </div>
</template>

<script>
const { FacultyProvider } = require('../Backend')

export default {
  name: 'CreditTrackerPage',
  data() {
      return {
        userFaculty: '',
        userYear: 0,
        selected: '',
        faculties: [],
        yearsOfStudy: ['1','2','3','4'],
        userCourses: [],
        userCourse: '',
        userCourseCategory: ''
      }
  },
  methods: {
      addCourse: function() {
          this.userCourses.push({
              course: this.userCourse,
              category: this.userCourseCategory
          });
          this.userCourse = '',
          this.userCourseCategory = ''
      },
      removeCourse: function(index) {
          this.userCourses.splice(index, 1);
      },
      calculate: function() {
          console.log('user data', {
              faculty: this.userFaculty,
              year: this.userYear,
              courses: this.userCourses
          });
      }
  },
  async created() {
      this.faculties = await FacultyProvider.getFaculties();
  }
}
</script>

<style scoped>
.removeCourseButton {
    padding: 0.05rem 0.3rem;
    margin-left: 0.6rem;
    font-size: 0.8rem;
}
</style>