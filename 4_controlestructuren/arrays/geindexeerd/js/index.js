let cursisten = ['Tom','Tim','Bart','Els'];
//let cursisten = new Array('Tom','Tim','Bart','Els');
let cursusJaar = ['2017,2018,2019,2020,2021,2022,2023'];

document.write(cursisten);
document.write(cursisten[0]);
document.write(cursisten[3]);
document.write(cursisten[4]);
cursisten[0]='Pieter';
document.write(cursisten);
//lengte van een array
document.write(cursisten.length);
//toevoegen van een cursist
cursisten.push('Marieke');
document.write(cursisten);
document.write(cursisten[4]);
//cursist toevoegen aan het begin
cursisten.unshift('Thomas');
document.write(cursisten);
//cursist verwijderen (laatste)
cursisten.pop();
document.write(cursisten);
//cursist verwijderen (eerste)
cursisten.shift();
document.write(cursisten);

//index of plaatsbepaling van items in een array (numerieke of geindexeerde array)
document.write(cursisten.indexOf('Bart'));