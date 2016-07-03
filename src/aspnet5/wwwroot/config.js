System.config({
    baseURL: "/",
    transpiler: "typescript",
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },

    map: {
        'rxjs': 'node_modules/rxjs/Rx.js',
        '@angular/core' :
            'node_modules/angular2/core.js',
        '@angular/common' :
            'https://npmcdn.com/@angular/common@2.0.0-rc.1',
        '@angular/compiler' :
            'https://npmcdn.com/@angular/compiler@2.0.0-rc.1',
        '@angular/platform-browser' :
            'https://npmcdn.com/@angular/platform-browser@2.0.0-rc.1',
        '@angular/platform-browser-dynamic':
            'https://npmcdn.com/@angular/platform-browser-dynamic@2.0.0-rc.1'
    }
    packages: {
        "app": {
            "defaultExtension": "js",
            "main": "angmain.ts"
        }
    }
});