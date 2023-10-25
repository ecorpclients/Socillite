const OPERATINGSYSTEM=()=>{

    // Check if the user's operating system is Android
    const isAndroid = navigator.userAgent.toLowerCase().includes("android");

    if (isAndroid) {

        // Save 'android' in localStorage if the operating system is Android
        localStorage.setItem('OperatingSystem', 'android');

    } else {

        localStorage.setItem('OperatingSystem', 'Web');
        
    }

}

export{OPERATINGSYSTEM};