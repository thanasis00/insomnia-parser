<html>
  <head>
    <meta charset="UTF-8">
    <style>
      table {
        border-collapse: collapse;
      }
      td,th {
        border: 1px solid #eee;
        text-align: left;
        padding: 8px;
      }
    </style>
  </head>
  <body>
    <h1>New listings below!</h1>
    <table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Description</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {{#listings}}
        <tr>
        </tr>
        <tr>
          <td><a href="{{url}}"><img src="{{img}}" height="200"/></a></td>
          <td>
            <h2>{{title}}</h2>
            <h4>{{date}}</h4>
            <p>{{desc}}</p>
          </td>
          <td><b>{{price}}</b></td>
        </tr>
        {{/listings}}
      </tbody>
    </table>
  </body>
</html>