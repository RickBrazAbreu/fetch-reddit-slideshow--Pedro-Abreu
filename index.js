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





