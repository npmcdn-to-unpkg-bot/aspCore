System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
        'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
        '@angular/core' :
            'https://npmcdn.com/@angular/core@2.0.0-rc.1',
        '@angular/common' :
            'https://npmcdn.com/@angular/common@2.0.0-rc.1',
        '@angular/compiler' :
            'https://npmcdn.com/@angular/compiler@2.0.0-rc.1',
        '@angular/platform-browser' :
            'https://npmcdn.com/@angular/platform-browser@2.0.0-rc.1',
        '@angular/platform-browser-dynamic':
            'https://npmcdn.com/@angular/platform-browser-dynamic@2.0.0-rc.1'
    },
    packages: {
        '@angular/core' : {main: 'index.js'},
        '@angular/common' : {main: 'index.js'},
        '@angular/compiler' : {main: 'index.js'},
        '@angular/platform-browser' : {main: 'index.js'},
        '@angular/platform-browser-dynamic': {main: 'index.js'},
        "app": {
            "defaultExtension": "ts",
            "main": "angmain.ts"
        }
    }
});