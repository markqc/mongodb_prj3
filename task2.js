// Find employees who failed in aggregate (term1 + term2 + term3) 
db.employees.find({
  $where: "this.results.reduce((sum, term) => sum + term.score, 0) < 111"
});
