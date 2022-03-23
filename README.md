### LAP 2 Pair code
## telegraph like thingie

---------------------------------------------------------------------------------

## Installation

- Use `git clone` to clone or download the repo

- Open terminal and navigate to root of directory



## Usage

### Server 

- Execute the command `bash _scripts/startDev.sh` to:
    - Run and seed the postgresql database
    - Start the api and db services 
    - Serve client on port 3000
    - Locally serve the api on port 8080
    - Install the npm dependencies and run server using nodemon

- Use `ctrl+c` to stop the server

- Run `bash _scripts/stop.sh` to stop server

- Run `bash _scripts/teardown.sh` to stop the server and teardown by:
    - Stopping all running services
    - Remove containers
    - Remove volumes

### Client 

- Once server is running, open index.html file on browser by:
    - Navigating to localhost:8080 in browser search bar
    - Using link in terminal
    - Using live server with VSCode


## Technologies

- Express
- HTML, CSS, JavaScript
- Github
- Postgres
- Docker



## Bugs

- styling doesn't perfectly match telegra.ph, but is close 

## Wins and Challenges

### Wins
- Getting form.onsubmit to work and returning post
- javascript code

### Challenges
- styling css without being able to see it 