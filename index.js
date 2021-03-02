#!/usr/bin/env node
'use script'

const colors   = require('colors');
const debug   = require('debug')('commander:cli')
const program = require('commander');
const prompt  = require('prompt');
const table = require('markdown-table')
 



program
  .version('0.1.0', '-v, --version')
  .usage(' ');
  //.usage('encrypt|decrypt <password> <options>');
  
   program
   .command('label')
  .description('list of artist on record label')
//   .option('-k, --key <string>', 'String|phrase Key to Use')
   .action(function (password, options) {

    console.log();
    console.log('Record label artist');
     console.log();
     console.log(
table([
  ['Artist', 'social'],
  ['J cole', '@realcoleworld'],
  ['BAS', '@bas'],
  ['JID', '@JIDsv']
])
     );
//       console.log();

 
   });

   program
   .command('sports ')
  .description('list of record label sports')
//   .option('-k, --key <string>', 'String|phrase Key to Use')
   .action(function (password, options) {

    console.log();
    console.log('Record label sports');
     console.log();
table([
  ['Branch', 'Commit'],
  ['master', '0123456789abcdef'],
  ['staging', 'fedcba9876543210']
])
      console.log();

 
   });

program.on('--help', function(){
    console.log();
    console.log('Extra Help Text');
    console.log('');
    console.log('');
    console.log('');
  });


// program.on('--help', function(){
//     console.log();
//     console.log('Examples:');
//     console.log('');
//     console.log('  $ pass encrypt mypassword -k oneWordPass');
//     console.log("  $ pass encrypt 'mypassword' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('  $ pass decrypt encryptedstring -k oneWordPass');
//     console.log("  $ pass decrypt 'encryptedstring' -k 'Phrase to encrypt words' ");
//     console.log('');
//     console.log('Notice: ')
//     console.log('  For special characters in passwords/keys,');
//     console.log('  please use single quotes around each');
//     console.log('');
//     console.log('');
//   });


  program.parse(process.argv);

  if (!program.args.length) program.help();
