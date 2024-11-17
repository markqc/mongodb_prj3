//Find the number of employees who failed in any of the three (term1 + term2 + term3) 
db.employees.find({
  $or: [
    { "results": { $elemMatch: { "evaluation": "term1", "score": { $lt: 37 } } } },
    { "results": { $elemMatch: { "evaluation": "term2", "score": { $lt: 37 } } } },
    { "results": { $elemMatch: { "evaluation": "term3", "score": { $lt: 37 } } } }
  ]
}).count();
