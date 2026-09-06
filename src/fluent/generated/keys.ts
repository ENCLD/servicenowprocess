import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '222e4792e5a14bbab3f1f6712a2b84c2'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '288c3d6097354894bf55889051205f28'
                        deleted: true
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'cf69b2ff51384e31a2e5cf45d22a46f3'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'd9db9f0e7a3048d4986011a46493be92'
                    }
                    'ra-dashboard': {
                        table: 'par_dashboard'
                        id: 'e8eef88e83e94c78a58ddcc493d1f17d'
                    }
                    'ra-dashboard-overview-tab': {
                        table: 'par_dashboard_tab'
                        id: '283126c37d664a33952554ca6ab382c9'
                    }
                    'ra-widget-active-count': {
                        table: 'par_dashboard_widget'
                        id: 'ac046c31e7814c4db42137fc52f0a1c9'
                    }
                    'ra-widget-avg-allocation': {
                        table: 'par_dashboard_widget'
                        id: '496fc9744fcb4d81bace71495a333c57'
                    }
                    'ra-widget-ending-soon-count': {
                        table: 'par_dashboard_widget'
                        id: '955d330954344d478a4e2c79257ee098'
                    }
                    'ra-widget-resources-count': {
                        table: 'par_dashboard_widget'
                        id: 'e7dc6e53e55f45248d86d72bd4f75fe5'
                    }
                    'ra-widget-upcoming-end-dates': {
                        table: 'par_dashboard_widget'
                        id: '376b9b028e52474783ba7c3bdfe26de0'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '8d97018cd34e4ff4afde4fe3a3e96786'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'par_dashboard_visibility'
                        id: '393730a9fd1a4d82b757863387086dd0'
                        key: {
                            dashboard: 'e8eef88e83e94c78a58ddcc493d1f17d'
                            experience: '08c73d60537101100834ddeeff7b1287'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'b24a028ff98e4c60ae8ff2429a552d30'
                        key: {
                            dashboard: 'e8eef88e83e94c78a58ddcc493d1f17d'
                            dashboard_tab: '283126c37d664a33952554ca6ab382c9'
                        }
                    },
                ]
            }
        }
    }
}
