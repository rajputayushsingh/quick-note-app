const noteForm = document.getElementById("noteForm");

const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

const notesContainer =
    document.getElementById("notesContainer");

const emptyState =
    document.getElementById("emptyState");

const noteCount =
    document.getElementById("noteCount");

const message =
    document.getElementById("message");


// GET /notes
async function loadNotes() {

    try {

        const response = await fetch("/notes");

        const notes = await response.json();

        displayNotes(notes);

    } catch (error) {

        console.error(error);

        message.textContent =
            "Unable to load notes.";

    }
}


// Display notes
function displayNotes(notes) {

    notesContainer.innerHTML = "";

    noteCount.textContent =
        `${notes.length} ${
            notes.length === 1
                ? "note"
                : "notes"
        }`;

    if (notes.length === 0) {

        emptyState.style.display = "block";

        return;
    }

    emptyState.style.display = "none";


    notes.forEach(note => {

        const card =
            document.createElement("div");

        card.className = "note-card";


        const title =
            document.createElement("h3");

        title.textContent = note.title;


        const content =
            document.createElement("p");

        content.className = "note-content";

        content.textContent = note.content;


        const date =
            document.createElement("p");

        date.className = "note-date";

        date.textContent =
            new Date(note.createdAt)
                .toLocaleString();


        const deleteButton =
            document.createElement("button");

        deleteButton.className =
            "delete-btn";

        deleteButton.textContent =
            "Delete";


        deleteButton.addEventListener(
            "click",
            () => deleteNote(note.id)
        );


        card.appendChild(title);

        card.appendChild(content);

        card.appendChild(date);

        card.appendChild(deleteButton);


        notesContainer.appendChild(card);

    });
}


// POST /notes
noteForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const title =
            titleInput.value.trim();

        const content =
            contentInput.value.trim();


        try {

            const response =
                await fetch("/notes", {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        title,
                        content
                    })

                });


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message
                );

            }


            noteForm.reset();

            message.textContent =
                "Note added successfully!";


            await loadNotes();


            setTimeout(() => {

                message.textContent = "";

            }, 2000);


        } catch (error) {

            console.error(error);

            message.textContent =
                error.message;

        }

    }
);


// DELETE /notes/:id
async function deleteNote(id) {

    try {

        const response =
            await fetch(
                `/notes/${id}`,
                {
                    method: "DELETE"
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message
            );

        }


        await loadNotes();


    } catch (error) {

        console.error(error);

        message.textContent =
            error.message;

    }

}


// Load notes when page opens
loadNotes();
