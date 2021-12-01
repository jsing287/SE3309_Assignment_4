const express =  require("express")





const app  = express();

app.use(express.static("static")); // routing the static files of the express app to the static file.
app.listen(80); // listening on port 80.
