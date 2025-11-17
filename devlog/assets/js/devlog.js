const devlogs = [
    {
        title: "Exploring Mechanics",
        date: new Date("02-16-2025"),
        text: "In this project the player is able to play cooperatively with a friend or control both characters.</br>Each character has individual skills. For now, one character has double jump and the other can see and interact with invisible platforms and objects.</br>The idea of carrying the other character makes the game more fun and is also a way of getting past obstacles.</br></br>These two 3D models are placeholders from the Asset Store.",
        videoUrl: "https://www.youtube.com/watch?v=UKMF-CT_i84"
    },
    {
        title: "Project HM",
        date: new Date("03-22-2025"),
        text: "Starting a new project. The main objective is to create a game that mixes Restaurant/Coffee and Horror.</br>The first step was a 3rd Person movement and a system for interaction with objects. The player is able to pick up, use or and drop items.",
        videoUrl: "https://www.youtube.com/watch?v=DMNr3zGdkZc"
    },
    {
        title: "Project HM",
        date: new Date("03-23-2025"),
        text: "The game spawns a customer with a expected order id. Different results can occur if the player delivers the correct order, the wrong order or takes too long to deliver.</br>The first furniture in the game is a box that generates an placeholder item for the player.",
        videoUrl: "https://www.youtube.com/watch?v=Xwt-Rgieq5M"
    },
    {
        title: "Project HM",
        date: new Date("03-30-2025"),
        text: "The player is now able to interact with the new furniture: Item Storage, Drinks Machine, Stove, Tray and Balcon.</br>There is a placeholder pastry item to use in the Stove.</br>The Drink Machine and Stove share a system that processes itens over a period of time and returns a different item.",
        videoUrl: "https://www.youtube.com/watch?v=3R_4XzAzKaY"
    },
    {
        title: "Project HM",
        date: new Date("04-13-2025"),
        text: "New items have been added such as savory snacks, bread, lettuce and meat.</br>New furniture have been added such as a Stove and Cutting Table.</br></br>Item system now supports combining ingredients to create a new one. For example, mixing lettuce and meat in bread results in a burguer.</br>New Skill Check system in development. The cutting table calls it and, if successful, cuts the ingredient.",
        videoUrl: "https://www.youtube.com/watch?v=5jx4LvnVWLE"
    },
    {
        title: "Project HM",
        date: new Date("04-26-2025"),
        text: "System for inspecting objects with rotation and zoom.</br>This system is very common in horror games and can be used for messages, passwords, puzzle answers, lore fragments or just details.",
        videoUrl: "https://www.youtube.com/watch?v=Vs3r-jeL70I"
    },
    {
        title: "Project HM",
        date: new Date("05-11-2025"),
        text: "There are Drawings on the wall that guide the player showing what order each customer desires.</br>These orders are randomly generated at the start of each game.</br></br>First custom customer that will follow the player while not being looked.</br>New camera system for Jumpscares.</br>Switch system to turn lights on and off.",
        videoUrl: "https://www.youtube.com/watch?v=XOAY17qG9sg"
    },
    {
        title: "Project HM",
        date: new Date("05-25-2025"),
        text: "New models made to serve as placeholder characters.</br>New customer that scares you if exposed to indoor light for a while.</br></br>Update to the building's placeholder and addition of a mirror.</br>Improvements to the lighting, timing, animation, customer management and Jumpscare systems.",
        videoUrl: "https://www.youtube.com/watch?v=r4WIPTiHB84"
    },
    {
        title: "Project HM",
        date: new Date("06-22-2025"),
        text: "Updating the environment with new Colors, Models, Materials and Textures.</br>New Mechanic that causes Food Items to rot if left for a period of time.</br>New Customer that changes between its three faces from time to time. His order also depends on the current face.</br></br>Optional Post-Processing Effect that simulates an Old Monitor.",
        videoUrl: "https://www.youtube.com/watch?v=kM0aV0NOLRU"
    },
    {
        title: "Project HM",
        date: new Date("07-27-2025"),
        text: "Updating the environment by reducing the size of the kitchen, but adding a small storage room behind it</br>Security cameras and monitors to check out outside the kitchen.</br></br>New Mixed Customer that has the colors and orders of two normal customers.</br>New customer that looks like to be two customers disguised as one. The order depends on whether the upper or lower face is visible.</br></br>Interface showing possible interaction with objects.</br>Graphics and lighting improvements coming soon.",
        videoUrl: "https://www.youtube.com/watch?v=62XKv6Ft3bE"
    },
];

function loadDevlogs() {
    const devlogListContainer = document.getElementById('devlog-list');
    const sortedDevlogs = devlogs.sort((a, b) => b.date - a.date);

    sortedDevlogs.forEach(devlog => {
        const devlogEntry = document.createElement('div');
        devlogEntry.classList.add('devlog-entry', 'mb-5');

        devlogEntry.innerHTML = `
            <h3 class="devlog-title">${devlog.title} - ${formatShortDate(devlog.date)}</h3>
            <p class="devlog-date text-muted">Published on: <strong>${formatDate(devlog.date)}</strong></p>
            <p class="devlog-text">${devlog.text}</p>
            <div class="devlog-video">
                <iframe 
                    src="${toEmbedUrl(devlog.videoUrl)}" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            </br>
            <hr>
        `;

        devlogListContainer.appendChild(devlogEntry);
    });
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    });
}

function formatShortDate(date) {
    const day = String(date.getMonth()).padStart(2, '0');
    const month = String(date.getDate() + 1).padStart(2, '0');
    return `${day}/${month}`;
}

function toEmbedUrl(url) {
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
        return `https://www.youtube.com/embed/${videoIdMatch[1]}?modestbranding=1&rel=0&showinfo=0&vq=hd1080`;
    }
    return url;
}

window.onload = loadDevlogs;
