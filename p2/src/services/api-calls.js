const baseUrl = "https://acnhapi.com/v1a";

function getFishs() {
  const url = "https://api.nookipedia.com/nh/fish";
  return fetch(url, {
    method: "GET",
    headers: {
      "X-API-Key": "60c5ba1a-ef3f-4e7f-936d-f6f9cd0fbf58",
    },
  }).then((res) => res.json());
}

function getFossils() {
  return fetch(`${baseUrl}/fossils`).then((res) => res.json());
}
function getVillagers() {
  return fetch(`${baseUrl}/houseware`).then((res) => res.json());
}
export { getFossils, getVillagers, getFishs };
