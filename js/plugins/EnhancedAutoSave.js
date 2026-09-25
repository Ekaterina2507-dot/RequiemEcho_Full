// Function to save the game in a specified slot
function saveGameInSlot(slotId) {
    DataManager.saveGame(slotId).then(() => {
        console.log(`Game saved successfully in slot ${slotId}.`);
        // Removed SceneManager.goto(Scene_Map); to prevent reloading the scene
    }).catch(() => {
        console.error("Failed to save game.");
    });
}
