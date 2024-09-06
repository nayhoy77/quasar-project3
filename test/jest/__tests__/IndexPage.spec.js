import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

// describe('IndexPage', () => {
//   it('ตรวจสอบหัวข้อ (title)', () => {
//     const wrapper = shallowMount(IndexPage)
//     let header = wrapper.find('.htmlClass h1')
//     expect(header.exists()).toBe(true)
//     expect(header.text())
//       .toBe('วิวัฒนาการของโลกสมัยใหม่.')
//   })
// });

// it('ตรวจสอบตัวแปลชื่อว่า title', () => {
//   const wrapper = shallowMount(IndexPage, {
//     data() {
//       return {
//         title: 'ฉันรัก วิว'
//       }
//     }
//   })
//   let header = wrapper.find('.htmlClass h1')
//   expect(header.text()).toBe('ฉันรัก วิว')
// })


// test('ทดสอบว่ามีฟอรืม (form)', () => {
//   const wrapper = shallowMount(IndexPage)
//   expect(wrapper.find('form').exists()).toBe(true)
// })

// test('ทดสอบว่าในฟอร์ม (form) มีการรับค่า (input)', () => {
//   const wrapper = shallowMount(IndexPage)
//   expect(wrapper.find('form > input').exists()).toBe(true)
// })

// test('ทดสอบว่ามีปุ่ม (button)', () => {
//   const wrapper = shallowMount(IndexPage)
//   expect(wrapper.find('button').exists()).toBe(true)
// })


it('ตรวจสอบตัวแปล studentCode', () => {
  const wrapper = shallowMount(IndexPage, {
    data() {
      return {
        studentCode: '6604101375'
      }
    }
  })
  let studentCode = wrapper.find('.htmlClass h1')
  expect(studentCode.text()).toBe('6604101375')
})

it('ตรวจสอบตัวแปล firstName', () => {
  const wrapper = shallowMount(IndexPage, {
    data() {
      return {
        firstName: 'รัตนโชติ'
      }
    }
  })
  let firstName = wrapper.find('.htmlClass h2')
  expect(firstName.text()).toBe('รัตนโชติ')
})

it('ตรวจสอบตัวแปล surName', () => {
  const wrapper = shallowMount(IndexPage, {
    data() {
      return {
        surName: 'ทองคต'
      }
    }
  })
  let surName = wrapper.find('.htmlClass h3')
  expect(surName.text()).toBe('ทองคต')
})

it('ตรวจสอบตัวแปล nicName', () => {
  const wrapper = shallowMount(IndexPage, {
    data() {
      return {
        nicName: 'โชติ'
      }
    }
  })
  let nicName = wrapper.find('.htmlClass h4')
  expect(nicName.text()).toBe('โชติ')
})