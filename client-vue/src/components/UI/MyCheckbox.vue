<template>
  <div class="group">
    <div v-for="(day, i) in daysState(index)" class="wrapper">
      <input
          type="checkbox"
          :id="day.name"
          :name="i.toString()"
          :value="day.checked"
          @change="onChecked"
          :disabled="day.disabled"
      >
      <label
          :for="day.name"
      >
        {{ day.label }}
      </label>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      setChecked: "info/setChecked"
    }),
    onChecked(e){
      this.setChecked({e, index: this.index})
    }
  },
  computed: {
    ...mapGetters({
      daysState: 'info/daysState'
    })
  }

}
</script>

<style scoped>
.group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.wrapper {
  display: flex;
  flex-direction: column-reverse;
  margin-right: 25px;
  align-items: center;
}
input[type="checkbox"] {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  color: #363839;
  border: 1px solid #bdc1c6;
  border-radius: 4px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  margin-top: 5px;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
}
input[type="checkbox"]::before {
  position: absolute;
  content: '';
  display: block;
  top: -2px;
  left: 4px;
  width: 8px;
  height: 14px;
  border-style: solid;
  border-color: #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
}
input[type="checkbox"]:checked {
  color: #fff;
  border-color: #f50057;
  background: #f50057;
}
input[type="checkbox"]:disabled {
  color: #fff;
  border-color: #cbcbcb;
  background: #cbcbcb;
  opacity: 0.5;
}
input[type="checkbox"]:checked::before {
  opacity: 1;
}
label {
  font-family: 'Roboto', sans-serif;
  position: relative;
  font-size: 1em;
  font-weight: 400;
  user-select: none;
}
label::before {
  position: absolute;
  content: attr(data-content);
  color: #9c9e9f;
  clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
  text-decoration: line-through;
  text-decoration-thickness: 3px;
  text-decoration-color: #363839;
  transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>