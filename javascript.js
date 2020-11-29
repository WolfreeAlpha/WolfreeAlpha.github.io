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
]

const corsProxy = 'https://lin2jing4-cors.herokuapp.com/'

const fixedEncodeURIComponent = str => 
    encodeURIComponent(str)
    .replace(/[-_.!~*'()]/g, char => '%' + char.charCodeAt(0).toString(16))

const url = _ =>
`
${corsProxy}
http://api.wolframalpha.com/v2/query?
&appid=${ appid[Date.now() % appid.length] }
&input=${ location.hash = fixedEncodeURIComponent(input.value) }
&podstate=Step-by-step solution
&podstate=Step-by-step
&podstate=Show all steps
&scantimeout=20
`

window.onhashchange = _ =>
    input.value = decodeURIComponent(location.hash.slice(1))

form.onsubmit = event => {
    details.open = false
    if (event)
        event.preventDefault()
    progress.hidden = false
    fetch(
        url()
    ).then(
        xml => xml.text()
    ).then(
        xml => container.innerHTML = xml.replace(/plaintext/g, 'pre')
                                        .replace(/<pod title../g, '<h1>')
                                        .replace(/.......scanner/gs, '</h1><!')
    )
    progress.hidden = true
}

if (window.onhashchange())
    form.onsubmit()

const browseEexamples = category => {
    progress.hidden = false
    fetch(
        `${corsProxy}https://www4c.wolframalpha.com/examples/StepByStep${category.replace(/ /g, '')}-content.html`
    ).then(
        html => html.text()
    ).then(
        html => container.innerHTML = html.replace(/.input.*?&amp;lk=3/g, href => href
                                          .replace(/.input..../, 'http://wolfreealpha.github.io#')
                                          .replace(/&amp;lk=3/, '')
                                          .replace(/\+/g, ' '))
    )
    progress.hidden = true
}

document.querySelectorAll('.example').forEach(example =>
    example.href = `javascript:browseEexamples( '${example.innerText}' )`
)
