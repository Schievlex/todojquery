<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>TodoList</title>
  <style>
    body {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 18px;
    }

    .container {
      margin: 20px auto;
      width: 500px;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
    }

    h1 {
      text-align: center;
    }

    form {
      padding: 0 0 20px;
    }

    input#new-todo {
      display: block;
      width: 478px;
      border-radius: 3px;
      border: 1px solid #e6e6e6;
      padding: 10px;
      font-size: 18px;
    }

    ul#todolist {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    ul#todolist li {
      padding: 5px;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
    }

    ul#todolist li:hover {
      background-color: #e6e6e6;
    }

    ul#todolist .todo.completed label {
      text-decoration: line-through;
      color: #999;
    }

    .footer {
      margin-top: 10px;
      background: #323232;
      color: #e6e6e6;
      padding: 5px;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    .footer a:link,
    .footer a:hover,
    .footer a:visited {
      color: #e6e6e6;
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>TodoList</h1>

    <form>
      <input type="text" id="new-todo" placeholder="What needs to be done?">
    </form>

    <ul id="todolist">
      <li class="todo">
        <input id="todo-1" type="checkbox">
        <label for="todo-1">Sweep the floor</label>
      </li>
      <li class="todo completed">
        <input id="todo-2" type="checkbox" checked="checked">
        <label for="todo-2">Dust the vases</label>
      </li>
    </ul>
    <div class="footer">
      Todo: <span id="todo-count">1</span> •
      Done: <span id="completed-count">0</span> •
      Total: <span id="total-count">1</span>
    </div>
  </div>

  <script>
  	// JavaScript here...
  </script>
</body>
</html>
