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
]

const corsProxy = `https://lin2jing4-cors-${new Date().getDay()}.herokuapp.com/`

const fixedEncodeURI = string =>
    encodeURIComponent(string)
    .replace(/[-_.!~*'()]/g, char => '%' + char.charCodeAt(0).toString(16))

window.onhashchange = _ => {
    input.focus()
    input.value = decodeURIComponent(location.hash.slice(1))
}

window.onhashchange()

const query = async podstate => {
    pods.innerHTML = loading.innerHTML
    const url = `
        ${corsProxy} api.wolframalpha.com/v2/query?
        &appid = ${appid[Date.now() % appid.length]}
        &input = ${location.hash = fixedEncodeURI(document.title = input.value)}
        &podstate = Step-by-step+solution
        &podstate = Step-by-step
        &podstate = Show+all+steps
        &podstate = ${podstate}
        &scantimeout = 20
    `
    const response = await fetch(url.replace(/ /g, ''))
    const xml = await response.text()
    pods.innerHTML = xml
        .replaceAll('plaintext', 'pre')
        .replaceAll('statelist', 'select')
        .replaceAll('state', 'option')
        .replaceAll('info', 'div')
    pods.querySelectorAll('options > option').forEach(node => node.remove())
    pods.querySelectorAll('option').forEach(node => node.text = node.getAttribute('name'))
    pods.querySelectorAll('pod').forEach(node => node.innerHTML = `<h1>${node.title}</h1>` + node.innerHTML)
    pods.querySelectorAll('pod').forEach(node => node.onchange = event => query(event.target.value.replaceAll(' ', '+')))
    pods.querySelectorAll('select').forEach(node => node.value = node.getAttribute('value'))
}

form.onsubmit = async event => {
    event.preventDefault()
    query()
}

if (input.value) query()
else fetch(corsProxy)

example.onchange = async _ => {
    const url = `
        ${corsProxy} wolframalpha.com/examples/
        StepByStep ${example.value} -content.html
    `
    const response = await fetch(url.replaceAll(' ', ''))
    const html = await response.text()
    pods.innerHTML = html
        .replaceAll(/".*?"/g, href => href
        .replaceAll('/input/?i=', '#')
        .replaceAll('&amp;lk=3', '')
        .replaceAll('+', ' '))
    example.value = 'Examples'
}
