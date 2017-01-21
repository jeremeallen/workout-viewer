<template>
    <div class='row'>
        <div class='col-md-6 col-xs-12'>
            <h1>Workouts</h1>
            <ul class="list-group">
                <li  class="list-group-item" v-for="workout in workouts">
                    <div class="radio">
                        <label>
                            <input
                                type="radio"
                                v-model="selectedWorkoutId"
                                :value="workout.id"
                                @click='changeWorkout(workout.id)'
                            > {{ workout.name }}
                        </label>
                    </div>
                </li>
            </ul>
        </div>
        <div class='col-md-6 col-xs-12' v-if="workout">
            <h1>Selected Workout</h1>
            <ul class="list-group">
                <li  class="list-group-item" v-for="days in workout.exercise_cycle">
                    <h3>{{ days.title }}</h3>

                    <ul class="list-group">
                        <li  class="list-group-item" v-for="exercise in days.exercises">
                            {{ exercise }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'workouts',
        computed: {
            workouts() {
                return this.$store.getters.getWorkouts;
            },
            workout() {
                return this.$store.getters.getWorkout;
            },
            selectedWorkoutId() {
                return this.$store.getters.getSelectedWorkoutId;
            },
        },
        methods: {
            setWorkout() {
                this.$store.dispatch('setWorkout', this.selectedWorkout);
            },
            changeWorkout(id) {
                this.$store.dispatch('setWorkout', id);
            },
        },
    }
</script>
<style>
</style>
