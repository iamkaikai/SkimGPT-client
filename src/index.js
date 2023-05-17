import $ from 'jquery';
import './style.scss';

let counter = 0;
setInterval(() => {
  counter += 1;
  $('#main').html(`You've been on this page for ${counter} seconds.`);
}, 1000);
