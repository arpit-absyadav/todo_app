const Todo = require('./../todo.controller');
test('Todo create api test', () => {
  expect(
    Todo.create({
      name: 'Test Todo',
      description: 'Create Test todo ',
      date: '03/03/1994'
    })
  ).toMatch('Created successfully');
});

test('Todo list api test', () => {
  expect(Todo.list(0, 5)).toMatch();
});

test('Todo search api test', () => {
  expect(
    Todo.search({
      text: 'arpit'
    })
  ).toMatch();
});
test('Todo update api test', () => {
  expect(
    Todo.update({
      _is: 'adsgasg',
      isComplete: true
    })
  ).toMatch('Updated  successfully');
});
