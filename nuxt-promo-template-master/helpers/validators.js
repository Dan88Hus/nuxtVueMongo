// this will be used for custom validator besides of vualidita in login and register pages 

import { helpers } from 'vuelidate/lib/validators'


export const supportedFileType = (value) => {
    if(!helpers.req(value)) return true
    const allowedFormats = ['jpg', 'png', 'jpeg']
    const extension = value.split('.').pop()
    console.log(extension)
    return allowedFormats.includes(extension)
}
