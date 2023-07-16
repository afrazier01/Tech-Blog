const addComment =  async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();

    if (comment) {
        const response = await fetch('/', {
            method: 'GET',
            header: {'Content-Type': 'application/json'}
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data)
        })


    }
}