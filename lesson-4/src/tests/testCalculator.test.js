import { expect, it } from "@jest/globals"
import { mount } from "@vue/test-utils"
import Calc from '../components/Calculator.vue'

describe('Test Calc', () => {
    it('Test first operand input', () => {
        const wrapper = mount(Calc)
        const op1 = wrapper.find('input[name=op1]')
        op1.setValue(1)
        expect(wrapper.vm.op1).toBe(1)
    })

    it('Test second operand input', () => {
        const wrapper = mount(Calc)
        const op2 = wrapper.find('input[name=op2]')
        op2.element.value = "2"
        op2.trigger('input')
        expect(wrapper.vm.op2).toBe(2)
    })

    it('Test method sum', () => {
        const wrapper = mount(Calc)
        const op1 = wrapper.find('input[name=op1]')
        op1.setValue("10")
        const op2 = wrapper.find('input[name=op2]')
        op2.element.value = "5"
        op2.trigger('input')
        const btn = wrapper.find('button[name="+"]')
        btn.trigger('click')
        expect(wrapper.vm.result).toBe(15)
    })

    it('Test method subtract', () => {
        const wrapper = mount(Calc)
        const op1 = wrapper.find('input[name=op1]')
        op1.setValue("10")
        const op2 = wrapper.find('input[name=op2]')
        op2.element.value = "5"
        op2.trigger('input')
        const btn = wrapper.find('button[name="-"]')
        btn.trigger('click')
        expect(wrapper.vm.result).toBe(5)
    })

    it('Test method multiply', () => {
        const wrapper = mount(Calc)
        const op1 = wrapper.find('input[name=op1]')
        const op2 = wrapper.find('input[name=op2]')
        const btn = wrapper.find('button[name="*"]')
        op1.setValue("10")
        op2.element.value = "5"
        op2.trigger('input')
        btn.trigger('click')
        expect(wrapper.vm.result).toBe(50)
    })

})