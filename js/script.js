let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let ascii = $.querySelector('#ascii')
let keyCode = $.querySelector('#keyCode')
let  infos = $.querySelector('#infos')
let  infoBoxClass = $.querySelector('.info-box')
let key = $.querySelector('#key')
let which= $.querySelector('#which')
let code = $.querySelector('#code')



$.body.addEventListener('keydown', function (event) {
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	
	// event.preventDefault()
	// console.log(event)
	let eventkeyCode = event.keyCode
	let eventWhich = event.which
	let eventCode = event.code
	let eventKey = event.key
	let eventLocationKey = event.location
	
	
	keyCode.innerHTML = eventkeyCode
	which.innerHTML = eventWhich
	code.innerHTML = eventCode
	key.innerHTML = eventKey
	locationKey.innerHTML = eventLocationKey


})

