import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'allokering-01': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '5b809b12a77544aa847e6761cad8f176'
                    }
                    'allokering-02': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '24f049005326461481569a91c60570ea'
                    }
                    'allokering-03': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '91b5152651674ed7861b97f09962dfd9'
                    }
                    'allokering-04': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '6e66d9362ab140dca4f6b7a662f103d2'
                    }
                    'allokering-05': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: 'fad7267581ef48f8b38ed865afbf3914'
                    }
                    'allokering-06': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: 'b20d72e29b1a4471808b7903d0546015'
                    }
                    'allokering-07': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '30ea3bff208a461e81dfe5a00ea26d9c'
                    }
                    'allokering-08': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: 'f290ab4efab14060bd1fd58787850fe3'
                    }
                    'allokering-09': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '269f79be86984849b3e96334ed90dc54'
                    }
                    'allokering-10': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '767d24c2189b45d3b30e26e8b1937439'
                    }
                    'allokering-11': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '38502d534cf64a59a4fd3498b6dc3538'
                    }
                    'allokering-12': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: 'e831ad3d6896420f82824cc979c02a63'
                    }
                    'allokering-13': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '5873628491f743b897cd64e4507729a8'
                    }
                    'allokering-14': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '2067ce19ff8343e6b6b934fc98288764'
                    }
                    'allokering-15': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: '2310e48cb5ea435aaa3dd01f96fe8d06'
                    }
                    'allokering-16': {
                        table: 'x_2207143_ra_b1_allokering'
                        id: 'e8e833e4d3e94ddf9b80ddb75ad67aa9'
                    }
                    'api-ra': {
                        table: 'sys_ws_definition'
                        id: 'a94d719bfa904a1985d4ec9870b4b3d9'
                    }
                    'api-ra-oversikt': {
                        table: 'sys_ws_operation'
                        id: 'ab17088b19fa40d996fa85bb9488dfa3'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '05c12268dc8940a4ab58c9d7503011c3'
                    }
                    'br-valider-allokering': {
                        table: 'sys_script'
                        id: '715fe4c3a8c441cca92dd71960344fa6'
                    }
                    'br-varsle-overallokering': {
                        table: 'sys_script'
                        id: 'd24b929b111e41e9a1186ffd472d011d'
                    }
                    'konsulent-ahmed': {
                        table: 'x_2207143_ra_b1_konsulent'
                        id: '2c3d377f776042e09ca766120e85396e'
                    }
                    'konsulent-erik': {
                        table: 'x_2207143_ra_b1_konsulent'
                        id: 'b2699734b33047bd9ca44f8664e752f9'
                    }
                    'konsulent-ingrid': {
                        table: 'x_2207143_ra_b1_konsulent'
                        id: 'a3a3afde1315475190eb321d25d30d71'
                    }
                    'konsulent-jonas': {
                        table: 'x_2207143_ra_b1_konsulent'
                        id: '7693a4b720c646c9bc9163a6371adbc5'
                    }
                    'konsulent-lina': {
                        table: 'x_2207143_ra_b1_konsulent'
                        id: 'c75ef1d33f3b4cbea3539ac6c2f70553'
                    }
                    'konsulent-maria': {
                        table: 'x_2207143_ra_b1_konsulent'
                        id: 'd7efcc4bc9b74c75865edc72b64f75a4'
                    }
                    'konsulent-sofie': {
                        table: 'x_2207143_ra_b1_konsulent'
                        id: '47c74389c1ac4a639e3c67b5c22e4ce9'
                    }
                    'konsulent-thomas': {
                        table: 'x_2207143_ra_b1_konsulent'
                        id: '3c6526783249421596075a408e6d7a7f'
                    }
                    'kunde-fjordbank': {
                        table: 'x_2207143_ra_b1_kunde'
                        id: '10a2ccb5201a4c5da4f9eacdd9a0f41a'
                    }
                    'kunde-havbruk': {
                        table: 'x_2207143_ra_b1_kunde'
                        id: 'a9273c1be2ce44d58bf05a525067739d'
                    }
                    'kunde-nordlys': {
                        table: 'x_2207143_ra_b1_kunde'
                        id: '816a5ae496754361bba13c789e2c2b84'
                    }
                    'kunde-tindra': {
                        table: 'x_2207143_ra_b1_kunde'
                        id: '885a8c9f820c42b6ba5ba182dc2515e0'
                    }
                    'meny-ressurs': {
                        table: 'sys_app_application'
                        id: '4024dffa7d284604a809cc350f35d29d'
                    }
                    'modul-allokeringer': {
                        table: 'sys_app_module'
                        id: 'aef9a6677874422c9d0b107290a2e383'
                    }
                    'modul-konsulenter': {
                        table: 'sys_app_module'
                        id: 'c6414adcdf364e8c8bc514bee631daf2'
                    }
                    'modul-kunder': {
                        table: 'sys_app_module'
                        id: 'ff4f394aab3d42cc9f5838cba9b33ea6'
                    }
                    'modul-ny-allokering': {
                        table: 'sys_app_module'
                        id: 'a64ee1b715a9482daffff27ca8a155bf'
                    }
                    'modul-oversikt': {
                        table: 'sys_app_module'
                        id: '94e879e3145f40f68d294d8701e6c378'
                        deleted: true
                    }
                    'modul-skille-data': {
                        table: 'sys_app_module'
                        id: 'b35d53f0233f49cf90de0f77a538c20d'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '587bb7b246e442879a592323ade901e4'
                    }
                    'src_server_allokering-regler_ts': {
                        table: 'sys_module'
                        id: '08fb2079db5245b4b41e3a3d1fbd23b8'
                    }
                    src_server_data_ts: {
                        table: 'sys_module'
                        id: '9a183c7474b24d9484f08bb595c3bd29'
                    }
                    'src_server_oversikt-api_ts': {
                        table: 'sys_module'
                        id: '3292843f13af4808b779cd6efd4e03af'
                    }
                    'src_server_oversikt-modell_ts': {
                        table: 'sys_module'
                        id: '1ee01684cfe1400d9c4ce703cfe1b237'
                    }
                    src_server_regler_ts: {
                        table: 'sys_module'
                        id: '941db9ea64744dda9dab450ef24a64ee'
                    }
                }
                composite: [
                    {
                        table: 'sys_ux_lib_asset'
                        id: '0a3454cb76f34c4bad308078d5e1636c'
                        deleted: true
                        key: {
                            name: 'x_2207143_ra_b1/main'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f34e99786854e0eae7a34b108b5adbc'
                        key: {
                            name: 'x_2207143_ra_b1_konsulent'
                            element: 'aktiv'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '10a0106a8f184ddfa36f17faa962e758'
                        key: {
                            name: 'x_2207143_ra_b1_konsulent'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '11250498e5364590bc7a42bea400890c'
                        deleted: true
                        key: {
                            name: 'x_2207143_ra_b1_ressurs.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '12bcefb2b6564355a0ea3c728ad002c1'
                        key: {
                            name: 'x_2207143_ra_b1_kunde'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1673fb82b4b0454abe4e4df3d2c52d8a'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'til_dato'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c626b9e8ec343a6ad47d2f7d5278e62'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'kunde'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d7f205ea06e48d588141e8bef494068'
                        key: {
                            name: 'x_2207143_ra_b1_kunde'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2eedee1bf5aa4dd891373c171ceffdfc'
                        key: {
                            name: 'x_2207143_ra_b1_konsulent'
                            element: 'navn'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '348f9505de0d4e27af6426e94da9cb86'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'konsulent'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '35434f356d104da0a80fb7b5681f661f'
                        key: {
                            name: 'x_2207143_ra_b1_konsulent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '472d7ec54c2f42e4acfe79d41ccdad72'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'konsulent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b057d1751e442218561b675c48842a5'
                        key: {
                            name: 'x_2207143_ra_b1_konsulent'
                            element: 'navn'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b67dafb20824af59b234345e996016e'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'kunde'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4ba793240e0440ada83ce0ed0acc2ef1'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '4bf070ea6f8a4e88a5633a64150c3f09'
                        deleted: true
                        key: {
                            endpoint: 'x_2207143_ra_b1_ressurs.do'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '514673da71fe43f9ad33c04d0833ae2f'
                        deleted: true
                        key: {
                            application_file: '6327ecd751c44f50a858f3605e4805c9'
                            source_artifact: '11250498e5364590bc7a42bea400890c'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56bcb5df842446bba39ad789c36d01ac'
                        key: {
                            name: 'x_2207143_ra_b1_konsulent'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e35a9e0279c4e3aa09502833e23b03d'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'prosent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '6327ecd751c44f50a858f3605e4805c9'
                        deleted: true
                        key: {
                            name: 'x_2207143_ra_b1/main.js.map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7410652c2cd143abb635855633520fce'
                        key: {
                            name: 'x_2207143_ra_b1_kunde'
                            element: 'bedriftsnavn'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '78947ced7d3d4ae583b3c41dd1574f72'
                        key: {
                            name: 'x_2207143_ra_b1_kunde'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a20232939234d03a90e518e7fd30e7d'
                        key: {
                            name: 'x_2207143_ra_b1_konsulent'
                            element: 'tittel'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '82acd65c64bf402ca61e1913d8219302'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'til_dato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '84a838d9da104e1fac195658712d99d8'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'prosent'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '88a6336b9a3443aa870368555014236c'
                        deleted: true
                        key: {
                            application_file: '4bf070ea6f8a4e88a5633a64150c3f09'
                            source_artifact: '11250498e5364590bc7a42bea400890c'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8e38286ed1ba4957b0de6d7b7a668169'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f4002e2a997433aadec25ec59d4cbe5'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'fra_dato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '95fb6092627c4dcca0b71579778e1464'
                        key: {
                            name: 'x_2207143_ra_b1_kunde'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '99897d9d17f34009a3079e2f79c64b37'
                        deleted: true
                        key: {
                            application_file: '0a3454cb76f34c4bad308078d5e1636c'
                            source_artifact: '11250498e5364590bc7a42bea400890c'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b717a6e46d84aad9e62257596982943'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'fra_dato'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0d73581322645b0ab59bdfcee1e8e69'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a57ef120ce404df990515b7a6b9e5bc4'
                        key: {
                            name: 'x_2207143_ra_b1_konsulent'
                            element: 'tittel'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bc7991a8ac0a40a38a34616e640df68b'
                        key: {
                            name: 'x_2207143_ra_b1_konsulent'
                            element: 'aktiv'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'be96fbc4b0c640fd833550a1edca3a40'
                        key: {
                            name: 'x_2207143_ra_b1_allokering'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f4e74b17432e44a6a63124c74b13c623'
                        key: {
                            name: 'x_2207143_ra_b1_konsulent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fea11f351e3147ccb1726987210b3dc9'
                        key: {
                            name: 'x_2207143_ra_b1_kunde'
                            element: 'bedriftsnavn'
                        }
                    },
                ]
            }
        }
    }
}
