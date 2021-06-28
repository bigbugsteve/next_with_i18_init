const VALIDATION:any={};

export const required = (value, message ) => { value ? undefined : message }
  
export const emailvalid = (value, message) =>{ value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? message : undefined }
  
export const isNumber = (value, message) =>{ value && !/^[0-9]+(\.[0-9][0-9]|\,[0-9][0-9]?)?$/i.test(value) ? message : undefined }

export const validImei = (value, message) => { luhnNumber(value) ? undefined : message }

export const number = (value, message) => value && isNaN(Number(value)) ? message : undefined

  const maxexactLength = max => value =>
    value && value.length > max ? `Must be maximum ${max} characters!` : undefined
  const maxexactLength8 = maxexactLength(8)
  const maxexactLength6 = maxexactLength(6)
  const maxexactLength16 = maxexactLength(16)
  const maxexactLength30 = maxexactLength(30)
  const maxexactLength50 = maxexactLength(50)
  const maxexactLength150 = maxexactLength(150)
  VALIDATION.maxexactLength8 = maxexactLength8
  VALIDATION.maxexactLength6 = maxexactLength6
  VALIDATION.maxexactLength16 = maxexactLength16
  VALIDATION.maxexactLength30 = maxexactLength30
  VALIDATION.maxexactLength50 = maxexactLength50
  VALIDATION.maxexactLength150 = maxexactLength150
  
  const minLength = min => value =>
    value && value.length < min ? `Must be at least ${min} characters!` : undefined
  const minLength8 = minLength(8)
  const minLength6 = minLength(6)
  VALIDATION.minLength8 = minLength8
  VALIDATION.minLength6 = minLength6
  
  const exactLength = min => value =>
    value && value.length != min ? `${min} characters!` : undefined
  const exactLength8 = exactLength(8)
  const exactLength15 = exactLength(15)
  VALIDATION.exactLength8 = exactLength8
  VALIDATION.exactLength15 = exactLength15
  


  
  const luhnNumber = (code) => {
    const len = code.length
    const parity = len % 2
    let sum = 0
    for (let i = len-1; i >= 0; i--) {
        let d = parseInt(code.charAt(i))
        if (i % 2 == parity) { d *= 2 }
        if (d > 9) { d -= 9 }
        sum += d
    }
    return sum % 10 === 0
  }
  
 
    

  
  export default VALIDATION;