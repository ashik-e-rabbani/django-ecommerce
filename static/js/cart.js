console.log("okk");

var updateBtn = document.getElementsByClassName('update-cart')

for (var i=0; i< updateBtn.length; i++)
{
    updateBtn[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action

        console.log("user: ", user , "product Id:", productId, "Action: ", action)
        if(user === "AnonymousUser"){

        }
        else{
            updateUserOrder(productId,action)  
        }
    })
}

function updateUserOrder(productId, action){
	console.log('User is authenticated, sending data...')

		var url = '/update_item/'

		fetch(url, {
			method:'POST',
			headers:{
				'Content-Type':'application/json',
				'X-CSRFToken':csrftoken,
			}, 
			body:JSON.stringify({'productId':productId, 'action':action})
		})
		.then((response) => {
		   return response.json();
		})
		.then((data) => {
		    location.reload()
		});
}