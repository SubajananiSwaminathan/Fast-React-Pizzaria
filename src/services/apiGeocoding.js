export async function getAddress({ latitude, longitude }) {
  const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!response.ok) throw Error("Failed getting address");

  const data = await response.json();
  return data;
}
