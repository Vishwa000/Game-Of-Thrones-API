let container = document.createElement('div')
container.setAttribute('id','cont')
container.classList.add('container')
document.body.appendChild(container)

let h1 = document.createElement('h1')
h1.innerHTML = 'Game Of Thrones'
h1.classList.add('text-center')
document.getElementById('cont').appendChild(h1)

let h3 = document.createElement('h3')
h3.innerHTML = 'Enter Number between 2 to 2122'
h3.classList.add('text-center')
document.getElementById('cont').appendChild(h3)

let img = document.createElement('div')
img.setAttribute('class','bg-image')
document.body.appendChild(img)


let div3 = document.createElement('div')
div3.setAttribute('id','div3')
div3.classList.add("d-flex","justify-content-center")
document.getElementById('cont').appendChild(div3)

let form = document.createElement('form')
form.setAttribute('id','form')
document.getElementById('div3').appendChild(form)


let text1 = document.createElement('input')
text1.setAttribute('id','text1')
text1.innerHTML = 'enter width'
text1.setAttribute('onkeyup','disney(text1.value)')
text1.setAttribute('onkeypress','typing()')
text1.setAttribute('placeholder','Search here')
text1.classList.add('text','text-center')
document.getElementById('form').appendChild(text1)


let div1 = document.createElement('div')
div1.setAttribute('id','div1')
div1.classList.add('result','col-sm-12')
document.getElementById('cont').appendChild(div1)




let Name = document.createElement('p')

let gender = document.createElement('p')

let culture = document.createElement('p')

let born = document.createElement('p')

let died = document.createElement('p')

let titles = document.createElement('p')

let aliases = document.createElement('p')

let father = document.createElement('p')

let mother = document.createElement('p')

let spouse = document.createElement('p')

let tvseries = document.createElement('p')

let playedBy = document.createElement('p')



function disney(a){
	if(a>1 && a<2122){
	let y=parseInt(a)
fetch(`https://www.anapioficeandfire.com/api/characters/${y}`)
.then((x)=>x.json())
.then((res)=>{
	Name.innerHTML = `<span id="style">Name : </span>${res.name}<br>`
	div1.appendChild(Name)

	gender.innerHTML = `<span id="style">Gender : </span>${res.genders}<br>`
	div1.appendChild(gender)

	culture.innerHTML = `<span id="style">Culture : </span>${res.culture}<br>`
	div1.appendChild(culture)

	born.innerHTML = `<span id="style">Born : </span>${res.born}<br>`
	div1.appendChild(born)

	died.innerHTML = `<span id="style">Died : </span>${res.died}<br>`
	div1.appendChild(died)

	titles.innerHTML = `<span id="style">Enemies : </span>${res.titles}<br>`
	div1.appendChild(titles)

	aliases.innerHTML = `<span id="style">Aliases : </span>${res.aliases}<br>`
	div1.appendChild(aliases)

    father.innerHTML = `<span id="style">Father : </span>${res.father}<br>`
	div1.appendChild(father)

    mother.innerHTML = `<span id="style">Mother : </span>${res.mother}<br>`
	div1.appendChild(mother)

    spouse.innerHTML = `<span id="style">Spouse : </span>${res.spouse}<br>`
	div1.appendChild(spouse)

    tvseries.innerHTML = `<span id="style">Tv series : </span>${res.tvSeries}<br>`
	div1.appendChild(tvseries)

    playedBy.innerHTML = `<span id="style">Played By : </span>${res.playedBy}<br>`
	div1.appendChild(playedBy)
	

})
	}	
	else if(a>2122)
alert("please enter number between 2 - 2122")
}

function typing(){
	let show = document.getElementById("result");
	if(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*"){
	   show.value += key;
	}
	else if(event.key==="Enter"){
		equal();
	}
	else{
	 alert("type only numbers");
	  event.preventDefault();
	}
 }