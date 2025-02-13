let friends = [];


function add(){
    let inputFriendName = document.getElementById('friend-name');
    let nameList = document.getElementById('friends-list');

    if(friends.includes(inputFriendName.value)){
        alert("That name's already included! You may try using a surname instead.");
    } else {
        if(inputFriendName.value == ''){
            alert("Please, type a valid name!");
        } else {
            friends.push(inputFriendName.value);
            if(nameList.textContent == ''){
                nameList.textContent = inputFriendName.value;
            } else{
                nameList.textContent = nameList.textContent + `, ` + inputFriendName.value;
            }
            inputFriendName.value = '';
        }
    }
};

function raffle(){
    if(friends.length > 1 && friends.length %2 == false){
        shuffle(friends);
        let raffle = document.getElementById("raffle-list");
    
        for (let i = 0; i < friends.length; i++){
          
            if(i == friends.length - 1 ){
                raffle.innerHTML = raffle.innerHTML + friends[i] + ' --> ' + friends[0] + '<br>';
           } else {       
                raffle.innerHTML = raffle.innerHTML + friends[i] + ' --> ' + friends[i + 1] + '<br>';
           }
        }
    } else{
        alert('You neither can raffle a single person nor an odd value of persons! Please add more persons and try again with an even value of persons.');
    }
};

function shuffle(list){
    for (let index = list.lenght; index; index --){
        const randomIndex = Math.floor(Math.random * index);
        [list[index - 1]], list[randomIndex] = [list[randomIndex]], list[index - 1];
    }
};

function restart(){
    document.getElementById("raffle-list").innerHTML = '';
    document.getElementById('friends-list').innerHTML = '';
    friends = [];
};

function removeFriend(){
    let friend = friends[-1];
    friends.pop(friend);
    let nameList = document.getElementById('friends-list');
    nameList.textContent = friends;
};
