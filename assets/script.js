
/*
  Update the credit section of the page
*/

// tell the world I did this
let yourName = "Drew Adams"

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// update name display
credit.textContent = `Created by ${yourName}`

/*
  Initialize our three cookie counters to 0s
*/

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

/*
  Select the Gingerbread elements
*/

// selecting the element with an id of minus-gb
const gbMinusBtn = document.querySelector('#minus-gb')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

let gbQty = document.querySelector("#qty-gb")

/*
  Select the Chocolate Chip elements
*/

// selecting the element with an id of minus-cc
const ccMinusBtn = document.querySelector('#minus-cc')
// selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector('#add-cc')

// select the sugar quantity number (id: qty-sugar)
let ccQty = document.querySelector("#qty-cc")


/*
  Select the Sugar Sprinkle elements
*/

// selecting the element with an id of minus-sugar
const sugarMinusBtn = document.querySelector('#minus-sugar')

// selecting the element with an id of add-sugar
const sugarPlusBtn = document.querySelector('#add-sugar')

// select the sugar quantity number (id: qty-sugar)
let sugarQty = document.querySelector("#qty-sugar")

let totalQty = document.querySelector("#qty-total")

/*
  Helper functions
*/

function calculateTotal(){
    // this function calculates the total of the three sugar types and returns
    // the result
    return gb + cc + sugar
}

/*
  Events to add to the cookie counter
*/

  // Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    gbQty.textContent = gb
    totalQty.textContent = calculateTotal()
})

ccPlusBtn.addEventListener('click', function() {
    cc++
    ccQty.textContent = cc
    totalQty.textContent = calculateTotal()
})

sugarPlusBtn.addEventListener('click', function() {
    sugar++
    sugarQty.textContent = sugar
    totalQty.textContent = calculateTotal()
})


/*
  Events to subtract from the cookie counter
*/

gbMinusBtn.addEventListener('click', function() {
    if (gb > 0) {
        gb--
        gbQty.textContent = gb
        totalQty.textContent = calculateTotal()
    }
})

// TODO: Hook up event listeners for the rest of the buttons
ccMinusBtn.addEventListener('click', function() {
    if (cc > 0) {
        cc--
        ccQty.textContent = cc
        totalQty.textContent = calculateTotal()
    }
})

sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0) {
        sugar--
        sugarQty.textContent = sugar
        totalQty.textContent = calculateTotal()
    }
})