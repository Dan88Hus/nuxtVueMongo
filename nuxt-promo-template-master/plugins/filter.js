import Vue from 'vue'
//plugin register icin nuxt.config

Vue.filter('shortenText', function (text, maxLength = 300) {
    if (text && typeof text === "string") {
        // console.log("shortenText")
        const finalChar = text.length > maxLength ? '...' : ""
        // console.log(text.length, maxLength)
        return text.substr(0, maxLength) + finalChar
    }
    return ""
})