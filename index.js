/**
 * @param Write a function which inputs are
 ** const emoji = ['😀', '😃', '😀', '😄', '😀', '😀', '😁', '😃', '😀', '😆', '😄', '😂', '😂', '😀', '😅', '😄', 'c', '😄', '🤣'];
 * @and OUTPUTS here,
 ** {'😀': 6, '😃': 2, '😄': 4, '😁': 1, '😆': 1, '😂': 3, '😅': 1, '🤣': 1}
 *
 *  */

const face = [
  '😀',
  '😃',
  '😀',
  '😄',
  '😀',
  '😀',
  '😁',
  '😃',
  '😀',
  '😆',
  '😄',
  '😂',
  '😂',
  '😀',
  '😅',
  '😄',
  '😂',
  '😄',
  '🤣',
];

function uniqueData(data = []) {
  let outputs = {};

  data.map((i) => (outputs[i] = (outputs[i] || 0) + 1));

  return outputs;
}

console.log(uniqueData(face));
// console.log(face);

// for (var i = 0; i < data.length; i++) {
//   outputs[i] = (outputs[i] || 0) + 1;
// }
/*   const arrayData =  */
// console.log(arrayData);/*  */
const express = require('express')();
const http = require('http');

const getSeconds = function (
  mainUrl,
  { nano, sec, min, hrs, day, week, month, yrs }
) {
  let nanoSec = 0,
    seconds = 0,
    minutes = 0,
    hours = 0,
    days = 0,
    weeks = 0,
    months = 0,
    years = 0;

  if (nano) {
    nanoSec = nano / 1000;
  }

  if (sec) {
    seconds = sec;
  }

  if (min) {
    minutes = min * 60;
  }

  if (hrs) {
    hours = hours * 60 * 60;
  }

  if (day) {
    days = days * 60 * 60 * 24;
  }

  if (week) {
    week = week * 60 * 60 * 24 * 7;
  }

  if (month) {
    months = months * 60 * 60 * 24 * 30;
  }

  if (yrs) {
    years = years * 60 * 60 * 24 * 364;
  }

  const totalSeconds =
      nanoSec + seconds + minutes + hours + days + weeks + months + years,
    query = `&t=${totalSeconds}s`;

  return {
    seconds: totalSeconds,
    url: mainUrl + query,
    query,
  };
};

console.log(
  getSeconds('https://www.youtube.com/watch?v=mJcFtYDp5oI', {
    nano: null,
    sec: 40,
    min: 9,
  })
);
ya;
