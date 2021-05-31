function talk(speech, date) {
    return `${this.name}: ${speech} [${date}]`
}

const anna = { name: 'Anna' }
const bruno = { name: 'Bruno' }

// Anna talks
const talkAnna = talk.bind(anna)
console.log(1, talkAnna('Hello, Bruno!', new Date))

// Bruno talks
// Now try to bind talkAnna function to Bruno, but won't work (it is already bound to Anna)
let talkBruno = talkAnna.bind(bruno)
console.log(2, talkBruno('Hello, Anna!', new Date))
// the only way to make it work is by binding the original function (same as done with Anna)
talkBruno = talk.bind(bruno)
console.log(3, talkBruno('Hello, Anna!', new Date))
// but with this special "bind" we created, we could potentially do this too and it will work (not supported by native bind)
talkBruno = talkAnna.unbind().bind(bruno)
console.log(4, talkBruno('Hello, Anna!', new Date))