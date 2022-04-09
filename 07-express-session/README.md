# Session in Express

This is a learning notes of how to dealing with session with `express`.

[Video Playlist](https://www.youtube.com/watch?v=bvQah0k5-eA&list=PL1Nml43UBm6fPP7cW9pAFTdZ_9QX2mBn2)

## Preparation

Install softwares that required for the project,

```bash
# install redis and start
brew install redis
brew services start redis

# install postgres and start
brew install postgresql
brew services start postgresql

# check the started services
brew services list
```

Initilise the nodejs project,

```bash
npm init -y
npm i express express-session connect-redis redis

npm i --save-dev nodemon dotenv
```
