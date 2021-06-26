# restapi
This repo helps you to  understand how a rest api works and it is for the beginners who try to learn how restapi works and how to create. 


## Tech Stack

**Database:** Mongodb 

**Server:** Node, Express

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/B-chandru/restapi.git
```

Go to the project directory

```bash
  cd restapi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MYDB_CONNECTION`

  
## API Reference

#### Get all  the details

```http
  GET http://localhost:5000/admin/
```


#### post 

```http
   http://localhost:5000/admin/
```
for post request the json formate should be like this :

```bash
  
{
    "Name":"hero",
    "Age": "21"
}
```
#### Get details by id

```http
   http://localhost:5000/admin/:id
```
  #### Put

```http
   http://localhost:5000/admin/:id
```
  #### Delete 

```http
   http://localhost:5000/admin/:id
```
  
