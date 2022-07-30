document.addEventListener('DOMContentLoaded', ()=>{

    // Random joke

    document.querySelector('#btn').addEventListener('click', async ()=>{
        fetch('https://icanhazdadjoke.com?limit=1', {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('.base').innerHTML = data.joke;
        }).catch(err => {
            alert(`Error: ${err}`)
        })
    })

    // Jokes based on keyword

    document.querySelector('#search').addEventListener('click', async ()=>{
        let keyword = document.querySelector('#input').value
        let randomNo = 0;
        fetch(`https://icanhazdadjoke.com/search?term=${keyword}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            let randomNo = Math.floor(Math.random() * data.results.length)
            if (data.results.length === 0) {
                document.querySelector('.base').innerHTML = 'There are no jokes with this keyword';
            }else{
                document.querySelector('.base').innerHTML = data.results[randomNo].joke;
            }
        }).catch(err =>{
            alert(`Error: ${err}`);
        })
    })

})