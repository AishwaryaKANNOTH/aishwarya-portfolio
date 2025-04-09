function addEntry() {
    const entryInput = document.getElementById("entryInput");
    const entriesContainer = document.getElementById("entries");
    if (entryInput.value.trim() !== "") {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");
        entryDiv.textContent = entryInput.value;
        entriesContainer.prepend(entryDiv);
        entryInput.value = "";
    }
}