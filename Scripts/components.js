class HeaderComponent extends HTMLElement { //Init class component as an extension to DOM
    connectedCallback() { //Invoked each time the custom element is appended into a DOM element
        this.innerHTML = `
            <div class="header-container flex center-vertical">
                <a class="header-left" href="/">
                    <img src="/Images/wutang_logo.png" alt="Wutang Logo">
                    <div class="header-title">
                        Wu-Tang Clan
                    </div>
                </a>
                <div class="header-nav flex">
                    <a href="/">
                        <div class="nav-item">Home</div>
                    </a>
                    <a href="/albums.html">
                        <div class="nav-item">Albums</div>
                    </a>
                    <a href="/contact.html">
                        <div class="nav-item">Contact</div>
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('header-component', HeaderComponent); //defines tag name and sets it as a custom element

class NotificationComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="notification-container" style="display: none;">
                <div class="notification-inner flex">
                    <div class="flex row">
                        <div class="notification-title">
                            Active Title
                        </div>  
                        <div class="notification-close" onclick="hideNotification();">
                        
                        </div>
                    </div>
                    <div class="notification-text">
                        
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('notification-component', NotificationComponent);

class FormComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="mailing-list flex rounded">
                <div class="mail-title">
                    Join Mailing List
                </div>
                <form class="mail-form" name="mail-form" onsubmit="return false">
                    <input type="text" class="input-field mail-input" id="name-input" autocomplete="off" name="name" placeholder="Name"><br>
                    <input type="text" class="input-field mail-input" id="email-input" name="email" placeholder="Email"><br>
                    <input type="submit" class="input-button" value="Submit">
                </form> 
            </div>
        `;
    }
}

customElements.define('form-component', FormComponent);

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="footer-wrapper flex center-both">
                <div class="footer-text">
                    © 2022 Sebastian Blackley. All Rights Reserved.
                </div>
            </div>
        `;
    }
}

customElements.define('footer-component', FooterComponent);

 

class HofButtonComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <a href="/hof.html">
                <button class="hof-button flex rounded">
                    Hall Of Fame
                    <img src="Images/crown.png" style="width: 25px; height: 25px; padding-left: 5px;" alt="Crown Icon">
                </button>
            </a> 
        `;
    }
}

customElements.define('hof-button-component', HofButtonComponent);