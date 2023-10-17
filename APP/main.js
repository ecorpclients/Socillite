

const BODY = document.querySelector('body');
const DIV = document.querySelector('div');

// STYLES...
BODY.style.position = 'fixed';
BODY.style.width = '100%';
BODY.style.height = '100%';
BODY.style.overflow = 'hidden';
BODY.style.background = '#5C829A';
BODY.style.display = 'block';
BODY.style.padding = '0';
BODY.style.margin = '0';
BODY.style.scrollBehavior = 'smooth';
BODY.style.color = 'white';

// STYLES...
DIV.style.position = 'fixed';
DIV.style.width = '100%';
DIV.style.height = '100%';
DIV.style.overflow = 'hidden';
DIV.style.background = '#5C829A';
DIV.style.display = 'block';

// SPLASHSCREEN function
const SPLASHSCREEN = () => {
  // Create elements and set their styles for your splash screen here...

  // APP IMAGE
  const APPIMAGE = document.createElement('img');
  // APP SOURCE
  APPIMAGE.src = 'socie 512.svg';
  // STYLES
  APPIMAGE.style.position = 'absolute';
  APPIMAGE.style.width = '100%';
  APPIMAGE.style.height = '100%';
  APPIMAGE.style.objectFit = 'auto';
  APPIMAGE.style.position = 'absolute';

  DIV.append(APPIMAGE);

  // Event listener to check online/offline status after 2 seconds
  setTimeout(() => {
    // Dynamically import the CONNECTION module
    import("").then((module) => {
      // Check if the user is online
      if (navigator.onLine) {
        // Perform your online actions here, e.g., load CONNECTION
        module.CONNECTION(DIV);

      }
    });
  }, 2000);
};

// Always show the splash screen
SPLASHSCREEN();
