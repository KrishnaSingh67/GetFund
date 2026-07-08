// Client-side helper functions for user/payment actions
// These call API routes under /api. Adjust endpoints if server routes differ.

export async function fetchuser(username) {
  const res = await fetch(`/api/user/${encodeURIComponent(username)}`)
  if (!res.ok) return {}
  return res.json()
}

export async function updateProfile(formData, username) {
  // formData may be a submit event or object; accept either
  let body = formData && formData.target ? Object.fromEntries(new FormData(formData.target)) : formData
  const res = await fetch(`/api/user/${encodeURIComponent(username)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  return res.json()
}

export async function fetchpayments(username) {
  const res = await fetch(`/api/payments/${encodeURIComponent(username)}`)
  if (!res.ok) return []
  return res.json()
}

export async function initiate(amount, username, paymentForm) {
  const res = await fetch(`/api/payments/initiate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, username, paymentForm })
  })
  return res.json()
}
