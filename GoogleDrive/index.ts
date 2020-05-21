const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const SCOPES = [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.appdata'
];

// The file token.json stores the user's access 
const TOKEN_PATH = 'token.json';
const CREDENTIALS_FILE_PATH = "credentials.json";
let service;





/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function GetUserCredentials(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
  
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      
      if (err) return getAccessToken(oAuth2Client, callback);
  
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }
  

  
/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }


  
/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function Getfiles(auth) {
    service = google.drive({version: 'v3', auth});
    
    service.files.list({
      pageSize: 10,
      //q:"name='zekiri.jpg'",
      fields: 'nextPageToken, files(id, name)',
    },(err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const files = res.data.files;
      if (files.length) {
        console.log('Files:');
        files.map((file) => {
          console.log(`${file.name} (${file.id})`);
          if (file.name === "zekiri.jpg")
              DownloadFile(file.id);
        });
      } else {
        console.log('No files found.');
      }
    });
  }


  function DownloadFile(fileId){

    let file = fs.createWriteStream("d:\\zekiri.jpg");
    service.files.get(
     {fileId: fileId, alt: 'media'}, {responseType: 'stream'},
     (err, res) => {
        res.data
        .on('end', () => {
          console.log("--------------------");
          console.log( res.data);
          console.log("--------------------");
           console.log('Download complete.');
           file.close();
        })
        .pipe(file);
   });
  
}


  function Main(){
    // Authorize a client with credentials
    fs.readFile(CREDENTIALS_FILE_PATH , (err, content) => {
         if (err) return console.log('Error loading client secret file:', err);
        GetUserCredentials(JSON.parse(content), Getfiles);
    });
}

Main();