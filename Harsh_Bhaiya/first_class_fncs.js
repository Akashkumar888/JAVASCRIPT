
// first class fncs

// ✅ Functions can be assigned to variables

// ✅ Passed as arguments to other functions

// ✅ Returned from other functions

// ✅ Stored in arrays/objects


var akash=function (){
  console.log('Hello...');
};

akash();


function abcd(a){
 a();
}

abcd(function(){console.log('Hii...');});

