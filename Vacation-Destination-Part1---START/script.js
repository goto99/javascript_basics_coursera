(function(){
    'use strict';

    var detailsForm = document.getElementById('destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event){
        event.preventDefault();

        // 1. extract the value from each form field
        // 2. clear out the form fields
        // 3. run a function that creates the new card
        // 4. if needed, change the header at the top of the destination list
        // 5. add the card
        
        // 1.学习如何从提交的表单中快速获取输入的值！
        const destName = event.target.elements['name'].value;
        const destLocation = event.target.elements['location'].value;
        const destPhoto = event.target.elements['photo'].value;
        const destDescription = event.target.elements['description'].value;

        // 2. 学习如何重置/清空表单！
        for (let i=0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        let destCard = createDestinationCard(destName, destLocation, destPhoto, destDescription);

        let wishListContainer = document.getElementById('destinations_container');
        if (wishListContainer.children.length === 0) {
            document.getElementById('title').innerHTML = "My Wish List";
        }

        wishListContainer.appendChild(destCard);
    }

    function createDestinationCard(name, location, photoURL, desc) {
        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.alt = name;
        // img.setAttribute('alt', name);

        if (photoURL.length === 0) {
            img.src = "images/signpost.jpg";
        } else {
            img.src = photoURL;
        }
        card.appendChild(img);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        let cardSubtitle = document.createElement('h4');
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

        if (desc.length !== 0) {
            let cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = desc;
            cardBody.appendChild(cardText);
        }

        let cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = "Remove";

        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(event) {
        event.preventDefault();

        let card = event.target.parentElement.parentElement;
        card.remove();
    }

})();