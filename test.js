// ==UserScript==
// @name         Discord My Project Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a custom button to the Discord sidebar to link to your project.
// @author       YourName
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to inject the button into the sidebar
    function addSidebarButton() {
        // Check if the button is already added
        if (document.querySelector("#myCustomProjectButton")) return;

        // Find the sidebar element where we'll inject the button
        const sidebar = document.querySelector('[class^="listItem-"]');
        
        if (sidebar) {
            // Create the button element
            const button = document.createElement("div");
            button.id = "myCustomProjectButton";
            button.className = "customSidebarButton"; // You can customize this class further if needed

            // Add styles to the button
            button.style.cursor = "pointer";
            button.style.padding = "10px";
            button.style.marginTop = "10px";
            button.style.backgroundColor = "#7289da"; // Discord's blue color
            button.style.borderRadius = "8px";
            button.style.color = "white";
            button.style.fontSize = "14px";
            button.style.textAlign = "center";
            button.innerText = "My Project";

            // Add a click event to the button
            button.addEventListener("click", () => {
                window.open("https://github.com/your-username/your-project", "_blank");
            });

            // Append the button to the sidebar
            sidebar.appendChild(button);
        }
    }

    // MutationObserver to detect changes in the DOM (Discord dynamically loads elements)
    const observer = new MutationObserver(() => {
        addSidebarButton();
    });

    // Start observing the document for changes
    observer.observe(document, { childList: true, subtree: true });

    // Initially call the function to add the button
    addSidebarButton();

})();
