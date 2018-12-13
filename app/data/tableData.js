// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    Name: "Ahmed",
    Photo: "ahmed@example.com",
    Scores: [6,4,8,3,1,8,7,6,1,8]
    
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
