//Find number of employees who failed in all the three (term1 + term2 + term3) 
db.employees.find({
  $and: [
    { "results": { $elemMatch: { "evaluation": "term1", "score": { $lt: 37 } } } },
    { "results": { $elemMatch: { "evaluation": "term2", "score": { $lt: 37 } } } },
    { "results": { $elemMatch: { "evaluation": "term3", "score": { $lt: 37 } } } }
  ]
}).count();
