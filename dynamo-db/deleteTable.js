const AWS = require('aws-sdk')
const dotenv = require('dotenv')
dotenv.config();

AWS.config.loadFromPath('../config.json')

let dynamo = new AWS.DynamoDB({apiVersion: '2012-08-10'})

var params = {
    TableName: "User"
   };

dynamo.deleteTable(params, (error, success) => {
    if(error){
        console.log(error)
    }else{
        console.log(success)
    }
})