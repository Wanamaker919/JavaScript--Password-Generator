// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
 // var password = "";
  //var passwordText = document.querySelector("#password");
  //var generatePassword = values(random);
  
  

 // passwordText.value = password;

}
var values = "abcdefghijklmnopqrstuvwxyz1234567890"
for (var i =0; i <= generateBtn; i++)
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1 )));
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//document.getElementById("length").innerHTML = "Length: 25";

var rand = function(min, max) {
  return Math.random() * (max - min) + min;
};

var getRandomItem = function(list, weight) {
  var total_weight = weight.reduce(function (prev, cur, i, arr) {
      return prev + cur;
  });
   
  var random_num = rand(0, total_weight);
  var weight_sum = 0;
  //console.log(random_num)
   
  for (var i = 0; i < list.length; i++) {
      weight_sum += weight[i];
      weight_sum = +weight_sum.toFixed(2);
       
      if (random_num <= weight_sum) {
          return list[i];
      }
  }
   
  // end of function
};

var list = ['javascript', 'php', 'ruby', 'python'];
var weight = [0.5, 0.2, 0.2, 0.1];
var random_item = getRandomItem(list, weight);
var weighed_list = 

console.log(random_item);
var random_check = {
  javascript: 0,
  php: 0,
  ruby: 0,
  python: 0
};

var random_num
  , item;

for (var i = 0; i < 10000; i++) {
  random_num = rand(0, weighed_list.length-1);
  item = weighed_list[random_num];
  ++random_check[item];
}

console.log(random_check);