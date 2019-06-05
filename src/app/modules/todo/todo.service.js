const Todo = require('mongoose').model('Todo');
// const Todo =

exports.create = todo => {
  try {
    console.log(todo);

    const _todo = new Todo(todo);
    return new Promise((resolve, reject) => {
      _todo
        .save()
        .then(result => {
          console.log(result);

          resolve(result);
        })
        .catch(err => {
          console.error(err);
          resolve(err);
        });
    });
  } catch (error) {
    return error;
  }
};

exports.list = (skip, limit) => {
  try {
    return new Promise((resolve, reject) => {
      Todo.find({ isActivated: true })
        .skip(Number(skip))
        .limit(Number(limit))
        .then(_todo => resolve(_todo))
        .catch(err => {
          console.log(err);
          resolve(err);
        });
    });
  } catch (error) {
    return error;
  }
};

exports.search = text => {
  try {
    console.log(text);

    return new Promise((resolve, reject) => {
      Todo.find({ $text: { $search: text } })
        .then(_todo => {
          console.log(_todo);
          resolve([false, _todo]);
        })
        .catch(err => {
          console.log(err);
          resolve([err, false]);
        });
    });
  } catch (error) {
    return error;
  }
};
exports.update = (_id, data) => {
  console.log(data);

  try {
    return new Promise((resolve, reject) => {
      Todo.where({ _id: _id })
        .update({ $set: data })
        .then(_todo => resolve([false, _todo]))
        .catch(err => resolve([err, false]));
    });
  } catch (error) {
    return error;
  }
};
exports.delete = (_id, data) => {
  console.log(data);
  try {
    return new Promise((resolve, reject) => {
      Todo.where({ _id: _id })
        .update({ $set: data })
        .then(_todo => resolve([false, _todo]))
        .catch(err => resolve([err, false]));
    });
  } catch (error) {
    return error;
  }
};
