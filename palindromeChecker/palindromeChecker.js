let palindrome = (str) => {

  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let result = false;
  let reversedStr = '';
  let splited = str.split('');
  for(let i = splited.length-1; i>=0; i--) {
    reversedStr += splited[i];    
  }
  if (str === reversedStr) {
    result = true;
  }
  
  return result;
}

console.log(palindrome('radar'));