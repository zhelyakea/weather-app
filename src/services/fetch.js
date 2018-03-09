export function fetchGet(qery) {
  return fetch(qery, { method: "GET" }).then(data => data.json());
}
