{
    // Disable sending telemetry to microsoft
    "telemetry.enableTelemetry": false,
    "telemetry.enableCrashReporter": false,

    // Set vscode icons and benchmark settings
    "workbench.activityBar.visible": true,
    "workbench.statusBar.visible": true,

    // Editor settings
    "editor.formatOnSave": false,
    "editor.minimap.enabled": true,
    "editor.wordWrap": "on",
    "editor.lineNumbers": "on",
    "editor.linkedEditing": true,
    "editor.autoIndent": "advanced",
    "editor.fontLigatures": true,

    // Prettier settings
    "prettier.singleQuote": true,
    "prettier.enable": true,
    "prettier.tabWidth": 2,

    // Emmet settings
    "emmet.excludeLanguages": [
        "markdown"
    ],
    
    // File settings
    "files.autoSave": "onFocusChange",
    "explorer.confirmDelete": false,
    "files.associations": {
        "*.html": "html",
        "*.txt": "txt",
    },

    // Live server settings
    "liveServer.settings.donotShowInfoMsg": true,

    // bracket pair colorizer
    "bracket-pair-colorizer-2.forceUniqueOpeningColor": true,
    "editor.tabSize": 2,

    // Workbench settings
    "workbench.colorTheme": "GitHub Dark",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.editor.decorations.badges": true,
    "workbench.colorCustomizations": {
        "activityBarBadge.background": "#2CA142",
        "badge.background": "#2ca142",
        "badge.foreground": "#fff",
        //"activityBar.inactiveForeground": "#2ca000",
        "activityBar.foreground": "#2ca000",
        //"activityBar.activeBorder": "#eee",
        

    },
    

    // Code spaces
    "codespaces.defaultExtensions": [
        "ms-vsonline.vsonline",
        "GitHub.vscode-pull-request-github",
        "ms-vsliveshare.vsliveshare",
        "visualstudioexptteam.vscodeintellicode"
      ],
    "codespaces.accountProvider": "Uninitialized",
    
    // Html and CSS settings
    "css.validate": false,
    "scss.validate": false,
    "less.validate": false,

    // Markdown settings
    "markdown-preview-enhanced.liveUpdate": true,

    // javascript specific settings
    "javascript.autoClosingTags": true,
    "javascript.updateImportsOnFileMove.enabled": "always",

    // Python and django
    "emmet.includeLanguages": {"djnago-html": "html"},
    "python.linting.pylintEnabled": true,
    "python.linting.enabled": true,
    "vsicons.associations.files": [
        {"**/templates/**/*.html": "django-html"},
    ],

}
