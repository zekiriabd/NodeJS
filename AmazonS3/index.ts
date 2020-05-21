import * as BasicAWSCredentials from 'aws-sdk/clients/s3';
import * as uuidV1  from 'uuid';
import fs = require('fs');

const accessKeyID : string = "XXXXXXXXXXXXXXXXXXXXX";
const secretKey   : string = "YYYYYYYYYYYYYYYY";
const bucketName  : string = "ZZZZZZZZZZZZZZZZZZ";
const postDir     : string = "D:\\";

let service: BasicAWSCredentials;
let firstfileisOk : Boolean = false;
  
function GetUserCredentials() {
  
  service = new BasicAWSCredentials({
    accessKeyId: accessKeyID,
    secretAccessKey : secretKey,
    region : 'us-east-1'
  });

}

const DownloadFile = (async function (fileId:string)
{
    const  localFile = uuidV1.v1.toString() + ".csv";
    try
    {
      
      var file = fs.createWriteStream(postDir + localFile);
      let response = await service.getObject({Bucket: bucketName, Key: fileId}).createReadStream();
      
      response.pipe(file)
      .on('error', (err)=> { console.error('File Stream:', err); })
      .on('close', () => { console.log('Done.'); });  

      firstfileisOk = true;
    }
    catch (error) {
      console.error(error);
    }

});

const GetFiles = (async function (){
  try
  {
    const request ={Bucket : bucketName };
    //const request ={Bucket : bucketName , MaxKeys:10 ,ContinuationToken : "" };
    let response;    
    //do
    //{
      response = await service.listObjectsV2(request).promise();
      response.Contents.forEach((fileobj: { Key: string; Size: number; })  => {
      let filePath: String[] = fileobj.Key.split('/');
      if (filePath.length === 3 && filePath[2].indexOf('.') != -1)
      {
        let exten :string = filePath[2].split('.')[1];
        console.log("key = XXXXXXXXXX.{0} size = {1}", exten, fileobj.Size);
        
        if (!firstfileisOk)
        {
            DownloadFile(fileobj.Key);
        }
      }
    });
   // request.ContinuationToken = response.NextContinuationToken;
  //} while (response.IsTruncated);

  } catch (e){
    console.log('our error', e);
  }
  debugger;
});

function Main(){
    GetUserCredentials();
    GetFiles();     
}

Main();