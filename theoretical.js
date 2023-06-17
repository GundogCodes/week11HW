// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
    // If the length is 0 (base case), return len (0).
    if(str.length === 0){
      return len = 0
    }
    // if (str.length === 0) return len;
    else if (!str.length) return len;
  
    // Remove the first letter of the string
    let restOfString = str.substring(1);
  
    // Call function again, with updated string and len
    return lengthOfString(restOfString, ++len);
  }

  lengthOfString('Gunish')
  
  function sumOfArray(arr, sum = 0 ,count = 0) { //
    // This function returns the sum of all of the numbers in a given array.
   
    if(count>=arr.length){
      console.log('The sum of this array is:', sum)
      return sum
    } else {
      sum = sum + arr[count]
      count++
      
      sumOfArray(arr, sum, count++)
    }
  }
sumOfArray([1,2,3,4,5,6,7])
  
  function findMax(arr, largestNum = 0, index=0) {

    // This function returns the largest number in a given array.
    if(index >= arr.length){
      console.log('largest number is: ',largestNum)
      return largestNum
    } else{
      if(arr[index]> largestNum){
        largestNum = arr[index]
      }
      //console.log('largest number is: ', largestNum)
      //console.log('Index is: ', index)
      index++
      findMax(arr,largestNum,index)
    }

      
  }
  
findMax([3,4,1,5,66,2])

  function factorial(N,f=0,count=0) {
  
    // This function returns the factorial of a given number.
    if(N===0){
      return 
    }else{
      f = N*(N-1) //f =20
      count = count + f //count = 20
      console.log('count is', count)
      factorial(N-1,f,count)
    }
  }

factorial(5)

  function fibonacci(N) {
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    let start = 1
    if(N<=0){
      return 'Not Allowed'
    }else if(N===1){
      return 0
    } else if (N===2){
      return 1
    } else if (N===3){
      return 2
    }else{
      let fib = fibonacci(N-1) + fibonacci(N-2)
      return fib
    }
  }

  console.log(`The fibonacci is, ${fibonacci(4)}`)
  
  function coinFlips(N) {
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    const bigArr = []
    let h = 'H'
    let t = 'T'
    if(false){

    }else{
      let flipArr = []

      for(let i =0; i<N; i++){
        let chance = Math.floor(Math.random() * 2);
        //console.log('chance is ', chance)
        if(chance === 0){
          flipArr.push(h)
          
        } else if(chance === 1){
          flipArr.push(t)
        }
        
        bigArr.push(flipArr)
      }

      console.log(bigArr)
      //coinFlips(N)
    }

  }
  coinFlips(2)

  function letterCombinations() {
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

  }
  
  module.exports = {
    lengthOfString, //done
    sumOfArray,// done
    findMax, //done 
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations,
  };