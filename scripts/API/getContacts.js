import { getRequest } from '../../common/utils.js';
import { sleep } from 'k6';

export function contactsEndPoint() {
  let url = 'https://test.k6.io/contacts.php'

  getRequest(url)
  
  sleep(3)
}
