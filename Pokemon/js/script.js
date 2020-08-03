$(function(){

    let shuffleTime
    let number
    
    $('#btStart').click(() => {
        shuffleTime = parseInt(prompt('How much in second you wanna shuffle your luck ?', 2))
        if (isNaN(shuffleTime) || shuffleTime <= 0) {
            alert('-> Please input only number !\n-> And make sure you input more than 0 Second, its our rule !')
        } else {
            catchUp(shuffle())
        }
    })

    $(window).keyup(e => {
        if (e.code == 'Enter') {
            $('#btStart').click()
        }
    })

    function shuffle(){
        $('#btStart').html('Shuffling ...')
        return setInterval(() => {
            number = Math.round(Math.random() * 10) 
            $('#image').attr('src', `src/${number}.png`)
        }, 100)
    }

    function catchUp(handler){

        setTimeout(() => {

            clearInterval(handler)

            $('#recentPokemon').append(`
            <li>
                <img src="src/${number}.png" class="log-image" alt="" height="100px">
            </li>`)

            $('#btStart').html('Start !')

        }, shuffleTime * 1000)

    }
})