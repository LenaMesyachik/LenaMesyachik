function capitalizeWord(word) {
    let sp = word.split('')
  let start = sp[0].toUpperCase()

    sp.splice(0,1)
    sp.unshift(start)
    return sp.join('')
  
}