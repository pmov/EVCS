var id = 0;

function addItemsToList(name,address,email,number,machine,data,restro,play,toilet,store,tyre){
    var ul = document.getElementById('list');
    var header = document.createElement('h2');

    var _name = document.createElement('li');
    var _address = document.createElement('li');
    var _email=document.createElement('li');
    var _number = document.createElement('li');
    var _machine = document.createElement('li');
    var _data=document.createElement('li');
    var _restro = document.createElement('li');
    var _play = document.createElement('li');
    var _toilet=document.createElement('li');
    var _store = document.createElement('li');
    var _tyre=document.createElement('li');

    header.innerHTML = '' + (name);
   // header.setAttribute("style","border: red");

    //_name.innerHTML='Name: '+name;
    _address.innerHTML='Address: '+address; 
    _email.innerHTML='Email: '+email; 
    _number.innerHTML='Contact Number : '+number;
    _machine.innerHTML='Number of Machines: '+machine;
    _data.innerHTML='Number Of Cars: '+data;
    _restro.innerHTML='Is there Restaurants nearby 🍔 🍕: '+restro;
    _play.innerHTML='Is there Play-Area nearby ⚽ ⛳: '+play;
    _toilet.innerHTML='Is there Toilet/Restrooms nearby 🚻 : '+toilet;
    _store.innerHTML='General Store 🏬 : '+store;
    _tyre.innerHTML='Tyre Air checking facility 🚗 : '+tyre;
    ul.appendChild(header);
    ul.appendChild(_name);
    ul.appendChild(_address);
    ul.appendChild(_email);
    ul.appendChild(_number);
    ul.appendChild(_machine);
    ul.appendChild(_data);
    ul.appendChild(_restro);
    ul.appendChild(_play);
    ul.appendChild(_toilet);
    ul.appendChild(_store);
    ul.appendChild(_tyre);
}

function FetchAllData(){
    firebase.database().ref('Admin').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().Name;
                let email = ChildSnapshot.val().Email;
                let address = ChildSnapshot.val().Address;
                let number = ChildSnapshot.val().Number;
                let machine = ChildSnapshot.val().Machine;
                let data = ChildSnapshot.val().Data;
                let restro = ChildSnapshot.val().Restaurants;
                let play = ChildSnapshot.val().Play_Area;
                let toilet = ChildSnapshot.val().Toilet;
                let store = ChildSnapshot.val().General_Store;
                let tyre = ChildSnapshot.val().Tyre_Facility;
                addItemsToList(name,address,email,number,machine,data,restro,play,toilet,store,tyre);
            }
        )
    });
}
window.onload(FetchAllData());
