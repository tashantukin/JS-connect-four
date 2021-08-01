document.addEventListener('DOMContentLoaded', () =>
{
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')

    let currentPlayer = 1
    

    //fucntion listen up evtm we click a square in our grid


    //loop over a square

    for (var i = 0, len = squares.length; 1 < len; i++)
        
    (function (index)
    {
        //add an onclick to each square in your grid
        squares[i].onclick = function ()
        {
            //if the square below your current square is taken, you can go ontop of it

            if (squares[index + 7].classList.contains('taken')) {
                if (currentPlayer === 1) {
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-one')

                    //change the player

                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if (currentPlayer == 2) {

                     squares[index].classList.add('taken');
                    squares[index].classList.add('player-two')

                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }

                //if the square below is taken, you cant go here

            } else {
                alert('CANT GO HERE')
            }
        }


    })(i)


})