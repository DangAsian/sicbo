
function random_int(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Random between 3 & 18
function dice_roll(x, y, z) {
  let a = x + y + z;
  return a;
}


function play_game(n) {
  let total = 1000
  let bet = [10, 10 , 15, 15, 50, 100, 200]
  let small = true
  let counter = 0


  for (var i = 0; i < n; i++) {
    let x = random_int(1, 6);
    let y = random_int(1, 6);
    let z = random_int(1, 6);
    let dice_value = dice_roll(x, y, z)


    if (x === y && y === z ) {
      console.log(`I lose these are all the same ${x} ${y} ${z} | counter: position[${counter}]`)
      console.log(`My bet was:${small ? "small" : "big"}`)
      console.log(`bet: ${bet[counter]}`)
      total = total - bet[counter]
      console.log(`total: ${total}`)
      counter++
      console.log(`NEW counter: position[${counter}]`)
      if (counter > bet.length - 1) {
        counter = 0
      }
    } else if (dice_value <= 10 & small === true) {
       console.log(`I win... dice rolled ${dice_value} | counter: position[${counter}]`)
       console.log(`My bet was:${small ? "small" : "big"}`)
       console.log(`bet: ${bet[counter]}`)
       total = total + bet[counter]
       console.log(`total: ${total}`)
       if (bet[counter] === 50 || bet[counter] ===  100 || bet[counter] ===  200) {
         counter = 0
       }
    } else if (dice_value > 10 & small === true) {
      console.log(`I lose... dice rolled ${dice_value} | counter: position[${counter}]`)
      console.log(`My bet was:${small ? "small" : "big"}`)
      console.log(`bet: ${bet[counter]}`)
      total = total - bet[counter]
      console.log(`total: ${total}`)
      counter++
      console.log(`NEW counter: position[${counter}]`)
      small = !small
      if (counter > bet.length - 1) {
        counter = 0
      }
    }
    else if (dice_value <= 10 & small === false) {
      console.log(`I lose... dice rolled ${dice_value} | counter: position[${counter}]`)
      console.log(`My bet was:${small ? "small" : "big"}`)
      console.log(`bet: ${bet[counter]}`)
      total = total - bet[counter]
      console.log(`total: ${total}`)
      counter++
      console.log(`NEW counter: position[${counter}]`)
      small = !small
      if (counter > bet.length - 1) {
        counter = 0
      }
    } else if (dice_value > 10 & small === false) {
       console.log(`I win... dice rolled ${dice_value} | counter: position[${counter}]`)
       console.log(`My bet was:${small ? "small" : "big"}`)
       console.log(`bet: ${bet[counter]}`)
       total = total + bet[counter]
       console.log(`total: ${total}`)
       if (bet[counter] === 50 || bet[counter] ===  100 || bet[counter] ===  200) {
         counter = 0
       }
    }
  }
  console.log("-------------------------------")
  console.log(`Total: $${total}`)
}

// 11

play_game(1000)
