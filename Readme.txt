A browser extension that will [encourage] users to challenge their biases through consuming site data from sources that oppose their views, with goals of getting people to form a well rounded opinion and understand the opinions of others.
This program is divided into 4 sections:
- Content.html:
    Displays most content and functionality in the program currently.

- Content.js:
    Provides behaviors that manipulate the User's bias score.

- manifest.json:
    This file provides important information that allows the chrome extentsion file to be connected chrome.
    Additionally, in order to use the file it needs to be enabled in the chrome extension developer mode found in Chrome settings.
    Since making comments in JSON is weird I'll break it down here:
    - The "name", "version" and description portions are all self-explanatory since they're just strings.
    - The numbers for the icons set different sizes for a couple types of icons that are used for the main icon next to the search bar and the one in the extensions menu.
    - browser action sets the default icon and the default file used for the popout menu.
    - 


- Assets:
    Contains images being used for the program.
