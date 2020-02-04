// add solution here
function theBeatlesPlay(musicians, instruments) {
  // creating an empty variable
  var statements = [];
  // for loop (iterating through musicians)
  for(var i = 0; i < musicians.length; i++) {
    statements.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return statements;

}

theBeatlesPlay([], []);
