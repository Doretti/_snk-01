const box = document.getElementById('box')

let boxes = []
let userIndex = null
fillBox()
function fillBox() {
    const centerArr = [210, 211, 230, 231]
    const center = Math.floor(Math.random() * 4)

    for (let i = 1; i <= 400; i++) {
        const localBox = document.createElement('div')
        localBox.innerHTML = `
            <span></span>
        `
        localBox.classList.add('inner-box')
        if (Math.floor(Math.random() * 101) % 3 === 0) {
            localBox.classList.add('rock')
        }
        if (i == centerArr[center]) {
            localBox.classList.remove('rock')
            localBox.classList.add('user')
            userIndex = i
        }
        boxes.push(
            localBox
        )
    }

    boxes.forEach(item => {
        box.appendChild(item)
    })
}

let obj = {
    'a': 'left',
    's': 'bottom',
    'd': 'right',
    'w': 'top'
}
const iboxes = document.getElementsByClassName('inner-box')

document.addEventListener('keypress', (e) => {
    if (obj[e.key]) {
        if (iboxes[userIndex - 2].classList.contains('rock') && obj[e.key] == 'left') {
            return
        }
        if (iboxes[userIndex].classList.contains('rock') && obj[e.key] == 'right') {
            return
        }
        if (userIndex - 21 >= 0 && iboxes[userIndex - 21].classList.contains('rock') && obj[e.key] == 'top') {
            return
        }
        if (userIndex + 19 <= 400 && iboxes[userIndex + 19].classList.contains('rock') && obj[e.key] == 'bottom') {
            return
        }
        iboxes[userIndex - 1].classList.remove('user')
    }
    switch (obj[e.key]) {
        case 'left':
            iboxes[userIndex - 2].classList.add('user')
            userIndex -= 1
            break;
        case 'right':
            iboxes[userIndex].classList.add('user')
            userIndex += 1
            break;
        case 'top':
            if (userIndex - 21 >= 0) {
                iboxes[userIndex - 21].classList.add('user')
                userIndex -= 20
            }
            break;
        case 'bottom':
            if (userIndex + 19 <= 400) {
                iboxes[userIndex + 19].classList.add('user')
                userIndex += 20
            }
            break;
    }
})


// document.addEventListener('keypress', (e) => {
//     if (e.key == 'a') {
//         deg -= 3
//     }
//     if (e.key == 'd') {
//         deg += 3
//     }
//     if (deg >= 360) {
//         deg = deg % 360
//     }
//     if (deg <= 360) {
//         deg = 360 - (deg * -1)
//     }
//     if (deg >= 90 && deg <= 179) {
//         obj = {
//             '2': 'left',
//             '4': 'top',
//             '8': 'right',
//             '6': 'bottom'
//         }
//     }
//     if (deg >= 180 && deg <= 269) {
//         obj = {
//             '2': 'left',
//             '4': 'top',
//             '8': 'right',
//             '6': 'bottom'
//         }
//     }
//     if (deg >= 270 && deg <= 359) {
//         obj = {
//             '2': 'left',
//             '4': 'left',
//             '8': 'right',
//             '6': 'bottom'
//         }
//     }
//     if (deg >= 0 && deg <= 89) {
//         obj = {
//             '4': 'left',
//             '2': 'bottom',
//             '6': 'right',
//             '8': 'top'
//         }
//     }
//     box.style = `transform: scale(1.1) rotateZ(${deg}deg);`
// })

// setInterval(() => {
//     box.innerHTML = ''
//     fillBox()
// }, 500)