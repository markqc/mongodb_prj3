db.employees.insertMany([
  {
    "_id": 2,
    "name": "Alice Brown",
    "results": [
      { "evaluation": "term1", "score": 42.0 },
      { "evaluation": "term2", "score": 38.5 },
      { "evaluation": "term3", "score": 47.2 }
    ]
  },
  {
    "_id": 3,
    "name": "Michael Green",
    "results": [
      { "evaluation": "term1", "score": 29.3 },
      { "evaluation": "term2", "score": 33.4 },
      { "evaluation": "term3", "score": 21.8 }
    ]
  },
  {
    "_id": 4,
    "name": "Sophia Lee",
    "results": [
      { "evaluation": "term1", "score": 50.6 },
      { "evaluation": "term2", "score": 55.2 },
      { "evaluation": "term3", "score": 60.9 }
    ]
  }
]);
