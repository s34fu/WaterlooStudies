<template>
    <div>
        <div>
            <p>Select your faculty:</p>
            <select v-model="userFaculty">
                <option v-for="faculty in faculties" :key="faculty" :value="faculty">{{ faculty }}</option>
            </select>
            <div v-if="isUserFacultyChosen">
                <p>Select your program:</p>
                <select v-model="userProgram">
                    <option v-for="(program, index) in programs" :key="index" :value="program.name">{{ program.name }}</option>
                </select>
                <p>Select your enrollment year</p>
                <select v-model="userYear">
                    <option v-for="year in yearsOfStudy" :key="year" :value="year">{{ year }}</option>
                </select>
            </div>
            <div v-if="isUserProgramChosen">
                <p>Enter what courses you have taken and which category they fall in</p>
                <input v-model="userCourse" placeholder="course name"> falls in 
                <select v-model="userCourseGroup">
                    <option v-for="(group, index) in courseGroups" :key="index" :value="group.name"> {{ group.name }}</option>
                </select>
                <b-button variant="success" @click="addCourse">Add</b-button>
            </div>
        </div>
        <div v-if="isUserFacultyChosen && isUserProgramChosen">
            <b-button variant="primary" @click="calculate()">Calculate</b-button>
        </div>
        <hr>
        <div v-if="userCourses.length > 0">
            <p>You have entered the following courses and their category</p>
            <li v-for="(userCourse, index) in userCourses" :key="index">
                <span>{{ userCourse.name }}</span> is in <span>{{ userCourse.group }}</span>
                <b-button class="removeCourseButton" variant="danger" @click="removeCourse(index)">X</b-button>
            </li>
        </div>
        <div v-if="showResult">
            <hr>
            <div v-if="coursesNeedToBeFulfilled.length > 0">
            <h3><u>Results</u></h3>
            <p>You still need to fulfill the following categories to graduate:</p>
            <li v-for="(record, index) in coursesNeedToBeFulfilled" :key="index">{{ record.total }} course(s) from {{ record.name }}</li>
            </div>
            <!-- if no more courses need to be fulfilled -->
            <div v-if="coursesNeedToBeFulfilled.length <= 0">
                <p>Congratulations! You have satisfied all required courses to graduate.</p>
            </div>
        </div>
    </div>
</template>

<script>
const { FacultyHandler, ProgramHandler, CourseHandler } = require('../Backend');

export default {
  name: 'CreditTrackerPage',
  data() {
      return {
        userFaculty: '',
        userYear: 0,
        selected: '',
        userProgram: '',
        faculties: [],
        programs: [],
        courseGroups: [], 
        yearsOfStudy: ['2016-2017'],
        userCourses: [],
        userCourse: '',
        userCourseGroup: '',
        coursesNeedToBeFulfilled: [],
        showResult: false,
        isUserProgramChosen: false,
        isUserFacultyChosen: false
      };
  },
  methods: {
      addCourse: function() {
          const newCourse = this.userCourse;
          const newCourseGroup = this.userCourseGroup;
          for(const userCourse of this.userCourses) {
              if(userCourse.name == newCourse && userCourse.group == newCourseGroup) {
                  alert(`the pair ${newCourse} in ${newCourseGroup} has already been added`);
                  return;
              }
          }
          this.userCourses.push({
              name: this.userCourse,
              group: this.userCourseGroup
          });
          this.userCourse = '',
          this.userCourseGroup = '';
      },
      removeCourse: function(index) {
          this.userCourses.splice(index, 1);
      },
      calculate: function() {
          // calculate the diff
          let tally = {};
          this.courseGroups.forEach(courseGroup => {
              tally[courseGroup.name] = courseGroup.total;
          });

          this.userCourses.forEach(userCourse => {
              if(tally[userCourse.group]){
                  tally[userCourse.group]--;
              }
          });

          // reset the result and push the new result
          this.coursesNeedToBeFulfilled = [];
          for(const [key, value] of Object.entries(tally)){
              if(value == 0) continue;
              this.coursesNeedToBeFulfilled.push({
                  name: key,
                  total: value
              });
          }
          this.showResult = true;
      }
  },
  watch: {
      userFaculty: async function() {
          this.programs = await ProgramHandler.getProgramsByFaculty(this.userFaculty);
          this.isUserFacultyChosen = true;
      },    
      userProgram: async function() {
          const courseGroupsByProgram = await CourseHandler.getRequiredCourseGroupsByProgram(this.userProgram);
          this.courseGroups = courseGroupsByProgram.courseGroups;
          this.isUserProgramChosen = true;
      }
  },
  async created() {
      this.faculties = await FacultyHandler.getFaculties();
  }
};
</script>

<style scoped>
.removeCourseButton {
    padding: 0.05rem 0.3rem;
    margin-left: 0.6rem;
    font-size: 0.8rem;
}
.centerListItem {
    display: inline-block;
}
</style>