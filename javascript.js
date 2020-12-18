'use strict'

const appid =
[
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

form.onsubmit = async event => {
    details.open = false
    if (event)
        event.preventDefault()
    progressBar.hidden = false
    const url =
    `
        ${corsProxy} api.wolframalpha.com/v2/query?
        &appid = ${appid[Date.now() % appid.length]}
        &input = ${location.hash = fixedEncodeURI(document.title = input.value)}
        &podstate = Step-by-step+solution
        &podstate = Step-by-step
        &podstate = Show+all+steps
        &scantimeout = 20
    `
    const response = await fetch(url.replace(/ /g, ''))
    const xml = await response.text()
    pod.innerHTML = xml.replace(/plaintext/g, 'pre')
                       .replace(/<pod title../g, '<h1>')
                       .replace(/.......scanner/gs, '</h1><!')
    progressBar.hidden = true
}

if (input.value)
    form.onsubmit()
else
    fetch(corsProxy)

document.querySelectorAll('.example').forEach(
    example => {
        example.href = ''
        example.onclick = async event => {
            event.preventDefault()
            const url =
            `
                ${corsProxy} wolframalpha.com/examples/
                StepByStep ${event.target.innerText} -content.html
            `
            const response = await fetch(url.replace(/ /g, ''))
            const html = await response.text()
            pod.innerHTML = html.replace(/".*?"/g, href => href
                                .replace(/.input..../, '#')
                                .replace(/&amp;..../, '')
                                .replace(/\+/g, ' '))
        }
    }
)
