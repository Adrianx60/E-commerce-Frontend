const API_URL = "http://localhost:3000"; // Cambiar por tu backend en producción

export async function login(email: string) {
  const res = await fetch(`${API_URL}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res.json();
}

export async function getProduct(id: string) {
  const res = await fetch(`${API_URL}/products/${id}`);
  return res.json();
}

export async function createOrder(productId: string) {
  const res = await fetch(`${API_URL}/order?productId=${productId}`, {
    method: "POST",
  });
  return res.json();
}
