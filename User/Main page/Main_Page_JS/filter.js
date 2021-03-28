//new
function filter(){
    var adminRef = firebase.database().ref("Admin/");
    for(i=0;i<li.length;i++){
        var a = li[i].getElementsByTagName('a')[0];
        if(a.innerText.toUpperCase().indexOf(FilterValue)>-1){
            li[i].style.display="";
        }else{
            li[i].style.display="none";
        }
    }
adminRef.startAt("Andheri").on("child_added", function(data) {
   console.log("Start at filter: " + data.val());
});
}

const queryString = window.location.href;
var url = new URL(queryString);
if(url.searchParams.has("query")){   
    var searchString = url.searchParams.get("query");
    filter();
}else{
    //show all records
}
setTimeout(function(){
    window.location.replace("./<your folder>/<your page>.html?"+"query=Vasai");
}, 1000);