import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const localStorage = window.localStorage;

export default new Vuex.Store({
  state: {
    workouts: [
      {
        id: 1,
        name: 'Phase 1',
        exercise_cycle: [
          {
            title: 'Day 1',
            exercises: [
              'Incline barbell presses',
              'Dumbell bench presses',
              'Flat dumbell fly',
              'Standing EZ-bar curl',
              'Alternating standing bumbell curl',
            ],
          },
          {
            title: 'Day 2',
            exercises: [
              'Leg Press',
              'Leg Extension',
              'Lying Leg Curl',
              'Adduction machine',
              'Abduction machine',
            ],
          },
          {
            title: 'Day 3',
            exercises: [
              'Cardio',
            ],
          },
          {
            title: 'Day 4',
            exercises: [
              'Lateral Raise',
              'Barbell front press',
              'Dumbell front raise',
              'Dumbell shrug',
              'French press',
              'Single arm dumbell overhead extension',
            ],
          },
          {
            title: 'Day 5',
            exercises: [
              'Cardio',
            ],
          },
          {
            title: 'Day 6',
            exercises: [
              'Pull up',
              'Barbell row',
              'Wide grip pulldown',
              'Back extension',
              'Seated calf raise',
              'Standing calf raise',
            ],
          },
          {
            title: 'Day 7',
            exercises: [
              'Rest day',
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Phase 2',
        exercise_cycle: [
          {
            title: 'Day 1',
            exercises: [
              'Barbell presses',
              'Incline dumbell press',
              'Tricep press-down',
              'Tricep kick-back',
              'Leg press (light)',
              'Leg extension (light)',
              'Leg curl (light)',
            ],
          },
          {
            title: 'Day 2',
            exercises: [
              'Cardio',
            ],
          },
          {
            title: 'Day 3',
            exercises: [
              'Peck deck fly',
              'Machine military press',
              'Single arm cable raise',
              'Rear deltoid dumbell raise',
              'Standing barbell curl',
              'Incline alternating dumbell curl',
              'Standing calf raise',
              'Seated calf raise',
            ],
          },
          {
            title: 'Day 4',
            exercises: [
              'Crunch with weight',
              'Hanging leg raise',
              'Dumbell side bend',
            ],
          },
          {
            title: 'Day 5',
            exercises: [
              'Walking power lunge',
              'Single leg extension',
              'Romanian deadlift',
              'Wide grip pulldown',
              'Dumbell row',
              'Barbell shrug',
            ],
          },
          {
            title: 'Day 6',
            exercises: [
              'Rest',
            ],
          },
          {
            title: 'Day 7',
            exercises: [
              'Cardio',
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'Phase 3',
        exercise_cycle: [
          {
            title: 'Day 1',
            exercises: [
              'Reverse grip barbell row',
              'Close grip pulldown',
              'Single arm cable row',
              'Rear deltoid',
            ],
          },
          {
            title: 'Day 2',
            exercises: [
              'Incline machine press',
              'Unilateral dumbell press',
              'Dip',
              'Single arm tricep pushdown',
            ],
          },
          {
            title: 'Day 3',
            exercises: [
              'Rest',
            ],
          },
          {
            title: 'Day 4',
            exercises: [
              'Hack squat',
              'Squat',
              'Side lunge',
              'Leg extension',
              'Leg curl',
            ],
          },
          {
            title: 'Day 5',
            exercises: [
              'Rest',
            ],
          },
          {
            title: 'Day 6',
            exercises: [
              'Arnold press',
              'Lateral raise',
              'Barbell front raise',
              'Upright row',
              'Dumbell shrug',
              'Preacher curl',
              'Standing cable curl',
            ],
          },
          {
            title: 'Day 7',
            exercises: [
              'Rest',
            ],
          },
        ],
      },
      {
        id: 4,
        name: 'Phase 4',
        exercise_cycle: [
          {
            title: 'Day 1',
            exercises: [
              'Machine military press',
              'Barbell front raise',
              'Single arm cable side raise',
              'Barbell shrug',
            ],
          },
          {
            title: 'Day 2',
            exercises: [
              'Rest',
            ],
          },
          {
            title: 'Day 3',
            exercises: [
              'Wide grip machine row',
              'Seated cable row',
              'Reverse grip pulldown',
              'Rear deltoid machine',
              'Seated calf raise',
              'Standing calf raise',
            ],
          },
          {
            title: 'Day 4',
            exercises: [
              'Machine bench press',
              'Incline dumbell fly',
              'Decline bench press',
            ],
          },
          {
            title: 'Day 5',
            exercises: [
              'Squat',
              'Dumbell lunge',
              'Single leg extension',
              'Seated leg curl',
              'Abduction machine',
              'Adduction machine',
            ],
          },
          {
            title: 'Day 6',
            exercises: [
              'Close grip bench press',
              'Dumbell french press',
              'Machine curl',
              'Single arm dumbell preacher curl',
              '21 curl ez-bar',
            ],
          },
          {
            title: 'Day 7',
            exercises: [
              'Rest',
            ],
          },
        ],
      },
    ],
    workoutSelected: 1,
  },
  getters: {
    getWorkouts(state) {
      return state.workouts;
    },
    getWorkout(state, workoutId) {
      if (!state.workoutSelected) {
        return {};
      }

      return state.workouts.find((workout) => {
        if (workout.id == state.workoutSelected) {
          return workout;
        }
      });
    },
    getSelectedWorkoutId(state) {
      return state.workoutSelected;
    },
  },
  mutations: {
    saveWorkout(state, id) {
      state.workoutSelected = id;
      localStorage.setItem('workoutSelected', state.workoutSelected);
    },
  },
  actions: {
    setWorkout(context, id) {
      context.commit('saveWorkout', id);
    }
  },
});
