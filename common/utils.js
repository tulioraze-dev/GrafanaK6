import http from 'k6/http'
import { check } from 'k6'

export function getRequest(url) {
  let request = http.get(url);

  check(request, {
    'status is 200': (r) => r.status === 200,
    'body its not null': (r) => r.body != null,
  });
}

export function postRequest(url, body) {
  let request = http.post(url, body, { responseType: 'text' });

  check(request, {
    'status is 200': (r) => r.status === 200,
    'body its not null': (r) => r.body != null,
  });
}