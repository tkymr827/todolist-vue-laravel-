<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TodoList</title>
    <link rel="stylesheet" href="{{mix('css/style.css')}}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">

</head>

<body>
    <div id="app">
        <h1 @click="sample">TodoList</h1>
        <div class="textarea">
            <input type="text" placeholder="内容" v-model="text">
            <button class="btn btn-post" @click="post">送信</button>
            <button class="btn btn-alldel" @click="alldel">全部消す</button>
        </div>
        <div class="list">
            <ul>
                <li v-for="(list,index) in lists" :key="index"><input type="checkbox" id="check"><label for="check">@{{list}}</label><i class="fas fa-times" @click="delone(index)"></i></li>
            </ul>
        </div>

    </div>
    <script src="{{mix('js/main.js')}}"></script>
</body>

</html>