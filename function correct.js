function correct(string){

let str = string.split('')
return str.map(a => (a === '5')
  ? 'S': (a === '0')
  ? 'O': (a === '1')
  ? 'I': a).join('')
 }