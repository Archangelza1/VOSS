module.exports = {
    src_folders: ['tests'],
    page_objects_path: ['pages'],
    globals_path: 'globals.js',

    test_workers: {
        enabled: true,
        workers: 'auto'
    },

    test_settings: {
        selenium: {
            launch_url: 'https://ultimateqa.com/automation/',
            selenium: {
                start_process: true,
                port: 4444,
                server_path: require('selenium-server-standalone-jar').path,
                workers: {

                },
                cli_args: {
                    'webdriver.gecko.driver': require('geckodriver').path,
                    'webdriver.chrome.driver': require('chromedriver').path,
                }
            },
            webdriver: {
                start_process: false
            }
        },

        'chrome': {
            extends: 'selenium',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions : {
                    w3c: false
                }
            }
        },

        'firefox': {
            extends: 'selenium',
            desiredCapabilities: {
                browserName: 'firefox'
            }
        },
    }
};
