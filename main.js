import { contactsEndPoint } from './scripts/API/getContacts.js';
import { newsEndPoint } from './scripts/API/getNews.js';
import { config } from './config/config.js';
import { group } from 'k6'

export const options = config;

export default function() {
  group('Contacts EndPoint', () => {
    contactsEndPoint();
  });

  group('News EndPoint', () => {
    newsEndPoint();
  });
}
