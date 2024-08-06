const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const response = await fetch(`${API_URL}/menu`);
  if (!response.ok) throw Error("Failed getting menu");

  const { data } = await response.json();
  return data;
}

export async function getOrder(id) {
  const response = await fetch(`${API_URL}/order/${id}`);
  if (!response.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await response.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const response = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw Error();
    const { data } = await response.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObject) {
  try {
    const response = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw Error();
  } catch (error) {
    throw Error("Failed updating your order");
  }
}