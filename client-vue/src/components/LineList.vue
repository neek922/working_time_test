<template>
  <div class="form_content">
    <div class="row_icon">
      <span @click="validationNewLine" v-if="index === 0" class="column_add" id="add_row">Додати ще +</span>
      <Icon @click="getInformation" v-else icon="ic:outline-assignment" class="column_add" color="#304386" />
    </div>
    <div class="row_input">
      <my-input
          :index="index"
          :name="'time_to'"
          :placeholder="'час по'"
          />
      <span> - </span>
      <my-input
          :index="index"
          :name="'time_from'"
          :placeholder="'час від'"
      />
      <my-checkbox :index="index"/>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyCheckbox from "@/components/UI/MyCheckbox";
import { Icon } from '@iconify/vue';
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  components: {MyCheckbox, MyInput, Icon},
  props: {
    index: {
      type: Number,
      required: true,
    }
  },
  methods: {
    ...mapActions({
      validationNewLine: 'info/validationNewLine',
      getInformation: 'info/getInformation'
    })
  }
}
</script>

<style scoped>

.form_content {
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.row_input {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.column_add {
  color: #304386;
}

.column_add:hover {
  color: #697ec7;
  cursor: pointer;
}
</style>