<template>
  <div class="calc">
    <div class="calc-result">{{result}}</div>
    <div class="calc-input-box">
      <label class="calc-input-title" for="number-one">Number 1</label>
      <input class="calc-input calc-number--one" id="number-one" v-model.number="numberOne" type="number">
      <label class="calc-input-title" for="number-two">Number 2</label>
      <input class="calc-input calc-number--two" id="number-two" v-model.number="numberTwo" type="number">
    </div>
    <div class="calc-button-box">
      <button class="calc-button" @click="sum">+</button>
      <button class="calc-button" @click="subtraction">-</button>
      <button class="calc-button" @click="division">/</button>
      <button class="calc-button" @click="multiplication">*</button>
      <button class="calc-button" @click="degree">**</button>
      <button class="calc-button" @click="integerDivision">%</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  props: {
  },
  data: () => ({
    numberOne: 0,
    numberTwo: 0,
    result: 0
  }),
  methods: {
    sum () {
      this.result = +this.numberOne + +this.numberTwo
    },
    subtraction () {
      this.result = this.numberOne - this.numberTwo
    },
    division () {
      this.result = this.numberOne / this.numberTwo
    },
    multiplication () {
      this.result = this.numberOne * this.numberTwo
    },
    degree () {
      this.result = Math.pow(this.numberOne, this.numberTwo)
    },
    integerDivision () {
      this.result = Math.trunc(this.numberOne / this.numberTwo)
    }

  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.calc{
  width: 400px;
  height: 400px;
  background-color: #2d3241;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
    &-result{
      height: 40px;
      width: 100%;
      border-radius: 10px;
      background-color: white;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 5px 10px;
      font-size: 25px;
    }
    &-input-box{
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    }
    &-input{
      height: 40px;
      border-radius: 10px;
      padding: 5px;
      &-title{
        color: white;
        margin: 5px;
      }
    }
    &-button-box{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 20px;
    }
    &-button{
      width: 45%;
      height: 30px;
      margin: 5px;
    }
}
</style>
