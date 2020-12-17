export default function onDelete (id) {
    const accessToken = sessionStorage.getItem('token');
    var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
 method: 'DELETE',
 headers: myHeaders,
 redirect: 'follow'
};
      fetch(`https://callboard-backend.herokuapp.com/call/favourite/${id}`, requestOptions)
       .then(response => response.json())
       .then(result => console.log(result))
       .catch(error => console.log('error', error));
    } 