var gotJob = false;
var moenySaved = 250000;
var hasFlat = false;
var hasHouse = true;

if(gotJob == true && moenySaved > 200000) {
    console.log('cholo biya kore fali');
}
else{
   console.log('tor kopale biya nai');
}


if(gotJob == true && moenySaved > 200000 && hasFlat == true) {
    console.log('cholo biya kore fali');
}
else{
   console.log('tor kopale biya nai');
}


if((gotJob == true && moenySaved > 200000) || hasHouse == true ) {
    console.log('cholo biya kore fali');
}
else{
   console.log('tor kopale biya nai');
}