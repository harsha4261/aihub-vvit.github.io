class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navigation bar -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <div style="display: flex; align-items: center">
                    <img src="./images/AI-HUB.jpg" alt="AI-HUB@VVIT" width="35px" style="border-radius: 60%;">
                    <a class="navbar-brand" href="#">AI-HUB@VVIT</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="projectsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="projectsDropdown">
                                <li><a class="dropdown-item" href="Projects.html">Ongoing Projects</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="Projects.html" id="completedProjectsDropdown" aria-expanded="false">
                                        Completed Projects
                                        <i class="fas fa-chevron-right submenu-arrow"></i>
                                    </a>
                                    <ul class="dropdown-menu submenu" aria-labelledby="completedProjectsDropdown">
                                        <li><a class="dropdown-item" href="Game.html">Games</a></li>
                                        <li><a class="dropdown-item" href="Projects.html#ml">Machine Learning</a></li>
                                        <li><a class="dropdown-item" href="Projects.html#dl">Deep Learning</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Meetups.html">Meetups</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Apps.html">Apps</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="careerDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Career Catalysts
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="careerDropdown">
                                <li><a class="dropdown-item" href="Career.html">Job Guide</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="Career.html" id="lifeSkillsDropdown" aria-expanded="false">
                                        Life Skills
                                        <i class="fas fa-chevron-right submenu-arrow"></i>
                                    </a>
                                    <ul class="dropdown-menu submenu" aria-labelledby="lifeSkillsDropdown">
                                        <li><a class="dropdown-item" href="#">Quantitative Aptitude</a></li>
                                        <li><a class="dropdown-item" href="#">Reasoning Ability</a></li>
                                        <li><a class="dropdown-item" href="#">Verbal Ability</a></li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item" href="Career.html">Web Dev</a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="About.html">People</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <style>
            /* Dropdown Styling */
            @media (min-width: 992px) {
                .navbar .dropdown:hover .dropdown-menu {
                    display: block;
                }
            }

            @media (max-width: 991px) {
                .navbar .dropdown-menu {
                    position: static;
                    display: none;
                }

                .navbar .dropdown-menu.show {
                    display: block;
                }
            }

            .dropdown-submenu {
                position: relative;
            }
            
            .dropdown-submenu .submenu {
                top: 0;
                left: 100%;
                margin-top: -1px;
                display: none;
                position: absolute;
            }
            
            .submenu-arrow {
                float: right;
                margin-top: 4px;
            }
            
            @media (min-width: 992px) {
                .dropdown-submenu:hover .submenu {
                    display: block;
                }
            }
            
            @media (max-width: 991px) {
                .dropdown-submenu .submenu {
                    position: static;
                    margin-left: 15px;
                    margin-right: 15px;
                    margin-top: 0;
                    left: 0;
                    display: none;
                }
                
                .dropdown-submenu .dropdown-item {
                    padding-left: 20px;
                }
            }
        </style>`
    }
}

class Links extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=domain">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./reuse_elements/common.css">
        <link rel="stylesheet" href="./reuse_elements/hover.css">
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg fixed-bottom bg-body-tertiary">
            <div class="container-fluid" id="footer">
                <ul style="list-style: none;display:flex; justify-content: center;">
                    <div><li class="desc_item"><i class="fa-solid fa-building-columns"></i><a href="https://www.vvitguntur.com/">VVIT</a></li></div>
                    <div><li class="desc_item"><i class="fa-solid fa-location-dot"></i><a href="https://www.google.com/maps/place/Vasireddy+Venkatadri+Institute+of+Technology/data=!4m2!3m1!1s0x0:0x8c86e4f36490336b?sa=X&ved=1t:2428&ictx=111">Guntur</a></li></div>
                    <div><li class="desc_item"><i class="fas fa-envelope"></i><a href="mailto:">Mail</a></li></div>
                    <div><li class="desc_item"><i class="fa-brands fa-github"></i><a href="https://github.com/AIHUB-VVIT">Github</a></li></div>
                </ul>
            </div>
        </nav>
        <style>
            .desc_item {
                margin: 0 15px;
                display: flex;
                align-items: center;
            }
            
            .desc_item i {
                margin-right: 8px;
            }
            
            .desc_item a {
                text-decoration: none;
                color: inherit;
            }
            
            .desc_item a:hover {
                color:rgb(214, 219, 228);
            }
            
            #footer {
                justify-content: center;
                padding: 10px 0;
            }
            
            @media (max-width: 768px) {
                .desc_item {
                    margin: 0 10px;
                    font-size: 0.9em;
                }
            }
        </style>`
    }
}

// Define custom elements
customElements.define('special-header', SpecialHeader);
customElements.define('required-links', Links);
customElements.define('special-footer', SpecialFooter);

// Dropdown handling script
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle dropdown toggling
    function setupDropdownToggle(dropdownToggle) {
        // Remove existing event listeners to prevent multiple bindings
        dropdownToggle.removeEventListener('click', dropdownClickHandler);
        
        // Add click event listener
        dropdownToggle.addEventListener('click', dropdownClickHandler);
    }

    // Dropdown click handler
    function dropdownClickHandler(e) {
        // Prevent default link behavior
        e.preventDefault();
        e.stopPropagation();

        // Close other open dropdowns
        document.querySelectorAll('.dropdown-toggle').forEach(function(otherToggle) {
            if (otherToggle !== this) {
                let otherDropdownMenu = otherToggle.closest('.dropdown').querySelector('.dropdown-menu');
                otherDropdownMenu.classList.remove('show');
                otherToggle.setAttribute('aria-expanded', 'false');
            }
        }.bind(this));

        // Toggle current dropdown
        let dropdownMenu = this.closest('.dropdown').querySelector('.dropdown-menu');
        let isCurrentlyShown = dropdownMenu.classList.contains('show');

        // Close all dropdowns first
        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            menu.classList.remove('show');
        });
        document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
            toggle.setAttribute('aria-expanded', 'false');
        });

        // If it wasn't shown, show it
        if (!isCurrentlyShown) {
            dropdownMenu.classList.add('show');
            this.setAttribute('aria-expanded', 'true');
        }
    }

    // Setup main dropdowns
    var mainDropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
    mainDropdownToggles.forEach(setupDropdownToggle);

    // Handle submenu dropdowns
    var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');
    dropdownSubmenus.forEach(function(submenu) {
        var dropdownToggle = submenu.querySelector('.dropdown-toggle');
        var dropdownMenu = submenu.querySelector('.submenu');
        
        // Desktop hover effect
        submenu.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 992) {
                dropdownMenu.style.display = 'block';
            }
        });
        
        submenu.addEventListener('mouseleave', function() {
            if (window.innerWidth >= 992) {
                dropdownMenu.style.display = 'none';
            }
        });
        
        // Mobile touch handling
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close all other open submenus first
            document.querySelectorAll('.dropdown-submenu .submenu').forEach(function(menu) {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });
            
            // Toggle submenu visibility
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        // Check if click is outside dropdowns
        if (!e.target.closest('.navbar-nav')) {
            // Close all dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                menu.classList.remove('show');
            });
            document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
                toggle.setAttribute('aria-expanded', 'false');
            });
            document.querySelectorAll('.dropdown-submenu .submenu').forEach(function(menu) {
                menu.style.display = 'none';
            });
        }
    });
});
