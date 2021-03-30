export const passwordRule = [
    v => /^(?=.*\d)(?=.*[a-zA-Z]).{8,16}$/.test(v)||'ต้องเป็นตัวอักษรภาษาอังกฤษ และตัวเลขและความยาวอยู่ในช่วง 8 - 16 หลัก'
]

export const telPhoneRule = [
    v => !!v || 'กรอกเบอร์โทรด้วยจ๊ะ',
    v => (v && v.length === 10) || 'เบอร์โทร 10 ตัวจ๊ะ',
    v => /^0([0-9]){9}$/.test(v) || 'รูปแบบเบอร์ผิดนะจ๊ะ 0XXXXXXXXX'
]

export const emailRule = [
    v => !!v || 'E-mail ห้ามว่างจ๊ะ',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
]

export const dropDownRule = [
    v => !!v || 'กรุณาเลือกด้วยจ๊ะ'
]

export const ISBNRule = [
    v => /[0-9]{13}/.test(v) || 'ตัวเลข 0-9 13 หลักจ๊ะ'
]

export const nameRule = [
    v => !!v || 'กรุณากรอกด้วยจ๊ะ',
    v => /^[a-zA-Z\u0E00-\u0E7F0-9 ]*$/.test(v) ||'รูปแบบบ่ถูกเด้อจ้า'
]
export const NameMemberRule = [
    v => !!v || 'กรุณากรอกด้วยจ๊ะ',
    v => /(^([a-zA-Z ])*$)|(^([\u0E00-\u0E7F ])*$)/.test(v)||'รูปแบบบ่ถูกเด้อจ้า'

]
export const memberIDRule = [
    v => !!v || 'กรุณากรอกด้วยจ๊ะ',
    v => /^[0-9]{9}$/.test(v)
]
export const publisherRule = [
    v => !!v || 'กรุณากรอกด้วยจ๊ะ',
    v => /^[0-9]{4}$/.test(v)
]
export const pageAndPriceBookRule = [
    v => !!v || 'กรุณากรอกด้วยจ๊ะ',
    v => /^[0-9]{10}$/.test(v)
]







