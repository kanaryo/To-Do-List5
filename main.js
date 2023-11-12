let addToDoButton = document.getElementById('addToDo'); //id=addToDoタグのエレメントを取得する
let toDoContainer = document.getElementById('toDoContainer');//id=toDoContainerタグのエレメントを取得する
let inputField = document.getElementById('inputField');//id=inputFieldタグのエレメントを取得する

addToDoButton.addEventListener('click',function(){ //addToDo Elementオブジェクトに対して、イベントリスナを登録する、イベントタイプはクリック
    var paragraph = document.createElement('p');　// pタグで囲まれたelementを作成する
    paragraph.classList.add('paragraph-styling');　//paragraphオブジェクト（pエレメント）にクラスを追加する。
    paragraph.innerText = inputField.value;　//paragraphオブジェクト内のinnertextプロパティにアクセスしてエレメント内のテキストを取得する、inputタグエレメントのvalue属性にアクセスしてテキストを取得した
    toDoContainer.appendChild(paragraph);//toDoContainerの子要素として、paragraph要素を追加する
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration ="line-through"
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
})
})

