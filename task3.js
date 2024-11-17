db.employees.aggregate([
  { $unwind: "$results" },
  { $match: { "results.evaluation": "term1" } },
  { $group: { _id: null, avgScore: { $avg: "$results.score" } } }
]);