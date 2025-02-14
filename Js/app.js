(async function(){
    // Inject custom scrollbar CSS
    var style = document.createElement('style');
    style.textContent = `
        :root {
            --scrollbar-bg: rgb(240, 238, 230);
            --scrollbar-thumb: rgb(200, 198, 190);
            --scrollbar-thumb-hover: rgb(180, 178, 170);
        }

        *::-webkit-scrollbar {
            width: 10px;
            height: 10px;
            background-color: var(--scrollbar-bg);
        }

        *::-webkit-scrollbar-track {
            background-color: var(--scrollbar-bg);
        }

        *::-webkit-scrollbar-thumb {
            background-color: var(--scrollbar-thumb);
            border-radius: 4px;
            transition: background-color 0.2s ease;
        }

        *::-webkit-scrollbar-thumb:hover {
            background-color: var(--scrollbar-thumb-hover);
        }

        * {
            scrollbar-width: thin;
            scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-bg);
        }

        html {
            scroll-behavior: smooth;
        }

        /* Ensure paragraph is fully visible */
        #home p {
            max-width: 100%;
            width: 100%;
            overflow-wrap: break-word;
            word-wrap: break-word;
            word-break: break-word;
            white-space: normal;
        }

        #main {
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            padding-right: 20px !important;
            box-sizing: border-box;
        }
    `;
    document.head.appendChild(style);

    document.body.style.backgroundColor = "rgb(240, 238, 230)"
    document.body.style.margin = "0px"
    document.body.style.padding = "0px"
    document.body.style.fontFamily = "Rubik"
    document.body.style.minHeight = "100vh"
    // CHANGED: was "hidden"
    document.body.style.overflow = "auto"
    
    var MIN_WIDTH = 200
    
    var getHandleSpacing = function() {
        return window.innerHeight / 40
    }

    var getScalingOrigin = function(){
        return window.innerWidth * window.innerHeight / 3000
    }
    
    var originalMain = document.getElementById("main")
    var sidebar = document.getElementById("sidebar")
    
    // Create wrapper with precise dimensions
    var mainWrapper = document.createElement('div')
    mainWrapper.style.position = 'fixed'
    mainWrapper.style.top = '0'
    mainWrapper.style.right = '10px'
    mainWrapper.style.bottom = '10px'
    mainWrapper.style.overflowY = 'hidden'
    // CHANGED: was "hidden"
    mainWrapper.style.overflowX = 'auto'
    
    // Setup initial styles
    sidebar.style.backgroundColor = "rgb(240, 238, 2305)"
    sidebar.style.position = "fixed"
    sidebar.style.top = "0"
    sidebar.style.left = "0"
    sidebar.style.height = "100%"
    sidebar.style.paddingLeft = getScalingOrigin() / 10 + "px"
    sidebar.style.zIndex = "1"
    
    originalMain.style.backgroundColor = "rgb(240, 238, 230)"
    originalMain.style.height = '100%'
    originalMain.style.overflowY = 'scroll'
    originalMain.style.overflowX = 'auto'
    originalMain.style.position = "relative"
    originalMain.style.minWidth = "600px"
    originalMain.style.width = "100%"
    
    // Append elements
    originalMain.parentNode.insertBefore(mainWrapper, originalMain)
    mainWrapper.appendChild(originalMain)
    
    focused = "home"

    function changeFocused(newFocused){
        focused = newFocused

        if (focused == "home"){
            document.getElementById("home").style.display = "block"
            document.getElementById("projects").style.display = "none"
            document.getElementById("contact").style.display = "none"
        }
        else if (focused == "projects"){
            document.getElementById("home").style.display = "none"
            document.getElementById("projects").style.display = "block"
            document.getElementById("contact").style.display = "none"
        }
        else if (focused == "contact"){
            document.getElementById("home").style.display = "none"
            document.getElementById("projects").style.display = "none"
            document.getElementById("contact").style.display = "block"
        }
    }

    changeFocused("home")
    
    // Create resize handle and border
    var resizeHandle = document.createElement('div')
    resizeHandle.style.width = '8px'
    resizeHandle.style.position = 'absolute'
    resizeHandle.style.right = '-8px'
    resizeHandle.style.cursor = 'col-resize'
    resizeHandle.style.backgroundColor = 'rgb(223, 221, 221)'
    resizeHandle.style.zIndex = "1000"
    resizeHandle.style.borderRadius = "4px"
    
    var borderElement = document.createElement('div')
    borderElement.style.position = 'absolute'
    borderElement.style.right = '-8px'
    borderElement.style.backgroundColor = 'rgb(223, 221, 221)'
    borderElement.style.zIndex = '1'
    borderElement.style.borderRadius = "4px"
    
    sidebar.appendChild(resizeHandle)
    sidebar.appendChild(borderElement)
    
    // Resize functionality
    var isResizing = false
    var startX, startWidth

    resizeHandle.addEventListener('mousedown', (e) => {
        isResizing = true
        startX = e.clientX
        startWidth = parseInt(window.getComputedStyle(sidebar).width)
        document.body.style.userSelect = 'none'
        e.preventDefault()
    })

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return
        
        var width = startWidth + (e.clientX - startX)
        width = Math.max(MIN_WIDTH, width)
        width = Math.min(width, window.innerWidth * 0.4)
        
        sidebar.style.width = width + 'px'
        mainWrapper.style.left = width + 'px'
    })

    document.addEventListener('mouseup', () => {
        isResizing = false
        document.body.style.userSelect = ''
    })

    var style = function(){
        if (!sidebar.style.width) {
            sidebar.style.width = window.innerWidth / 4 + "px"
            if (parseFloat(sidebar.style.width) < 200){
                sidebar.style.width = "200px"
            }
        }
        
        borderElement.style.width = getScalingOrigin() / 50 + "px"
        
        var spacing = getHandleSpacing()
        resizeHandle.style.top = spacing + 'px'
        resizeHandle.style.height = `calc(100% - ${spacing * 2}px)`
        borderElement.style.top = spacing + 'px'
        borderElement.style.height = `calc(100% - ${spacing * 2}px)`
        
        mainWrapper.style.left = sidebar.style.width
        
        var sidebarWidth = parseFloat(sidebar.style.width)
        var remainingWidth = window.innerWidth - sidebarWidth
        var basePadding = remainingWidth * 0.033
        var maxPadding = 40
        originalMain.style.paddingLeft = Math.min(basePadding, maxPadding) + parseFloat(sidebar.style.paddingLeft) + "px"
    }

    style()
    window.onresize = style

    var homeButton = document.getElementById("home_button")
    homeButton.addEventListener("click", function(){
        changeFocused("home")
    })

    var projectsButton = document.getElementById("projects_button")
    projectsButton.addEventListener("click", function(){
        changeFocused("projects")
    })

    var contactButton = document.getElementById("contact_button")
    contactButton.addEventListener("click", function(){
        changeFocused("contact")
    })
})()
