class siteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
      <!-- COMPONENT CSS GOES HERE -->
      <style>
        /* SITE FOOTER */
        .site-footer {
            background-color: var(--color-footer-bg);
            color: var(--color-footer-text);
            padding: var(--spacer-large) 0; 
        }
        .site-footer h1, 
        .site-footer h2, 
        .site-footer h3 {
            color: var(--color-footer-text);
        }
        .site-footer .site-nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .site-footer a {
            text-decoration: none;;
            color: var(--color-footer-links);
        }
      </style>
      
      <!-- COMPONENT CSS GOES HERE -->
      <footer class="site-footer">
        <div class="container">

            <div class="row">

                <div class="two-thirds">
                    <h2>Site Footer</h2>
                    <p>This footer is rendered from a reusable web component. It comes from a file named "_site_footer.js" that is located inside of a "components" folder. Developers can edit this singular file to update all footers across the&nbsp;site. </p>
                </div>

                <div class="one-third">

                    <h2>Pages</h2>
                    <nav class="site-nav">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                        </ul>
                    </nav>
                </div>

            </div>

        </div>
      </footer>
      
    `;

    // COMPONENT JAVASCRIPT GOES HERE  
    // const siteFooter = document.querySelector(".site-footer");
    // console.log(siteFooter);
    
  };
};
customElements.define("site-footer", siteFooter);