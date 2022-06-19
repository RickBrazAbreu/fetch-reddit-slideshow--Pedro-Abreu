const container = document.querySelector('.container')
const btnsubmit = document.querySelector('#btnsubmit')

const btnStopPicture = document.querySelector('#btnStopPicture')
const Input = document.querySelector('searchbar')

let ShowBoxPicture= document.querySelector('.box-hold-picture')
const form = document.querySelector('#form')


btnsubmit.addEventListener('click',  () => {
    container.style.display = 'block'  //aki tem que ser chamado pela class, pq a class foi chamada no css
    console.log('mostrando foto')
})

btnStopPicture.addEventListener('click', () => {
    container.style.display = 'none'
})

const onGetPictureSuccess = (pictureArray) => {
   
    console.log(pictureArray)
    pictureArray.data.children.forEach(fotos => {

        const newbox = document.querySelector('#boxpicture')
        const btnShowPicture = document.querySelector('#btnShowPicture')
    
   
    newbox.innerHTML = `
    <img src="${pictureArray.data.children[input.value].data.url}"></img>
    `

    document.getElementById('boxpicture').appendChild(newbox)

    //aki quando clicar showpicture
    btnShowPicture.addEventListener('click',showPicture)
    console.log(numPictures)
    console.log('on Success')

    })
    

}

const onGetPictureFailure = () => {
  //  console.log('fail')
}

// document.addEventListener('DOMContentLoaded', () =>{
//    // fetch(`https://www.reddit.com/r/pics/.json?q=${pictureNumber}+nsfw:no+type:image`)

//     // .then(res  => res.json())
//     // .then(onGetPictureSuccess)
//     // .catch(onGetPictureFailure)

// })


//listen for a submit event and run said block of code
//prevent to refresh the whole page
form.addEventListener('submit', (event) =>{
    //prevent to refrresh the whole page
    event.preventDefault()

    const pictureNumber = input.value


    fetch(`https://www.reddit.com/r/pics/.json?q=${pictureNumber}+nsfw:no+type:image`)
    .then(res  => res.json())
    .then(onGetPictureSuccess)
    .catch(onGetPictureFailure)

    console.log('woot')
})





// let numPictures = 15


// const onShowPicturesSuccess = (fotos) =>{
//     console.log(fotos)
// }
// const onShowPicturesFailure = () =>{
//     console.log('failure')
// }



// const showPicture = (event) =>{
//     const fotosURL = event.target.getAttribute('data-url')
//     console.log(fotosURL)

//     fetch(fotosURL)
//     //turn you response obj in json
//     .then(res => res.json())
//     //in success
//     .then(onShowPicturesSuccess)
//     //in failure
//     .catch(onShowPicturesFailure)

// }



// const newbox = document.createElement('div')
    // newbox.classList.add('box-hold-picture')
    // newbox.setAttribute('id', 'boxholdPicture')

    // let images = pictureArray.data.children[numPictures].data.url

    // if(images < images.length - 1){
    //     images++;
    // }else{
    //     images = 0;
    // }
    // setTimeout("onGetPictureSuccess()" , 4000)
    // form.addEventListener('submit', (event) =>{
    //     //prevent to refrresh the whole page
    //     event.preventDefault()
    //     //const pictureNumber = input.value
    //     //fetch(pictureArray.data.children[pictureNumber].data.url)
    //     let numPictures = input.value
    //     console.log('woot')
    // })

//call div  to click and show picture
//const btnShowPicture = document.getElementById('btnShowPicture')
//const boxholdPictures = document.getElementById('boxpicture')


// function reloadPage(){
//     ++numPictures
//     const boxholdpic = document.getElementById('boxholdPicture')
//     $("#boxholdPicture").load("#boxholdPicture");
//    // $(ShowBoxPicture).load(window.location.href + ".box-hold-picture")
//    // $('.box-hold-picture').load(self);
//     //window.location.reload();
//     //++numPictures
//     console.log(numPictures)
// }

// Some sort of title
// A short description telling the user what to do
// A blank text field
// A Button ("start" or "go" or "search")

//let numPictures = $('#searchbar').val();



//const seePictures = document.querySelector('#')

// window.onbeforeunload = function(beforeWindow){
//     localStorage.setItem("numPictures",$('#searchbar').val())
// }

// window.onload = function(afterWindow){
//     var namep = localStorage.getItem("numPictures");
//     if (namep !== null ) $('#searchbar').val("numPictures")
// }

// function reloadPage(event){
//     window.location.reload();
//     ++numPictures
//     console.log(numPictures)
// }