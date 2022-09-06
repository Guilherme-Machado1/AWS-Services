const AWS = require('aws-sdk')
const dotenv = require('dotenv')
dotenv.config();

AWS.config.loadFromPath('../config.json')

let dynamo = new AWS.DynamoDB({apiVersion: '2012-08-10'})

const params = {
    AttributeDefinitions: [
     {
        AttributeName: "User_ID", 
        AttributeType: "N"
     },
       {
        AttributeName: "Name", 
        AttributeType: "S"
     }
    ], 
    KeySchema: [
     {
        AttributeName: "User_ID", 
        KeyType: "HASH"
     },
       {
        AttributeName: "Name", 
        KeyType: "RANGE"
     }
    ], 
    ProvisionedThroughput: {
     ReadCapacityUnits: 5, 
     WriteCapacityUnits: 5
    }, 
    TableName: "User"
};

dynamo.createTable(params, (error, success) => {
    if(error){
        console.log(error)
    }else{
        console.log(success)
    }
})