'use strict'

const appid = [
	'26LQEH-YT3P6T3YY9',
	'K49A6Y-4REWHGRWW6',
	'J77PG9-UY8A3WQ2PG',
	'P3WLYY-2G9GA6RQGE',
	'P7JH3K-27RHWR53JQ',
	'L349HV-29P5JV8Y7J',
	'77PP56-XLQK5GKUAA',
	'59EQ3X-HE26TY2W64',
	'8Q68TL-QA8W9GEXAA',
	'KQRKKJ-8WHPY395HA',
	'AAT4HU-Q3RETTGY93',
	'7JKH84-T648HW2UV9',
	'WYEQU3-2T55JP3WUG',
	'T2XT8W-57PJW3L433',
	'2557YT-52JEY65G9K',
	'UVPKUJ-X9Q365R7E3',
	'W85VHP-E6WH3U78EE',
	'W33433-AKRV98E5AT',
	'3A3P8J-XA4UTGKAH5',
	'QGK5UA-HGUK7AP5LY',
	'8EL8GA-7W6EVYTQ5X',
	'W4TUXQ-GA2H8KUULA',
	'UGHH75-YPX2RVU4E4',
]

const CORSProxy = `https://lin2jing4-cors-${new Date().getDay()}.herokuapp.com/`

const fixedEncodeURI = string => (
	encodeURIComponent(string)
	.replace(
		/[-_.!~*'()]/g,
		char => '%' + char.charCodeAt(0).toString(16)
	)
)

const $ = selector => document.querySelector(selector)
const body = $('body')
const input = $('input')
const main = $('main')

const query = async podstate => {
	main.innerHTML = `
		<iframe src=https://www.wolframalpha.com/input/?i=${fixedEncodeURI(input.value)}>
	`
	const url = `
		${CORSProxy} api.wolframalpha.com/v2/query?
		&appid = ${appid[Date.now() % appid.length]}
		&input = ${location.hash = fixedEncodeURI(document.title = input.value)}
		&output = json
		&podstate = Step-by-step+solution
		&podstate = Step-by-step
		&podstate = Show+all+steps
		&podstate = ${podstate?.replaceAll(' ', '+')}
		&scantimeout = 30
		&podtimeout = 30
		&formattimeout = 30
		&parsetimeout = 30
		&totaltimeout = 30
	`
	const response = await fetch(
		url.replaceAll(' ', '')
	)
	const json = await response.json()
	if (json.queryresult?.success)
		main.innerHTML = ''
	json.queryresult?.pods?.forEach(
		pod => {
			main.innerHTML += '<header>' + pod.title
			pod.states?.forEach(
				state => {
					if (state.states) {
						main.innerHTML += state.states.reduce(
							(names, state) => names + '<option>' + state.name,
							'<select onchange=query(this.value)>' + '<option>' + state.value
						) + '</select><br>'
					}

				}
			)
			main.innerHTML += pod.subpods?.map(
				subpod => `<img src=${subpod.img?.src}>`
			).join('<br>')
		}
	)
}

$('form').onsubmit = async event => {
	event?.preventDefault()
	query()
}

window.onhashchange = event => {
	input.focus()
	input.value = decodeURIComponent(location.hash.slice(1))
}

window.onhashchange()

if (input.value) {
	query()
} else {
	fetch(CORSProxy)
}

$('select').onchange = async event => {
	const url = `
		${CORSProxy} wolframalpha.com/examples/
		StepByStep ${event.target.value} -content.html
	`
	const response = await fetch(url.replaceAll(' ', ''))
	const text = await response.text()
	main.innerHTML = text
	.replaceAll('/input/?i=', '#')
	.replaceAll('&amp;lk=3', '')
	.replaceAll('+', ' ')
	main.querySelector('a').remove()
	event.target.value = 'Examples'
}

body.className = localStorage.getItem('body.className')
