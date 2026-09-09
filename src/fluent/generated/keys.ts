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
                    'ra-applicability': {
                        table: 'sys_ux_applicability'
                        id: 'c99aecbff0e8495dbe10a39199f49aa8'
                    }
                    'ra-assignments-active': {
                        table: 'sys_ux_list'
                        id: '1cbcde37d45643e193747bd437295287'
                    }
                    'ra-assignments-all': {
                        table: 'sys_ux_list'
                        id: '7271a05fef064aa28305d038128bba18'
                    }
                    'ra-assignments-category': {
                        table: 'sys_ux_list_category'
                        id: '1bd32b51e6194e62a47c0e49ceda20d6'
                    }
                    'ra-assignments-ending-soon': {
                        table: 'sys_ux_list'
                        id: '235e934b512a4c0f92eee0557a0b5d26'
                    }
                    'ra-br-end-month': {
                        table: 'sys_script'
                        id: '9cae955a94844a34a005aed69c23a7f4'
                    }
                    'ra-companies': {
                        table: 'sys_ux_list'
                        id: '7809c5a55584471084a9d1eb685eb4ca'
                    }
                    'ra-consultants': {
                        table: 'sys_ux_list'
                        id: 'a1e85244e774474e95ba4ccd93c37806'
                    }
                    'ra-dashboard': {
                        table: 'par_dashboard'
                        id: 'e8eef88e83e94c78a58ddcc493d1f17d'
                    }
                    'ra-dashboard-overview-tab': {
                        table: 'par_dashboard_tab'
                        id: '283126c37d664a33952554ca6ab382c9'
                    }
                    'ra-demo-assignment-1': {
                        table: 'x_2207143_k_test_assignment'
                        id: '736b3b6d816542a1b3205a583a40e342'
                    }
                    'ra-demo-assignment-2': {
                        table: 'x_2207143_k_test_assignment'
                        id: 'cae1cd5effb746d78ef60106fec72955'
                    }
                    'ra-demo-assignment-3': {
                        table: 'x_2207143_k_test_assignment'
                        id: 'ce20925e263748d990e3a5504114186e'
                    }
                    'ra-demo-assignment-4': {
                        table: 'x_2207143_k_test_assignment'
                        id: '7f4ee3cc61fd4574bfe77524f284b49c'
                    }
                    'ra-demo-assignment-5': {
                        table: 'x_2207143_k_test_assignment'
                        id: 'ecd957b7b3e74f3d98b3c1869033f527'
                    }
                    'ra-demo-assignment-6': {
                        table: 'x_2207143_k_test_assignment'
                        id: '82619dccd90b454d866d0f503c3d17d9'
                    }
                    'ra-demo-assignment-7': {
                        table: 'x_2207143_k_test_assignment'
                        id: 'b16c8c642c1140b78e5da77aa1b06dc3'
                    }
                    'ra-demo-company-acme': {
                        table: 'core_company'
                        id: '978dd3c054174c37b5884e74826c52f5'
                    }
                    'ra-demo-company-globex': {
                        table: 'core_company'
                        id: 'e03cd9a4f0254b7fbe09cd8c8192c8d3'
                    }
                    'ra-demo-company-northwind': {
                        table: 'core_company'
                        id: '5aa5ab27a78d4c6cbc81fac9bdc4fa38'
                    }
                    'ra-demo-consultant-emily': {
                        table: 'sys_user'
                        id: 'f921d88be89f40eabf7ab76af2371416'
                    }
                    'ra-demo-consultant-jonas': {
                        table: 'sys_user'
                        id: '94aee0a4f3d1480197244c45bfc57534'
                    }
                    'ra-demo-consultant-maria': {
                        table: 'sys_user'
                        id: '32d42d0351f149e09e75ea1146791dc1'
                    }
                    'ra-demo-consultant-noah': {
                        table: 'sys_user'
                        id: 'b6b1709c905a4eb4916c02ca0a0b5125'
                    }
                    'ra-directory-category': {
                        table: 'sys_ux_list_category'
                        id: '3f29e8f879104fbe869d5fbd575d39d7'
                    }
                    'ra-list-config': {
                        table: 'sys_ux_list_menu_config'
                        id: 'c30648743e8b4ce5929bc867936b012e'
                    }
                    'ra-widget-active-count': {
                        table: 'par_dashboard_widget'
                        id: 'ac046c31e7814c4db42137fc52f0a1c9'
                    }
                    'ra-widget-allocation-by-consultant': {
                        table: 'par_dashboard_widget'
                        id: '7681b2ef15c5479296ec54dbd0074d2f'
                    }
                    'ra-widget-avg-allocation': {
                        table: 'par_dashboard_widget'
                        id: '496fc9744fcb4d81bace71495a333c57'
                        deleted: true
                    }
                    'ra-widget-ending-soon-count': {
                        table: 'par_dashboard_widget'
                        id: '955d330954344d478a4e2c79257ee098'
                    }
                    'ra-widget-resources-count': {
                        table: 'par_dashboard_widget'
                        id: 'e7dc6e53e55f45248d86d72bd4f75fe5'
                    }
                    'ra-widget-timeline': {
                        table: 'par_dashboard_widget'
                        id: '6c0e513cac864ab3b0a6bd66dd31f688'
                    }
                    'ra-widget-upcoming-end-dates': {
                        table: 'par_dashboard_widget'
                        id: '376b9b028e52474783ba7c3bdfe26de0'
                        deleted: true
                    }
                    'ra-workspace': {
                        table: 'sys_ux_page_registry'
                        id: 'a2109b0a68144f0aa233f4964a398af3'
                    }
                    'ra-workspace_sys_ux_app_config_workspace': {
                        table: 'sys_ux_app_config'
                        id: '1000a9d9a3224948a1f43b032c5f8b98'
                    }
                    'ra-workspace_sys_ux_app_route_home': {
                        table: 'sys_ux_app_route'
                        id: 'c55e26f39fa24702aacb8298d6001e41'
                    }
                    'ra-workspace_sys_ux_app_route_list': {
                        table: 'sys_ux_app_route'
                        id: '3e8af7e780a04a79be06ee134c80e33e'
                    }
                    'ra-workspace_sys_ux_app_route_record': {
                        table: 'sys_ux_app_route'
                        id: '7c8525ffc33a4ba6a557ede04c66bf41'
                    }
                    'ra-workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: '9ee8cdaee7ea4d99b0512d81cf7e7771'
                    }
                    'ra-workspace_sys_ux_macroponent_record': {
                        table: 'sys_ux_macroponent'
                        id: 'f16a6b2a110d4eca926aad666e8e9631'
                    }
                    'ra-workspace_sys_ux_page_property_chrome_footer': {
                        table: 'sys_ux_page_property'
                        id: '61e8b14759154315825be7800a1145d9'
                    }
                    'ra-workspace_sys_ux_page_property_chrome_header': {
                        table: 'sys_ux_page_property'
                        id: 'dd5e984f5e0a480aad593891ced48ef7'
                    }
                    'ra-workspace_sys_ux_page_property_chrome_tab': {
                        table: 'sys_ux_page_property'
                        id: '05d1a083853a4af881aa611cfe387647'
                    }
                    'ra-workspace_sys_ux_page_property_chrome_toolbar': {
                        table: 'sys_ux_page_property'
                        id: '5439a8b6b7154dee88b007ace1c16040'
                    }
                    'ra-workspace_sys_ux_page_property_listConfigId': {
                        table: 'sys_ux_page_property'
                        id: '1530f3c51d5f436d953dc697af5a7b86'
                    }
                    'ra-workspace_sys_ux_page_property_view': {
                        table: 'sys_ux_page_property'
                        id: '6f90b6c32eaa4fea9ac8676c3cc91bc6'
                    }
                    'ra-workspace_sys_ux_page_property_wbApplicabilityConfigId': {
                        table: 'sys_ux_page_property'
                        id: 'cc349910363f4904bf199313f3533d04'
                    }
                    'ra-workspace_sys_ux_registry_m2m_category_unifiedNav': {
                        table: 'sys_ux_registry_m2m_category'
                        id: 'f79583f706ab48259e2ccc1a08ae1ef3'
                    }
                    'ra-workspace_sys_ux_screen_home': {
                        table: 'sys_ux_screen'
                        id: '702af317de604c84850ce0c108143732'
                    }
                    'ra-workspace_sys_ux_screen_list': {
                        table: 'sys_ux_screen'
                        id: '3e42d3f72d634133af80e5f08d894d46'
                    }
                    'ra-workspace_sys_ux_screen_record': {
                        table: 'sys_ux_screen'
                        id: '9d647ebb5cf34d46bc1973a7b33b5583'
                    }
                    'ra-workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: 'b7113c9e86dd498b9eb6dc3e6ec67362'
                    }
                    'ra-workspace_sys_ux_screen_type_home': {
                        table: 'sys_ux_screen_type'
                        id: '5b1b761d259944d8960c07da87547926'
                    }
                    'ra-workspace_sys_ux_screen_type_list': {
                        table: 'sys_ux_screen_type'
                        id: '8ddd653605b0407b8b7a83b3d47f56c6'
                    }
                    'ra-workspace_sys_ux_screen_type_record': {
                        table: 'sys_ux_screen_type'
                        id: '75863c905cb2457a8fca8d6cf4911143'
                    }
                    'ra-workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '584d5583af834ecd93f0690d11a78ee0'
                    }
                    'ra-workspace-acl': {
                        table: 'sys_security_acl'
                        id: 'b579552db91b4ab099d18cd492fcf32b'
                    }
                    'src_server_business-rules_set-assignment-end-month_ts': {
                        table: 'sys_module'
                        id: '074d0950563e42d6b463aa0660544b48'
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
                        id: '088409ee529c45abad14b297df83e68a'
                        key: {
                            dashboard: 'e8eef88e83e94c78a58ddcc493d1f17d'
                            experience: 'a2109b0a68144f0aa233f4964a398af3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b21d4fdfbc4435e93c8ad0df4492017'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'allocation_percentage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ee7b0b736864cb0a8c5d9cf92012eb1'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1ea19f6d524e4da08af5564b05dacf87'
                        key: {
                            sys_ui_section: {
                                id: '3d3767bdc5c347b9a0986fa085243de5'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    caption: 'Assignment Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '33f876fe1b2d4aa4bafd51e342d38d0c'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3588984351a7434b88862558a9158dc6'
                        key: {
                            sys_ui_section: {
                                id: '3d3767bdc5c347b9a0986fa085243de5'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    caption: 'Assignment Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'company'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '371588f38d344366a93041c14af0ff59'
                        key: {
                            sys_ui_section: {
                                id: '3d3767bdc5c347b9a0986fa085243de5'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    caption: 'Assignment Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'start_date'
                            position: '5'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '393730a9fd1a4d82b757863387086dd0'
                        deleted: true
                        key: {
                            dashboard: 'e8eef88e83e94c78a58ddcc493d1f17d'
                            experience: '08c73d60537101100834ddeeff7b1287'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '39667d93e98146e8bbf6dac06961f362'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3b77207ee7344dfcb8ba26548267d004'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'consultant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '3d3767bdc5c347b9a0986fa085243de5'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            caption: 'Assignment Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '3e27212122f84807a55063286b3c1255'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '45ec441ed73f4f338cf3bdc8bfbd5878'
                        key: {
                            sys_ui_section: {
                                id: '3d3767bdc5c347b9a0986fa085243de5'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    caption: 'Assignment Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '46d86b4bc3dc4930a02228f3eef3de7d'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'company'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c4970a1a16946b685daeee47b96ebf8'
                        key: {
                            sys_ui_section: {
                                id: '3d3767bdc5c347b9a0986fa085243de5'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    caption: 'Assignment Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'consultant'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4fae6db225b84fb3a84400a4aa6e1a19'
                        key: {
                            list_id: {
                                id: '3e27212122f84807a55063286b3c1255'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '56fbb21c296b4051805c0ece35410628'
                        key: {
                            name: 'x_2207143_k_test.user'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '76fe72a778e24d6ba80d47cb7c605266'
                        key: {
                            sys_ui_section: {
                                id: '3d3767bdc5c347b9a0986fa085243de5'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    caption: 'Assignment Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '83eed0d79eff499db0a30df51836cafd'
                        key: {
                            sys_ui_form: {
                                id: '33f876fe1b2d4aa4bafd51e342d38d0c'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '3d3767bdc5c347b9a0986fa085243de5'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    caption: 'Assignment Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '84e9014a6b8c42d5b8a3e00e0712ca36'
                        key: {
                            list_id: {
                                id: '3e27212122f84807a55063286b3c1255'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'allocation_percentage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8554eb4725574628bb1604ad56653e86'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86873b633b2440618d8dab6301e037f9'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'allocation_percentage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a91845d1c514e6396344986426c3cc9'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8b20abf6ed2f4ed99aacf29304ab319c'
                        key: {
                            sys_security_acl: 'b579552db91b4ab099d18cd492fcf32b'
                            sys_user_role: {
                                id: '56fbb21c296b4051805c0ece35410628'
                                key: {
                                    name: 'x_2207143_k_test.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d7563b7221d45849bdda22ba93b7417'
                        key: {
                            sys_ui_section: {
                                id: '3d3767bdc5c347b9a0986fa085243de5'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    caption: 'Assignment Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '927b4b140b464ceba566d48aecf661ea'
                        key: {
                            role: {
                                id: '56fbb21c296b4051805c0ece35410628'
                                key: {
                                    name: 'x_2207143_k_test.user'
                                }
                            }
                            contains: {
                                id: 'f5e15aee00f34fc5a10bb51c934fa189'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b15e5a5afea4f889ed26bba583e7b4d'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'consultant'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a51cbf371ef740949a924c38b00f8c3f'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'end_month'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a63a89e77e334c9bb0e3439b01e876a0'
                        key: {
                            list_id: {
                                id: '3e27212122f84807a55063286b3c1255'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'consultant'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ac4660262aa74925b2057fe30068feba'
                        key: {
                            list_id: {
                                id: '3e27212122f84807a55063286b3c1255'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'adc594196a724c87bbc4adf9d3ae5963'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'company'
                            language: 'en'
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
                    {
                        table: 'sys_db_object'
                        id: 'baf9aa3531d745d382595fe4058f0bad'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2c8bc7e7474477ea94dc0f262775e73'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd4a60ac0c34445429ac4b9fad2a42863'
                        key: {
                            list_id: {
                                id: '3e27212122f84807a55063286b3c1255'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'company'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd741ea7c45a24874bdac20cac9322776'
                        key: {
                            sys_ui_section: {
                                id: '3d3767bdc5c347b9a0986fa085243de5'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    caption: 'Assignment Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'end_date'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcd8b738b18d457bb250b3125dd7d8e1'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e61db148c5e544cbb48eb972030ffe4d'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'end_month'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e89e01c405cc494a8395e1815ccead36'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f0b15c90bf2f4d0ebfb1918424ebfd7f'
                        key: {
                            list_id: {
                                id: '3e27212122f84807a55063286b3c1255'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f648b9d1a3cc41ae85a97947ee29b126'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8b9764af0854526b5f1c37e1df7438d'
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fbaa72747bad4eb08bc7f23643628ede'
                        key: {
                            sys_ui_section: {
                                id: '3d3767bdc5c347b9a0986fa085243de5'
                                key: {
                                    name: 'x_2207143_k_test_assignment'
                                    caption: 'Assignment Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'allocation_percentage'
                            position: '7'
                        }
                    },
                ]
            }
        }
    }
}
