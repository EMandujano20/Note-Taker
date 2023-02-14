const router = require('express');
let data = require("../../db/db.json");
const path = require("path");

router.get("/notes", (req, res)=> {
    console.log({data});
    res.json(data);
});

router.post("/notes", (req, res)=> {
    let newNote = req.body;
    let uniqueId = (data.length).toString();
    console.log(uniqueId);
    newNote.id = uniqueId;
    data.push(newNote);
    
    res.json(data);
});

