// Find the Average score of trainees for aggregate (term1 + term2 + term3)     
db.employees.aggregate([
  {
    $project: {
      totalScore: {
        $reduce: {
          input: "$results.score",
          initialValue: 0,
          in: { $add: ["$$value", "$$this"] }
        }
      }
    }
  },
  { $group: { _id: null, avgAggregateScore: { $avg: "$totalScore" } } }
]);
