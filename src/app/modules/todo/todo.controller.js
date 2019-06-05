const Todo = require('./todo.service');
exports.create = async (req, res, next) => {
  try {
    console.log(req.body);

    let todo = await Todo.create(req.body);
    if (todo) {
      let _todo = JSON.parse(JSON.stringify(todo));

      res.status(200).json('Created successfully');
    } else res.status(500).json('Something went wrong');
  } catch (error) {
    next(error);
  }
};

exports.list = async (req, res, next) => {
  try {
    let todo = await Todo.list(req.params.skip, req.params.limit);
    if (todo) {
      let _todo = JSON.parse(JSON.stringify(todo));

      res.status(200).json(_todo);
    } else res.json('Something went wrong');
  } catch (error) {
    next(error);
  }
};
exports.search = async (req, res, next) => {
  try {
    console.log(req.params.text);

    let [err, todo] = await Todo.search(req.params.text);
    if (!err) {
      console.log(todo.length);

      if (todo.length !== 0) {
        let _todo = JSON.parse(JSON.stringify(todo));
        res.status(200).json(_todo);
      } else {
        res.json('Not Found');
      }
    } else if (err.name === 'ValidationError') {
      res.json('Something went wrong');
    }
  } catch (error) {
    next(error);
  }
};
exports.update = async (req, res, next) => {
  console.log('update');
  console.log(req.body);

  try {
    let [err, todo] = await Todo.update(req.body._id, {
      isComplete: req.body.isComplete
    });
    if (!err) {
      let _todo = JSON.parse(JSON.stringify(todo));

      res.json('updated  successfully');
    } else if (err.name === 'ValidationError') {
      res.json('Something went wrong');
    }
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  console.log('delete');
  console.log(req.body);

  try {
    let [err, todo] = await Todo.update(req.body._id, {
      isComplete: req.body.isComplete
    });
    if (!err) {
      let _todo = JSON.parse(JSON.stringify(todo));

      res.json('Deleted Succesfully  successfully');
    } else if (err.name === 'ValidationError') {
      res.json('Something went wrong');
    }
  } catch (error) {
    next(error);
  }
};
