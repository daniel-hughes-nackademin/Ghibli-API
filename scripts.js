const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// Replace ./data.json with your JSON feed
fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(movie => {
           //Create a div with a card class
           const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //Create a p and set the text content to the film's description
            const p = document.createElement('p');
            if(movie.description.length > 300){ //limit to 300 chars
                p.textContent = `${movie.description.substring(0, 300)}...` //End description with ...
            }
            else {
                p.textContent = movie.description;
            }

            //Append the cards to the container element
            container.appendChild(card);

            //Each card will contain an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);
        });
        console.log(data); //Logging all the movie info
    })
    .catch(err => {
        // Do something for an error here
        alert(err.toString());
    });