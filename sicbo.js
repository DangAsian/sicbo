
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
  let bet = [5, 5, 10, 10, 15, 15]
  let small = true
  let counter = 0


  for (var i = 0; i < n; i++) {
    let x = random_int(1, 6);
    let y = random_int(1, 6);
    let z = random_int(1, 6);
    let dice_value = dice_roll(x, y, z)


    if (x === y && y === z ) {
      console.log(`I lose these are all the same ${x} ${y} ${z} ${small} bet: ${bet[counter]}`)
      total = total - bet[counter]
      console.log(total)
      counter++
      if (counter > bet.length - 1) {
        counter = 0
      }
    } else if (dice_value <= 10 & small === true) {
       console.log(`I win... dice rolled ${dice_value} small:${small} bet: ${bet[counter]}`)
       total = total + bet[counter]
       console.log(total)
       if (bet[counter] === 50 || 100 || 200) {
         counter = 0
       }
    } else if (dice_value > 10 & small === true) {
      console.log(`I lose... dice rolled ${dice_value} small:${small} bet: ${bet[counter]}`)
      total = total - bet[counter]
      console.log(total)
      counter++
      small = false
      if (counter > bet.length - 1) {
        counter = 0
      }
    }
    else if (dice_value <= 10 & small === false) {
      console.log(`I lose... dice rolled ${dice_value} small:${small} bet: ${bet[counter]}`)
      total = total - bet[counter]
      console.log(total)
      counter++
      small = false
      if (counter > bet.length - 1) {
        counter = 0
      }
    } else if (dice_value > 10 & small === false) {
       console.log(`I win... dice rolled ${dice_value} small:${small} bet: ${bet[counter]}`)
       total = total + bet[counter]
       console.log(total)
       if (bet[counter] === 50 || 100 || 200) {
         counter = 0
       }
    }
  }
  console.log(total)
}

// 11

play_game(1000)
