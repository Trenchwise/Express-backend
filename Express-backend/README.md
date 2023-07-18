Create your own backend around any theme you like (include C, R, U and D)
Optional: Use your front project as the inspiration

Replicating Simpsons API

// boiler plate to start the server
app.listen(6001, () => {
console.log("the server is running)
})

A port is like a hole into your comp. Each programme will connect into a port. it allows your comp to handgle different programmes at once.

1.  // start with this.
    // telling programme what port you want to listen on
    const port = process.env.PORT || 6001;
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

inbetween thses goes the routes. (like a sandwich)

//route middleware
app.use("/quotes", require("./routes/quotes"));
app.use("/", require("./routes/demo"));

You can have as many routes as you like.

the verb and url needs to be set up in the backend.

app.get("/contact", () => {
console.log("New request to: /contact");
response.send("hello from the backend"); // replies to from the back to the front
});

// req = required, res = response - you can look inside the request and response using console.log(req.headers)
