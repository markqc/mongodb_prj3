// Employees failing in aggregate
db.employees.find({
  $where: "this.results.reduce((sum, term) => sum + term.score, 0) < 111"
});
