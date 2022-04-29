<template>
  <div class="column">
    <div class="column_time">
      <Icon icon="ic:baseline-access-time" color="#304386" />
      <input type="text"
             maxlength="5"
             :placeholder="placeholder"
             :value="valueState(index, name)"
             @input="updateInput"
             :required="fieldErrState(index, name)"
      />
    </div>
    <div
        class="error"
        v-if="fieldErrState(index, name) && fieldErrMessState(index, name)"
    >
      {{fieldErrMessState(index, name)}}
    </div>

  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import {mapGetters, mapMutations } from "vuex";
import validationText from "@/validators/validationText";
export default {
  components: {
    Icon,
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      setValueTime: 'info/setValueTime',
    }),
    updateInput(e){

      this.setValueTime({value: validationText(e), index: this.index, name: this.name})
    }
  },
  computed: {
    ...mapGetters({
      valueState: 'info/valueState',
      fieldErrState: 'info/fieldErrState',
      fieldErrMessState: 'info/fieldErrMessState'
    }),
  }
}
</script>

<style scoped>
input[type="text"] {
  border: none;
  background: #ffffff !important;
  outline: none;
  height: 20px;
  width: auto;
  min-width: 40px;
  max-width: 51px;
  color: black;
  font-size: 1rem;
}
input:invalid::placeholder{
  color: red;
}
input:invalid {
  color: red;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 20px;
}

.column_time {
  height: 40px;
  width: 200px;
  margin: 0 15px;
  border-bottom: 2px solid #eaeded;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.column_time:hover, .column_time:focus-within {
  border-bottom: 2px solid #a1a1a1;
}

.error {
  color: red;
  padding-right: 12px
}
</style>