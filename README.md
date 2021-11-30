# ui-technical-code-review

Welcome to the latest and greatest in management technology.

## Project notes

The first piece of functionality for this application is contact management, but we have big dreams of growing this application into a Saas application that can be used to manage contacts, payroll, contracts, you name it. 

This app's database is setup local to your environemnt, but let's operate under the assumption that this will not always be the case. In the near future we will move to a real API meaning that multiple users of the application can be interacting with the data and any given time. 

## Project setup steps:

To run this application locally you will need to run the following commands:
```
npm install
```
```
npm run serve
```
In a seperate terminal run the following command to spin up the database:
```
npm run database
```
