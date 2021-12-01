var request = new XMLHttpRequest();
request.open('GET', "https://jsonplaceholder.typicode.c/posts")
request.send();
request.onload = function(){
    var data = JSON.parse(this.response)
}
console.log(data)

for (var i=0;data.length>i;i++){
    console.log(data[i])
}
console.log(data[i].id)