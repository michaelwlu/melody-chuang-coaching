Heroku Deploy Server Instructions:

`git subtree push --prefix server heroku master`

Environment Variables:

- Change Heroku config var for `CORS_ORIGIN` to website URL
- Change Vercel environment var for `NEXT_PUBLIC_API_URL` to API URL
