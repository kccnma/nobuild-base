class siteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
      <!-- COMPONENT CSS GOES HERE -->
      <style>
        /* SITE HEADER  */
        .site-header {
            background-color: var(--color-header-bg);
            color: var(--color-header-text);
            padding: var(--spacer-medium);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .site-header .site-logo {
            display: flex;
            align-items: center;
            gap: var(--spacer-small);
        }
        .site-header .site-logo svg {
            fill: var(--color-header-links);
        }
        .site-header img, svg {
            display: block;
        }
        .site-header h1 {
            margin: 0;
            font-size: 1.5em;
        }
        .site-header a {
            color: var(--color-header-links);
            text-decoration: none;
        }
        .site-header .site-nav ul {
            display: flex;
            list-style: none;
            margin: 0;
        }
        .site-header .site-nav a {
            display: block;
            padding: var(--spacer-small);
        }
      </style>
      
      <!-- COMPONENT CSS GOES HERE -->
      <header class="site-header">
        <div class="site-logo">
            <a href="index.html">
                <svg width="40" height="40">
                    <circle cx="20" cy="20" r="20" />
                </svg>
            </a>
            <h1 class="hide-visually"><a href="index.html">No Build Base</a></h1>
        </div>
        <nav class="site-nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
      </header>
      
    `;

    // COMPONENT JAVASCRIPT GOES HERE  
    // const siteHeader = document.querySelector(".site-header");
    // console.log(siteHeader);
    
  };
};
customElements.define("site-header", siteHeader);