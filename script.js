const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1c5fd6240dmshcd5928f9491ae3dp1574f8jsnef1c8f55e79e',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
};

const fetchIpInfo = ip => {
  return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
  .then(res=> res.json())
  .catch(err => console.error(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit' , async (event) => {
  event.preventDefault()
  const {value} = $input
  if (!value) return

$submit.setAttribute('disabled', '')
$submit.setAttribute('aria-busy','true')

  const ipInfo = await fetchIpInfo(value)

if(ipInfo){
$results.innerHTML = JSON.stringify(ipInfo, null, 2)
}

$submit.setAttribute('disabled')
$submit.setAttribute('aria-busy')

})
