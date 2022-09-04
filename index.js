// code your solution here
function saturdayFun( day = "roller-skate"){
 return `This Saturday, I want to ${day}!`;
}

function mondayWork (fun = "go to the office"){
    return  `This Monday, I will ${fun}.`;
}
mondayWork("replacing the text");

function wrapAdjective( farr = "*"){
    return  function ( name ="Special"){
        return`You are ${farr}${name}${farr}!`;
    };
}



// It should return a function
// This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be:

