var ool = document.getElementById('ol');
var oli = ool.getElementsByTagName('li');
var inner = document.getElementById('inner');
var shut = document.getElementById('shut');
var after = document.getElementById('after');
var before = document.getElementById('before');

for(var i=0;i<oli.length;i++){
    oli[i].onclick = function(){
        
        for(var i=0;i<oli.length;i++){
            oli[i].className = 'iconfont';
        }
        this.className = 'iconfont active';
    }
}