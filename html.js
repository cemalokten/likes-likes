function html(input) {
    const body = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=#, initial-scale=1.0">
    <title>Like Likes</title>
</head>
<body>
    <form method="POST">
        <button >Press ${input}</button>
    </form>
</body>
</html>`

return body;

}

module.exports = html;