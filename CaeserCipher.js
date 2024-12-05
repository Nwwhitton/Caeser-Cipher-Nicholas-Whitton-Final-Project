let form = document.getElementById('myForm') // Form element (for the button press)
let display = document.getElementById('display') // Where the letters will be appended to
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
form.addEventListener('submit', function(event){ // Event listener for the submission of the form
    display.innerHTML = "" // Reset the output every submission
    let input = document.getElementById('Message').value.toLowerCase() // Get user input for message
    let shift = document.getElementById('ShiftBy').value // Shift by number
    let direction = document.getElementById('RorL').value // Right or Left
    let EorD = document.getElementById('EorD').value // Encrypt or Decrypt
    event.preventDefault()

    for (let i=0; i<input.length; i++){ // Iterate through user input
        
        for (let abet = 0; abet < alphabet.length; abet++){ 
            if (input[i] == " "){ // If the input is a space it will be a space

                display.innerHTML += " "

            } else if (input[i] == alphabet[abet]) { // If the index of the input is equal to a letter in the array it

                if (EorD == 'Encrypt'){   // Encrypt

                    if (direction == 'Right') { // Encrypt Right

                        let ShiftingBy = parseInt(numbers[abet])+parseInt(shift) -1
                        if (ShiftingBy > 25) {
                            ShiftingBy %= 26
                        } 

                        display.innerHTML += alphabet[ShiftingBy]

                    } else if (direction == 'Left') { // Encrypt Left

                        let ShiftingBy = numbers[abet]-1-shift
                        if (ShiftingBy < 0) {
                            ShiftingBy = 26 + ShiftingBy
                        } 

                        display.innerHTML += alphabet[ShiftingBy]
                    } else {

                        display.innerHTML += "Stuff Broke"

                    }
                } else if (EorD == 'Decrypt'){ // Decrypt

                    if (direction == 'Right') { // Decrypt Right

                        let ShiftingBy = numbers[abet]-1-shift
                        if (ShiftingBy < 0) {
                            ShiftingBy = 26 + ShiftingBy
                        } 

                        display.innerHTML += alphabet[ShiftingBy]

                    } else if (direction == 'Left') { // Decrypt Left

                        let ShiftingBy = parseInt(numbers[abet])+parseInt(shift)-1
                        if (ShiftingBy > 25) {
                            ShiftingBy %= 26
                        } 

                        display.innerHTML += alphabet[ShiftingBy]

                    } else {

                        display.innerHTML += "Stuff Broke"

                    }

                }
                
            }

        }

    }

})