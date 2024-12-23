// 1. Find count and percentage of employees who failed in term 1, the passing score being 37 
// Count of employees who failed in term1
function calculateFailedTerm1Percentage() {
  // Count of employees who failed in term1
  var failedTerm1Count = db.employees.countDocuments({
    "results": { $elemMatch: { "evaluation": "term1", "score": { $lt: 37 } } }
  });
  // Total count of employees
  var totalCount = db.employees.countDocuments();

  // Calculate percentage
  var failedTerm1Percentage = (failedTerm1Count / totalCount) * 100;

  print("Failed in Term 1 Count:", failedTerm1Count);
  print("Failed in Term 1 Percentage:", failedTerm1Percentage);
}

// Call the function
calculateFailedTerm1Percentage();
