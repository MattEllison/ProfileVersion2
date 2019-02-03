window.onload = function () {

    document.querySelector('.menu_button').addEventListener('click', (event) => {
        console.log(event.target)
        event.target.closest('.menu_button').classList.toggle('active')
    })
}

