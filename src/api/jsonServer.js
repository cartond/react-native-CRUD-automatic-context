import axios from 'axios';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Reminder: For now, the baseURL will change every time
 *   we have to restart our ngrok server
 */
export default axios.create({
  baseURL: 'http://ed7eb4dad3b5.ngrok.io' 
});