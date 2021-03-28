addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

function getURLParameter(sUrl, sParam) {
    let sPageURL = sUrl.substring(sUrl.indexOf('?') + 1);
    let sURLVariables = sPageURL.split('&');
    for (let i = 0; i < sURLVariables.length; i++) {
        let sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

/**
 * Respond to request
 * @param {Request} request
 */
async function handleRequest(request) {
  let page = Math.max(Math.abs(getURLParameter(request.url, 'page') || 1), 1)
  let limit = Math.max(Math.abs(getURLParameter(request.url, 'limit') || 10), 1);

  // retrieve json from cloudflare KV
  let data = await NAMESPACE.get("data")
  let json = JSON.parse(data)
  let slice = JSON.stringify(json.splice(1 + ((page - 1) * limit), limit))

  response = new Response(slice, {status: 200})
  response.headers.set("Access-Control-Allow-Origin", "*")
  return response
}
