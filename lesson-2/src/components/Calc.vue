<template>
  <div class="calc">
    <div class="calc-result">{{result}}</div>
    <div class="calc-error" v-show="error"> Ошибка: {{ error }} </div>
    <div class="calc-input">
      <label class="calc-input-title" for="number-one">Number 1</label>
      <input class="calc-input-item calc-number--one" id="number-one" v-model.number="numberOne" type="number">
      <label class="calc-input-title" for="number-two">Number 2</label>
      <input class="calc-input-item calc-number--two" id="number-two" v-model.number="numberTwo" type="number">
    </div>
    <div class="calc-operators">
      <button class="calc-operators-item" v-for="operator in operators" @click="calculate(operator)" :title="operator" :key="operator">{{ operator }}</button>
    </div>
    <div class="calc-control">
      <div>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label class="calc-keyboard-title" for="checkbox">Screen-keyboard</label>
      </div>
      <div class="calc-radio-buttons">
        <input class="calc-radio-buttons-item calc-radio-buttons-item--one" type="radio" id="radioOne" value="1" v-model="entryField">
        <label class="calc-radio-buttons-title" for="radioOne">Number 1</label>
        <input class="calc-radio-buttons-item calc-radio-buttons-item--two" type="radio" id="radioTwo" value="2" v-model="entryField">
        <label class="calc-radio-buttons-title" for="radioTwo">Number 2</label>
      </div>
      <div>
        <input class="calc-radio-buttons-del" type="button" value="del" @click="inputDel">
      </div>
    </div>
    <div class="calc-keyboard" v-if="checked">
        <button class="calc-keyboard-item" v-for="(number, index) in keyboardNumbers" @click="inputPrint(number)" :key="index" :title="number">{{ number }}</button>
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
    result: 0,
    error: '',
    operators: ['+', '-', '/', '*', '**', '%'],
    keyboardNumbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    checked: true,
    entryField: '1'
  }),
  methods: {
    sum () {
      const { numberOne, numberTwo } = this
      this.result = numberOne + numberTwo
    },
    subtraction () {
      const { numberOne, numberTwo } = this
      this.result = numberOne - numberTwo
    },
    division () {
      const { numberOne, numberTwo } = this
      if (numberTwo === 0) this.error = 'На ноль делить нельзя!'
      else this.result = numberOne / numberTwo
    },
    multiplication () {
      const { numberOne, numberTwo } = this
      this.result = numberOne * numberTwo
    },
    degree () {
      const { numberOne, numberTwo } = this
      this.result = Math.pow(numberOne, numberTwo)
    },
    remainderOfTheDivision () {
      const { numberOne, numberTwo } = this
      if (numberTwo === 0) this.error = 'На ноль делить нельзя!'
      else this.result = Math.trunc(numberOne / numberTwo)
    },
    calculate (operation) {
      this.error = ''
      switch (operation) {
        case '+': this.sum(); break
        case '-': this.subtraction(); break
        case '/': this.division(); break
        case '*': this.multiplication(); break
        case '**': this.degree(); break
        case '%': this.remainderOfTheDivision(); break
      }
    },
    inputPrint (number) {
      if ((this.entryField) === '1') this.numberOne = +(this.numberOne + number)
      else this.numberTwo = +(this.numberTwo + number)
    },
    inputDel () {
      if ((this.entryField) === '1') {
        const newNumber = this.delLastNumber(this.numberOne)
        if (newNumber !== null) {
          this.numberOne = newNumber
        }
      } else {
        const newNumber = this.delLastNumber(this.numberTwo)
        if (newNumber !== null) {
          this.numberTwo = newNumber
        }
      }
    },
    delLastNumber (value) {
      const str = value.toString()
      if (str.length < 1) {
        return null
      }
      value = +(str.slice(0, -1))
      if (isNaN(value)) {
        value = 0
      }
      return value
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
  width: 450px;
  min-height: 400px;
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
    &-input{
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      &-item{
        height: 40px;
        border-radius: 10px;
        padding: 5px;
      }
      &-title{
        color: white;
        margin: 5px;
      }
    }
    &-operators{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 20px;
      &-item{
        width: 45%;
        height: 30px;
      }
      &-item:not(n){
        margin-bottom: 10px;
      }
    }
    &-control{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 10px 0;
      flex-wrap: wrap;
    }
    &-keyboard{
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      margin-top: 10px;
      flex-wrap: wrap;
      &-title{
        color: #fff;
        margin-left: 10px;
      }
      &-items{
        width: 100%;
        margin-top: 10px;
      }
      &-item{
        min-width: 33.33%;
        padding: 10px;
      }
    }
    &-error{
      color: red;
      margin-top: 10px;
    }
    &-radio-buttons{
      &-title{
        color: #fff;
        margin-left: 5px;
      }
      &-item{
        &--two{
          margin-left: 10px;
        }
      }
      &-del{
        padding: 0 10px;
      }
    }
}
</style>
