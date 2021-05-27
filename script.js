var content = 'x';
var winnertitle = document.getElementsByTagName('h2')[0]
// console.log(winnertitle);
var arr = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
    // [1, 4, 7],
    // [2, 5, 8],
    // [3, 6, 9]    
]

// here we will see that if var equals true it will be user turn
// if var equal false it will Player2 turn
var turn = true
function game() {
    function Anywin(cont) {
        // here cont is to check user 
        if ((arr[0][0] == cont && arr[1][0] == cont && arr[2][0] == cont) ||
            (arr[0][1] == cont && arr[1][1] == cont && arr[2][1] == cont) ||
            (arr[0][2] == cont && arr[1][2] == cont && arr[2][2] == cont) ||

            (arr[0][0] == cont && arr[0][1] == cont && arr[0][2] == cont) ||
            (arr[1][0] == cont && arr[1][1] == cont && arr[1][2] == cont) ||
            (arr[2][0] == cont && arr[2][1] == cont && arr[2][2] == cont) ||

            (arr[0][0] == cont && arr[1][1] == cont && arr[2][2] == cont) ||
            (arr[0][2] == cont && arr[1][1] == cont && arr[2][0] == cont)
        ) {
            if (cont == 'x') {
                winnertitle.innerHTML = "Player1 win"
                setInterval(() => {
                    window.location.replace('index.html')
                }, 2000);
                game()
            }
            else {
                winnertitle.innerHTML = "Player2 win"
                setInterval(() => {
                    window.location.replace('index.html')
                }, 2000);
                game()
            }
        }
    }

    var temp = document.querySelectorAll('.square')
    temp.forEach(element => {
        element.addEventListener('click', () => {
            if (turn == 1) {
                content = 'x'
                if (element.innerHTML != 'o') {
                    console.log(element.classList[0]);
                    element.innerHTML = content
                    switch (element.classList[0]) {
                        case 'first':
                            arr[0][0] = content
                            break;
                        case 'second':
                            arr[0][1] = content
                            break;
                        case 'third':
                            arr[0][2] = content
                            break;
                        case 'fourth':
                            arr[1][0] = content
                            break;
                        case 'fifth':
                            arr[1][1] = content
                            break;
                        case 'six':
                            arr[1][2] = content
                            break;
                        case 'seven':
                            arr[2][0] = content
                            break;
                        case 'eight':
                            arr[2][1] = content
                            break;
                        case 'ninth':
                            arr[2][2] = content
                            break;
                    }
                    // check anyone completed or not
                    Anywin(content)
                    turn = 0
                }
            }
            else {
                content = 'o'
                if (element.innerHTML != 'x') {
                    element.innerHTML = content
                    console.log(element.classList[0]);
                    switch (element.classList[0]) {
                        case 'first':
                            arr[0][0] = content
                            break;
                        case 'second':
                            arr[0][1] = content
                            break;
                        case 'third':
                            arr[0][2] = content
                            break;
                        case 'fourth':
                            arr[1][0] = content
                            break;
                        case 'fifth':
                            arr[1][1] = content
                            break;
                        case 'six':
                            arr[1][2] = content
                            break;
                        case 'seven':
                            arr[2][0] = content
                            break;
                        case 'eight':
                            arr[2][1] = content
                            break;
                        case 'ninth':
                            arr[2][2] = content
                            break;
                    }
                    console.log(arr);
                    // check anyone won or not
                    Anywin(content)
                    turn = 1
                }
            }
        })
    });
}
game()