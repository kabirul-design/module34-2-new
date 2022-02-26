const buddyUser = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayUser(data))
}
buddyUser();

const displayUser = data => {
    const buddies = data.results;
    const userContainer = document.getElementById('user-buddy');
    for(const buddy of buddies){
        const showData = document.createElement('div');
        console.log(buddy);
        showData.innerText = `Name : ${buddy.name.first} ${buddy.name.last}  Email : ${buddy.email} gender : ${buddy.gender} location: ${buddy.location}`;
        userContainer.appendChild(showData);
    }
}