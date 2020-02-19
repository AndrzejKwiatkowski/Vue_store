<template>
  <div class="input-group">
    <input
      type="button"
      :disabled="this.counter <= 1 ? true : false"
      @click="quantityMinus()"
      value="-"
      class="btn btn-success"
      data-field="quantity"
    />
    <input type="number" max="99" min="1" v-model="counter" name="quantity" class="quantity-field" />
    <input
      type="button"
      value="+"
      @click="quantityPlus()"
      class="btn btn-danger"
      data-field="quantity"
    />
  </div>
</template>

<script>
export default {
  name: "QuantityButtons",

  data() {
    return {
      counter: 1
    };
  },

  methods: {
    quantityPlus() {
      this.counter++;
      this.$emit("clicked", this.counter);
    },

    quantityMinus() {
      this.counter--;
    }
  }
};
</script>

<style lang="scss" scoped>
input.quantity-field {
  width: 40px;
}
.input-group {
  padding-bottom: 10px;
}
</style>>

