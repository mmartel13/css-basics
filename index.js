        // we could write javascript in here
        document.getElementById('second-heading').innerHTML = 'Hey Class'

        const getDataButton = document.getElementById('get-data')
        getDataButton.addEventListener('click', () => {
            console.log('testing here')

        function displayData(allbeers){
            document.querySelector('pre').innerHTML = JSON.stringify(allbeers, null, 2)
        }

            fetch('https://api.sampleapis.com/beers/ale')
            .then(data => data.json())
            .then(beers => displayData(beers))
            .catch(err => console.log(err))
        })

        function showAlert(){
            alert('hey class we are done!!')
        }

        const alertBtn = document.getElementById('show-alert-btn')

        alertBtn.addEventListener('click', showAlert)