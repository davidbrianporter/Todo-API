var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: 'Meet friend for lunch',
  completed: false
}, {
  id: 2,
  description: 'Go to grocery store',
  completed: false
}, {
  id: 3,
  description: 'Get new job',
  completed: true
}];

//app.* is the instance of express get is the HTTP request method
// When the / route is matched the res handler function is called
app.get('/', function (req, res) {
  res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
  res.json(todos);
});

// GET /todos/:ID
app.get('/todos/:id', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  var matchedTodo;

    // Iterate over todos array. Find the matching id
    todos.forEach(function (todo) {
      if (todoId === todo.id) {
        matchedTodo = todo;
      }
    });

    if (matchedTodo) {
      res.json(matchedTodo);
    } else {
      res.status(404).send();
    }
});

app.listen(PORT, function () {
  console.log('Express listening on port ' + PORT + '!');
});
