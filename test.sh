# should send email
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{ "personalizations": [ { "to": [ { "email": "bersling@gmail.com" } ], "subject": "Hello, World!" } ], "from": { "email": "daniel.r.niederberger@gmail.com" }, "content": [ { "type": "text/plain", "value": "Hello, World!" } ] }' \
  http://localhost:8010/helloworld/us-central1/sendMail

# should result in error (no "to" field)
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{ "personalizations": [ { "to": [ ], "subject": "Hello, World!" } ], "from": { "email": "daniel.r.niederberger@gmail.com" }, "content": [ { "type": "text/plain", "value": "Hello, World!" } ] }' \
  http://localhost:8010/helloworld/us-central1/sendMail
