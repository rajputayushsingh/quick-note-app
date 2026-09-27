const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const dataDir = path.join(__dirname, "data");
const dataFile = path.join(dataDir, "notes.json");

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, "[]");
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function readNotes() {
    return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}

function saveNotes(notes) {
    fs.writeFileSync(
        dataFile,
        JSON.stringify(notes, null, 2)
    );
}

// GET - Get all notes
app.get("/notes", (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

// POST - Create a note
app.post("/notes", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    const notes = readNotes();

    const newNote = {
        id: Date.now().toString(),
        title: title.trim(),
        content: content.trim(),
        createdAt: new Date().toISOString()
    };

    notes.unshift(newNote);

    saveNotes(notes);

    res.status(201).json(newNote);
});

// DELETE - Delete a note
app.delete("/notes/:id", (req, res) => {
    const notes = readNotes();

    const newNotes = notes.filter(
        note => note.id !== req.params.id
    );

    if (notes.length === newNotes.length) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    saveNotes(newNotes);

    res.json({
        message: "Note deleted successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
