import md5 from "md5";
const publicKey = "d4952e8090844b8a518ecc885c79ae58";
const privateKey = "8e9567c802a58ab30ef463e94e29f51f5d7f8d8a";

function generateHash(timestamp, privateKey, publicKey) {
  const hashString = timestamp + privateKey + publicKey;
  const hash = md5(hashString);
  return hash;
}

export default async function heroes(req, res) {
  const baseUrl = "https://gateway.marvel.com/v1/public/characters";
  const timestamp = new Date().getTime().toString();
  const hash = generateHash(timestamp, privateKey, publicKey);

  const params = {
    apikey: publicKey,
    ts: timestamp,
    hash: hash,
  };

  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.data.results);
  } catch (error) {
    console.error("Erro na chamada da API:", error);
    res.status(500).send(error.message);
  }
}
