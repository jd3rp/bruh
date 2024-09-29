window.onload = function () {
    const topMenu = document.getElementById('top-menu');
    const mainBtn = document.getElementById('main-btn');
    const radialMenu = document.getElementById('radial-menu');
    const mainContent = document.getElementById('main-content');

    const sections = {
        home: ['Go to Notes', 'Go to Tasks', 'Go to Wallet'],
        notes: ['New Note', 'View All Notes', 'Archive Notes'],
        tasks: ['New Task', 'Completed Tasks', 'Pending Tasks'],
        wallet: ['Send', 'Receive', 'View Balance']
    };

    // Function to update the content and radial menu dynamically based on the section
    function updateContentAndRadialMenu(section) {
        console.log(`Switching to section: ${section}`);

        // Update main content for each section
        mainContent.innerHTML = `<h1>${section.charAt(0).toUpperCase() + section.slice(1)}</h1>`;
        if (section === 'home') {
            mainContent.innerHTML += '<p>Select a section from the menu above or use the radial menu below to quickly access sections.</p>';
        }

        // Clear existing radial menu buttons and repopulate
        radialMenu.innerHTML = '';
        sections[section].forEach(subOption => {
            const btn = document.createElement('button');
            btn.classList.add('menu-btn');
            btn.textContent = subOption;
            radialMenu.appendChild(btn);

            // Add click event to radial buttons (e.g., Go to Tasks)
            btn.addEventListener('click', () => {
                alert(`You selected ${subOption}`);
            });
        });
    }

    // Handle top menu clicks to update the main content
    topMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-item')) {
            const selectedSection = e.target.getAttribute('data-section');
            updateContentAndRadialMenu(selectedSection);
        }
    });

    // Handle main button click to toggle radial menu visibility
    window.onload = function () {
        const mainBtn = document.getElementById('main-btn');
        const radialMenu = document.getElementById('radial-menu');  // Ensure this is correctly selected

        // Toggle radial menu visibility when the main button is clicked
        mainBtn.addEventListener('click', () => {
            if (radialMenu) {
                radialMenu.classList.toggle('show');  // Toggle 'show' class
            } else {
                console.error('Radial menu not found');
            }
        });
    };


    // Initialize with the home screen by default
    updateContentAndRadialMenu('home');
};
