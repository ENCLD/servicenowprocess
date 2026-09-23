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
                        deleted: true
                    }
                    'ra-assignments-active': {
                        table: 'sys_ux_list'
                        id: '1cbcde37d45643e193747bd437295287'
                        deleted: true
                    }
                    'ra-assignments-all': {
                        table: 'sys_ux_list'
                        id: '7271a05fef064aa28305d038128bba18'
                        deleted: true
                    }
                    'ra-assignments-category': {
                        table: 'sys_ux_list_category'
                        id: '1bd32b51e6194e62a47c0e49ceda20d6'
                        deleted: true
                    }
                    'ra-assignments-ending-soon': {
                        table: 'sys_ux_list'
                        id: '235e934b512a4c0f92eee0557a0b5d26'
                        deleted: true
                    }
                    'ra-br-end-month': {
                        table: 'sys_script'
                        id: '9cae955a94844a34a005aed69c23a7f4'
                        deleted: false
                    }
                    'ra-companies': {
                        table: 'sys_ux_list'
                        id: '7809c5a55584471084a9d1eb685eb4ca'
                        deleted: true
                    }
                    'ra-consultants': {
                        table: 'sys_ux_list'
                        id: 'a1e85244e774474e95ba4ccd93c37806'
                        deleted: true
                    }
                    'ra-dashboard': {
                        table: 'par_dashboard'
                        id: 'e8eef88e83e94c78a58ddcc493d1f17d'
                        deleted: true
                    }
                    'ra-dashboard-overview-tab': {
                        table: 'par_dashboard_tab'
                        id: '283126c37d664a33952554ca6ab382c9'
                        deleted: true
                    }
                    'ra-demo-assignment-1': {
                        table: 'x_2207143_k_test_assignment'
                        id: '736b3b6d816542a1b3205a583a40e342'
                        deleted: false
                    }
                    'ra-demo-assignment-2': {
                        table: 'x_2207143_k_test_assignment'
                        id: 'cae1cd5effb746d78ef60106fec72955'
                        deleted: false
                    }
                    'ra-demo-assignment-3': {
                        table: 'x_2207143_k_test_assignment'
                        id: 'ce20925e263748d990e3a5504114186e'
                        deleted: false
                    }
                    'ra-demo-assignment-4': {
                        table: 'x_2207143_k_test_assignment'
                        id: '7f4ee3cc61fd4574bfe77524f284b49c'
                        deleted: true
                    }
                    'ra-demo-assignment-5': {
                        table: 'x_2207143_k_test_assignment'
                        id: 'ecd957b7b3e74f3d98b3c1869033f527'
                        deleted: true
                    }
                    'ra-demo-assignment-6': {
                        table: 'x_2207143_k_test_assignment'
                        id: '82619dccd90b454d866d0f503c3d17d9'
                        deleted: true
                    }
                    'ra-demo-assignment-7': {
                        table: 'x_2207143_k_test_assignment'
                        id: 'b16c8c642c1140b78e5da77aa1b06dc3'
                        deleted: true
                    }
                    'ra-demo-company-acme': {
                        table: 'core_company'
                        id: '978dd3c054174c37b5884e74826c52f5'
                        deleted: false
                    }
                    'ra-demo-company-globex': {
                        table: 'core_company'
                        id: 'e03cd9a4f0254b7fbe09cd8c8192c8d3'
                        deleted: false
                    }
                    'ra-demo-company-northwind': {
                        table: 'core_company'
                        id: '5aa5ab27a78d4c6cbc81fac9bdc4fa38'
                        deleted: true
                    }
                    'ra-demo-consultant-emily': {
                        table: 'sys_user'
                        id: 'f921d88be89f40eabf7ab76af2371416'
                        deleted: true
                    }
                    'ra-demo-consultant-jonas': {
                        table: 'sys_user'
                        id: '94aee0a4f3d1480197244c45bfc57534'
                        deleted: false
                    }
                    'ra-demo-consultant-maria': {
                        table: 'sys_user'
                        id: '32d42d0351f149e09e75ea1146791dc1'
                        deleted: false
                    }
                    'ra-demo-consultant-noah': {
                        table: 'sys_user'
                        id: 'b6b1709c905a4eb4916c02ca0a0b5125'
                        deleted: true
                    }
                    'ra-directory-category': {
                        table: 'sys_ux_list_category'
                        id: '3f29e8f879104fbe869d5fbd575d39d7'
                        deleted: true
                    }
                    'ra-list-config': {
                        table: 'sys_ux_list_menu_config'
                        id: 'c30648743e8b4ce5929bc867936b012e'
                        deleted: true
                    }
                    'ra-widget-active-count': {
                        table: 'par_dashboard_widget'
                        id: 'ac046c31e7814c4db42137fc52f0a1c9'
                        deleted: true
                    }
                    'ra-widget-allocation-by-consultant': {
                        table: 'par_dashboard_widget'
                        id: '7681b2ef15c5479296ec54dbd0074d2f'
                        deleted: true
                    }
                    'ra-widget-avg-allocation': {
                        table: 'par_dashboard_widget'
                        id: '496fc9744fcb4d81bace71495a333c57'
                        deleted: true
                    }
                    'ra-widget-ending-soon-count': {
                        table: 'par_dashboard_widget'
                        id: '955d330954344d478a4e2c79257ee098'
                        deleted: true
                    }
                    'ra-widget-resources-count': {
                        table: 'par_dashboard_widget'
                        id: 'e7dc6e53e55f45248d86d72bd4f75fe5'
                        deleted: true
                    }
                    'ra-widget-timeline': {
                        table: 'par_dashboard_widget'
                        id: '6c0e513cac864ab3b0a6bd66dd31f688'
                        deleted: true
                    }
                    'ra-widget-upcoming-end-dates': {
                        table: 'par_dashboard_widget'
                        id: '376b9b028e52474783ba7c3bdfe26de0'
                        deleted: true
                    }
                    'ra-workspace': {
                        table: 'sys_ux_page_registry'
                        id: 'a2109b0a68144f0aa233f4964a398af3'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_app_config_workspace': {
                        table: 'sys_ux_app_config'
                        id: '1000a9d9a3224948a1f43b032c5f8b98'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_app_route_home': {
                        table: 'sys_ux_app_route'
                        id: 'c55e26f39fa24702aacb8298d6001e41'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_app_route_list': {
                        table: 'sys_ux_app_route'
                        id: '3e8af7e780a04a79be06ee134c80e33e'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_app_route_record': {
                        table: 'sys_ux_app_route'
                        id: '7c8525ffc33a4ba6a557ede04c66bf41'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: '9ee8cdaee7ea4d99b0512d81cf7e7771'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_macroponent_record': {
                        table: 'sys_ux_macroponent'
                        id: 'f16a6b2a110d4eca926aad666e8e9631'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_page_property_chrome_footer': {
                        table: 'sys_ux_page_property'
                        id: '61e8b14759154315825be7800a1145d9'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_page_property_chrome_header': {
                        table: 'sys_ux_page_property'
                        id: 'dd5e984f5e0a480aad593891ced48ef7'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_page_property_chrome_tab': {
                        table: 'sys_ux_page_property'
                        id: '05d1a083853a4af881aa611cfe387647'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_page_property_chrome_toolbar': {
                        table: 'sys_ux_page_property'
                        id: '5439a8b6b7154dee88b007ace1c16040'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_page_property_listConfigId': {
                        table: 'sys_ux_page_property'
                        id: '1530f3c51d5f436d953dc697af5a7b86'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_page_property_view': {
                        table: 'sys_ux_page_property'
                        id: '6f90b6c32eaa4fea9ac8676c3cc91bc6'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_page_property_wbApplicabilityConfigId': {
                        table: 'sys_ux_page_property'
                        id: 'cc349910363f4904bf199313f3533d04'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_registry_m2m_category_unifiedNav': {
                        table: 'sys_ux_registry_m2m_category'
                        id: 'f79583f706ab48259e2ccc1a08ae1ef3'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_screen_home': {
                        table: 'sys_ux_screen'
                        id: '702af317de604c84850ce0c108143732'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_screen_list': {
                        table: 'sys_ux_screen'
                        id: '3e42d3f72d634133af80e5f08d894d46'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_screen_record': {
                        table: 'sys_ux_screen'
                        id: '9d647ebb5cf34d46bc1973a7b33b5583'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: 'b7113c9e86dd498b9eb6dc3e6ec67362'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_screen_type_home': {
                        table: 'sys_ux_screen_type'
                        id: '5b1b761d259944d8960c07da87547926'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_screen_type_list': {
                        table: 'sys_ux_screen_type'
                        id: '8ddd653605b0407b8b7a83b3d47f56c6'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_screen_type_record': {
                        table: 'sys_ux_screen_type'
                        id: '75863c905cb2457a8fca8d6cf4911143'
                        deleted: true
                    }
                    'ra-workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '584d5583af834ecd93f0690d11a78ee0'
                        deleted: true
                    }
                    'ra-workspace-acl': {
                        table: 'sys_security_acl'
                        id: 'b579552db91b4ab099d18cd492fcf32b'
                        deleted: true
                    }
                    'ra2-applicability': {
                        table: 'sys_ux_applicability'
                        id: '9692732a597c423e94b2e3e5661aa19b'
                        deleted: true
                    }
                    'ra2-assignments-active': {
                        table: 'sys_ux_list'
                        id: '3dce6431154a4e2394b66fc72da1dbdf'
                        deleted: true
                    }
                    'ra2-assignments-all': {
                        table: 'sys_ux_list'
                        id: '5578c48655224803a485bd6d76d34f3f'
                        deleted: true
                    }
                    'ra2-assignments-category': {
                        table: 'sys_ux_list_category'
                        id: '963bf9304edd4c69973c498ff3c0dc00'
                        deleted: true
                    }
                    'ra2-assignments-ending-soon': {
                        table: 'sys_ux_list'
                        id: '9e905cbe084f4395bad6032c230c2982'
                        deleted: true
                    }
                    'ra2-br-end-month': {
                        table: 'sys_script'
                        id: 'dd2b439f64e04a64b2601f63bd1aeb02'
                        deleted: true
                    }
                    'ra2-companies': {
                        table: 'sys_ux_list'
                        id: '8c5be7cde0a747b3bd71d0f8a07d82c9'
                        deleted: true
                    }
                    'ra2-consultants': {
                        table: 'sys_ux_list'
                        id: 'ab20e4d3c6f2438093330f721a7141c4'
                        deleted: true
                    }
                    'ra2-dashboard': {
                        table: 'par_dashboard'
                        id: '4c5f0fef28fb4853943a93476cc89c8f'
                        deleted: true
                    }
                    'ra2-dashboard-overview-tab': {
                        table: 'par_dashboard_tab'
                        id: 'e16a22221eb044698a6415e6fd4fdc1e'
                        deleted: true
                    }
                    'ra2-demo-assignment-1': {
                        table: 'x_2207143_k_test_assignment_v2'
                        id: 'de51f51f04ac42f0966a50e31b048c42'
                        deleted: true
                    }
                    'ra2-demo-assignment-2': {
                        table: 'x_2207143_k_test_assignment_v2'
                        id: '0925715537af4446b061e1ad921c45d4'
                        deleted: true
                    }
                    'ra2-demo-assignment-3': {
                        table: 'x_2207143_k_test_assignment_v2'
                        id: 'e344c3019e02457b9cc9c5c7aa87b036'
                        deleted: true
                    }
                    'ra2-demo-assignment-4': {
                        table: 'x_2207143_k_test_assignment_v2'
                        id: 'e8e07b7fa19943a9bb9feb8f3f0f120d'
                        deleted: true
                    }
                    'ra2-demo-assignment-5': {
                        table: 'x_2207143_k_test_assignment_v2'
                        id: 'e2df6f62d7574a5786115be9becf63af'
                        deleted: true
                    }
                    'ra2-demo-assignment-6': {
                        table: 'x_2207143_k_test_assignment_v2'
                        id: '7bdd70cc22a34797a5ffed7439f4838d'
                        deleted: true
                    }
                    'ra2-demo-assignment-7': {
                        table: 'x_2207143_k_test_assignment_v2'
                        id: '9023fd96efb1426d942ed687e98c1448'
                        deleted: true
                    }
                    'ra2-demo-company-atlas': {
                        table: 'core_company'
                        id: '0fbecc6c974c4582b49e914900135c35'
                        deleted: true
                    }
                    'ra2-demo-company-meridian': {
                        table: 'core_company'
                        id: 'bb995e7bdc3f48edbcf7e4dbf52aa5d7'
                        deleted: true
                    }
                    'ra2-demo-company-nordica': {
                        table: 'core_company'
                        id: 'a97d07fe08d745899e9a27ec9f51726c'
                        deleted: true
                    }
                    'ra2-demo-consultant-erik': {
                        table: 'sys_user'
                        id: '1053c5e009e24afd875c13b86fe92d80'
                        deleted: true
                    }
                    'ra2-demo-consultant-priya': {
                        table: 'sys_user'
                        id: 'd2333f6cf03449bdb525fd849c90a1ca'
                        deleted: true
                    }
                    'ra2-demo-consultant-sara': {
                        table: 'sys_user'
                        id: 'b8211eae9d094f73ad2cd1c1b5b56235'
                        deleted: true
                    }
                    'ra2-demo-consultant-tom': {
                        table: 'sys_user'
                        id: 'adde86c7e8604b2698299207b2441ca4'
                        deleted: true
                    }
                    'ra2-directory-category': {
                        table: 'sys_ux_list_category'
                        id: '6bc5c93f4a8744ed8ecf7aca0466aaf5'
                        deleted: true
                    }
                    'ra2-list-config': {
                        table: 'sys_ux_list_menu_config'
                        id: '46ece40ec47546f7a22117ec1b78360b'
                        deleted: true
                    }
                    'ra2-widget-active-count': {
                        table: 'par_dashboard_widget'
                        id: '088363c21bd24d5fa8801975f1477c7c'
                        deleted: true
                    }
                    'ra2-widget-allocation-by-consultant': {
                        table: 'par_dashboard_widget'
                        id: 'c6130d35fb48447b81cbc2878e014235'
                        deleted: true
                    }
                    'ra2-widget-ending-soon-count': {
                        table: 'par_dashboard_widget'
                        id: '2fd96cd9ecba4ef48475111ff1e2dfd5'
                        deleted: true
                    }
                    'ra2-widget-resources-count': {
                        table: 'par_dashboard_widget'
                        id: 'ff2c5cfc2f7e4456910adee4432a18a0'
                        deleted: true
                    }
                    'ra2-widget-timeline': {
                        table: 'par_dashboard_widget'
                        id: '47614fe3c2974177b9738febccf424d3'
                        deleted: true
                    }
                    'ra2-workspace': {
                        table: 'sys_ux_page_registry'
                        id: '7318e8a0268e4df6b63899e6a1ea11f2'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_app_config_workspace': {
                        table: 'sys_ux_app_config'
                        id: 'a76dca41d918491f8dd8f15f43059c22'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_app_route_home': {
                        table: 'sys_ux_app_route'
                        id: '52479d662a22448bbb79f57f6c2e06d8'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_app_route_list': {
                        table: 'sys_ux_app_route'
                        id: 'a56329ad4ddc45979340c15c3af9f7c6'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_app_route_record': {
                        table: 'sys_ux_app_route'
                        id: '6b7e339fd36b4ffd87f4f6c2de7b9874'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: 'b8eee90cca604780940751e115120eb6'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_macroponent_record': {
                        table: 'sys_ux_macroponent'
                        id: 'c255da550e8049f2a4dc716e50301c5f'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_page_property_chrome_footer': {
                        table: 'sys_ux_page_property'
                        id: '84f63d23066448769cd0d631a158d1af'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_page_property_chrome_header': {
                        table: 'sys_ux_page_property'
                        id: '755960ece5e64a4b9c51600350d47741'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_page_property_chrome_tab': {
                        table: 'sys_ux_page_property'
                        id: 'a82489d31cde40019f266fa6bf95007b'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_page_property_chrome_toolbar': {
                        table: 'sys_ux_page_property'
                        id: '144032ef7e55459fb972c1264b02d967'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_page_property_listConfigId': {
                        table: 'sys_ux_page_property'
                        id: 'ca75d138570846fd80c439624ce6150e'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_page_property_view': {
                        table: 'sys_ux_page_property'
                        id: 'bfb7a664f8c74e89a1e36265c5ac3404'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_page_property_wbApplicabilityConfigId': {
                        table: 'sys_ux_page_property'
                        id: 'de26e050f8f3432588248b1d9ff40f77'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_registry_m2m_category_unifiedNav': {
                        table: 'sys_ux_registry_m2m_category'
                        id: '270d9cd3ca4d4e3682a9a3e689a559ff'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_screen_home': {
                        table: 'sys_ux_screen'
                        id: '85a0b60670f34e47a1256744a33a9263'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_screen_list': {
                        table: 'sys_ux_screen'
                        id: 'fac6f786a0ef4968901f0f119479d90d'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_screen_record': {
                        table: 'sys_ux_screen'
                        id: '0973a39974d04670b2082e404cbe4394'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '36978bdc76c94177acaa336345151848'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_screen_type_home': {
                        table: 'sys_ux_screen_type'
                        id: '01d3c564b72c4f0fae489da64c4efdbd'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_screen_type_list': {
                        table: 'sys_ux_screen_type'
                        id: '17d8a6bec03647e5933ebbca37c58dd2'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_screen_type_record': {
                        table: 'sys_ux_screen_type'
                        id: '81cda6908c884fdcbee34296b30beef6'
                        deleted: true
                    }
                    'ra2-workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '42a301ea8e5945bc971ad65bba1e9c90'
                        deleted: true
                    }
                    'ra2-workspace-acl': {
                        table: 'sys_security_acl'
                        id: '39a0b6ce8d2341c28e660ca5a1765df7'
                        deleted: true
                    }
                    'ra3-applicability': {
                        table: 'sys_ux_applicability'
                        id: 'f59c5ea488a54de19d80e6d40a79c5c1'
                        deleted: true
                    }
                    'ra3-assignments-active': {
                        table: 'sys_ux_list'
                        id: '70f456901a6d44769f60b593392337a6'
                        deleted: true
                    }
                    'ra3-assignments-all': {
                        table: 'sys_ux_list'
                        id: '7b55caf7d9484c67b008c95c862b8798'
                        deleted: true
                    }
                    'ra3-assignments-category': {
                        table: 'sys_ux_list_category'
                        id: 'f705f944f4394d148e412f4d2e1b8a6d'
                        deleted: true
                    }
                    'ra3-assignments-ending-soon': {
                        table: 'sys_ux_list'
                        id: 'd28d37bea75d48c8b679dab96431acac'
                        deleted: true
                    }
                    'ra3-br-end-month': {
                        table: 'sys_script'
                        id: 'bed4375f4a5b42bb8eed151083ce6d0d'
                        deleted: true
                    }
                    'ra3-companies': {
                        table: 'sys_ux_list'
                        id: '1790a37c1b4b4065b7ee248b8707926c'
                        deleted: true
                    }
                    'ra3-consultants': {
                        table: 'sys_ux_list'
                        id: '3507488948834abebc0b768d72d5c245'
                        deleted: true
                    }
                    'ra3-dashboard': {
                        table: 'par_dashboard'
                        id: '18f8d9f1843f4ada860e129415056c05'
                        deleted: true
                    }
                    'ra3-dashboard-overview-tab': {
                        table: 'par_dashboard_tab'
                        id: '5c10a4924beb4972bc7cdacf830a890f'
                        deleted: true
                    }
                    'ra3-demo-assignment-1': {
                        table: 'x_2207143_k_test_assignment_v3'
                        id: '03d50c27cf5243d59a453769e55c50f6'
                        deleted: true
                    }
                    'ra3-demo-assignment-2': {
                        table: 'x_2207143_k_test_assignment_v3'
                        id: 'ff2c0d487ed24e558a95ba243a8dc1e6'
                        deleted: true
                    }
                    'ra3-demo-assignment-3': {
                        table: 'x_2207143_k_test_assignment_v3'
                        id: 'aec86be4f465417b8dad9d3a1a51abbd'
                        deleted: true
                    }
                    'ra3-demo-assignment-4': {
                        table: 'x_2207143_k_test_assignment_v3'
                        id: 'a04d1ba2f9bc42a98dd4e5a8c1c2ec1f'
                        deleted: true
                    }
                    'ra3-demo-assignment-5': {
                        table: 'x_2207143_k_test_assignment_v3'
                        id: '9269d99c2975450aa9d0b1bbfbb818f4'
                        deleted: true
                    }
                    'ra3-demo-assignment-6': {
                        table: 'x_2207143_k_test_assignment_v3'
                        id: '1d2a714df07d46a48734bf978e652672'
                        deleted: true
                    }
                    'ra3-demo-assignment-7': {
                        table: 'x_2207143_k_test_assignment_v3'
                        id: '359e8cb65b54446e9036381361eba74c'
                        deleted: true
                    }
                    'ra3-demo-company-cobalt': {
                        table: 'core_company'
                        id: '7fc157b5ee1649c296c6f77faadf2341'
                        deleted: true
                    }
                    'ra3-demo-company-delta': {
                        table: 'core_company'
                        id: '8c1147d5e1e54500b6873c0dee5673ba'
                        deleted: true
                    }
                    'ra3-demo-company-summit': {
                        table: 'core_company'
                        id: '58132016e1c94827a8232450ab216953'
                        deleted: true
                    }
                    'ra3-demo-consultant-fatima': {
                        table: 'sys_user'
                        id: '4532d998a1da4ad98677814dbe805564'
                        deleted: true
                    }
                    'ra3-demo-consultant-ingrid': {
                        table: 'sys_user'
                        id: 'b735cd0889534864b184ab3885b98afc'
                        deleted: true
                    }
                    'ra3-demo-consultant-liam': {
                        table: 'sys_user'
                        id: '0caeb3d4b2c142a99ed76546e50a5182'
                        deleted: true
                    }
                    'ra3-demo-consultant-wei': {
                        table: 'sys_user'
                        id: '069372e7f58b47e2ba1026f411bef422'
                        deleted: true
                    }
                    'ra3-directory-category': {
                        table: 'sys_ux_list_category'
                        id: '74d86305501b4c4296f6eee7a37512b9'
                        deleted: true
                    }
                    'ra3-list-config': {
                        table: 'sys_ux_list_menu_config'
                        id: 'c73e2dc5fe06467392ff1fc887a2c574'
                        deleted: true
                    }
                    'ra3-widget-active-count': {
                        table: 'par_dashboard_widget'
                        id: '4a5fcf1e507b441f8851c568c0db0a91'
                        deleted: true
                    }
                    'ra3-widget-allocation-by-consultant': {
                        table: 'par_dashboard_widget'
                        id: '4aa2e518366549ddb8628d70dbabb125'
                        deleted: true
                    }
                    'ra3-widget-ending-soon-count': {
                        table: 'par_dashboard_widget'
                        id: 'fa4fb00e456f4d4d8e495687956a6871'
                        deleted: true
                    }
                    'ra3-widget-resources-count': {
                        table: 'par_dashboard_widget'
                        id: '0e8bf70ea90948628263bd0f4048e42f'
                        deleted: true
                    }
                    'ra3-widget-timeline': {
                        table: 'par_dashboard_widget'
                        id: 'f6686e0a19f949a699b46a13c387be1f'
                        deleted: true
                    }
                    'ra3-workspace': {
                        table: 'sys_ux_page_registry'
                        id: 'a99d910bd6fc4e4493a20fe5e0fe87cb'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_app_config_workspace': {
                        table: 'sys_ux_app_config'
                        id: '0f24698bf5ad4c8f81773bccdd311cc1'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_app_route_home': {
                        table: 'sys_ux_app_route'
                        id: 'a8edf8c8477040d3bc49e2fdd9b4d966'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_app_route_list': {
                        table: 'sys_ux_app_route'
                        id: '37da219c4d1842b2a2c6fcf7d656bf5f'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_app_route_record': {
                        table: 'sys_ux_app_route'
                        id: 'efe11518ab0a4122a124490d0f04373e'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: 'd860655fc06c4446a8e848e82099dcb7'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_macroponent_record': {
                        table: 'sys_ux_macroponent'
                        id: '3ca52ebbf29c4e51ac40e8708d6ede5a'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_page_property_chrome_footer': {
                        table: 'sys_ux_page_property'
                        id: '3e2e279ce94a46abb7d1028bb815a471'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_page_property_chrome_header': {
                        table: 'sys_ux_page_property'
                        id: '94c7ad15c3f748c5aba05331bf24146d'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_page_property_chrome_tab': {
                        table: 'sys_ux_page_property'
                        id: 'adb77a0e181c47819851a62e443592f7'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_page_property_chrome_toolbar': {
                        table: 'sys_ux_page_property'
                        id: '83e249534d6243d58d32996fee8d1d95'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_page_property_listConfigId': {
                        table: 'sys_ux_page_property'
                        id: '30355d9ac2bb4bd9bbcd269e5d4697b4'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_page_property_view': {
                        table: 'sys_ux_page_property'
                        id: '44c87d64b673486f8a2865074c5c1c5e'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_page_property_wbApplicabilityConfigId': {
                        table: 'sys_ux_page_property'
                        id: '3f9c37b2386641b391fed27cd40b66b6'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_registry_m2m_category_unifiedNav': {
                        table: 'sys_ux_registry_m2m_category'
                        id: '99e7b020881048cda9266e1a91560e49'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_screen_home': {
                        table: 'sys_ux_screen'
                        id: 'dc58b809b8b6406a9d067f7eba30c91b'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_screen_list': {
                        table: 'sys_ux_screen'
                        id: 'ed811cef33d04bf0aada4014f10b6b2f'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_screen_record': {
                        table: 'sys_ux_screen'
                        id: '8677920131d3495b8c8e6f810a2dda9d'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '1591b0d4442544aab405cf15685008cf'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_screen_type_home': {
                        table: 'sys_ux_screen_type'
                        id: '6f5f29a57cf945f883628e9a1b305091'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_screen_type_list': {
                        table: 'sys_ux_screen_type'
                        id: '1587d137206f4e658bc34167093b7bc7'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_screen_type_record': {
                        table: 'sys_ux_screen_type'
                        id: 'c02b2689ded147cf8d33ea4c5f93b2ce'
                        deleted: true
                    }
                    'ra3-workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '17f0e29a7c2c41b0a5b55bfb9e7298dd'
                        deleted: true
                    }
                    'ra3-workspace-acl': {
                        table: 'sys_security_acl'
                        id: '10c89d326ab24c2ea5792f5b21820443'
                        deleted: true
                    }
                    'src_server_business-rules_set-assignment-end-month_ts': {
                        table: 'sys_module'
                        id: '074d0950563e42d6b463aa0660544b48'
                        deleted: false
                    }
                    'src_server_business-rules_set-assignment-end-month-v2_ts': {
                        table: 'sys_module'
                        id: '1c6bd6ce3e30483fb74d51093534ce50'
                        deleted: true
                    }
                    'src_server_business-rules_set-assignment-end-month-v3_ts': {
                        table: 'sys_module'
                        id: 'ab53376f64ba466cb3306a419bb86b15'
                        deleted: true
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '8d97018cd34e4ff4afde4fe3a3e96786'
                        deleted: true
                    }
                    x_2207143_k_test_app_menu: {
                        table: 'sys_app_application'
                        id: '46b4f07fdd3441e19630c6133c318ede'
                    }
                    x_2207143_k_test_chart_widget: {
                        table: 'sp_widget'
                        id: 'df781907decc4f79a0ad4a5426ca3522'
                    }
                    x_2207143_k_test_chartjs_dep: {
                        table: 'sp_dependency'
                        id: '9eb3d30d14e047fba7d10f00c814b1eb'
                    }
                    x_2207143_k_test_chartjs_js: {
                        table: 'sp_js_include'
                        id: '061bef10141f484e88d3575ce5d24206'
                    }
                    x_2207143_k_test_home_col_chart: {
                        table: 'sp_column'
                        id: '4a409c2be9b845af8b285bc171b26d77'
                    }
                    x_2207143_k_test_home_col_kpi: {
                        table: 'sp_column'
                        id: '0aa155c509be40f8a47ac143fc57f37a'
                    }
                    x_2207143_k_test_home_col_timeline: {
                        table: 'sp_column'
                        id: '58f289f3cb1a4f7394206d34d89924da'
                    }
                    x_2207143_k_test_home_container_1: {
                        table: 'sp_container'
                        id: 'b4ede931b36240f896b72a771e243a9b'
                    }
                    x_2207143_k_test_home_instance_chart: {
                        table: 'sp_instance'
                        id: 'ab12adc140f544daad0a28079cef56b6'
                    }
                    x_2207143_k_test_home_instance_kpi: {
                        table: 'sp_instance'
                        id: 'b4dd76c75ac144cea3dba85af6e23b8a'
                    }
                    x_2207143_k_test_home_instance_timeline: {
                        table: 'sp_instance'
                        id: 'daefab7a3a0f4ae8a497af904679d733'
                    }
                    x_2207143_k_test_home_row_chart: {
                        table: 'sp_row'
                        id: '271fd91a58de4d4c9bfb5ea44e1b91b9'
                    }
                    x_2207143_k_test_home_row_kpi: {
                        table: 'sp_row'
                        id: 'b26ea5a95a6d4bd4b3ae8d74bcaa249d'
                    }
                    x_2207143_k_test_home_row_timeline: {
                        table: 'sp_row'
                        id: '89c775641c6e4b21b2138e5c13f31fbb'
                    }
                    x_2207143_k_test_kpi_widget: {
                        table: 'sp_widget'
                        id: '76076fbeb4714a3691fd2fc646a560a7'
                    }
                    x_2207143_k_test_menu: {
                        table: 'sp_instance_menu'
                        id: '497e1ec92cdb4aeab9c47f924eadd43b'
                    }
                    x_2207143_k_test_menu_item_home: {
                        table: 'sp_rectangle_menu_item'
                        id: 'e396de83d21e469eb6838ffb25917dd1'
                    }
                    x_2207143_k_test_menu_item_timeline: {
                        table: 'sp_rectangle_menu_item'
                        id: '79c3ca02802f4a97b8d185525525547e'
                    }
                    x_2207143_k_test_module_active: {
                        table: 'sys_app_module'
                        id: '1d220da32e284b4f9f24133664966995'
                    }
                    x_2207143_k_test_module_all: {
                        table: 'sys_app_module'
                        id: '3dde5badc4464a5d9747533e5eb27baf'
                    }
                    x_2207143_k_test_module_ending_soon: {
                        table: 'sys_app_module'
                        id: '327672cb68ba4e5c86568fde04de94fa'
                    }
                    x_2207143_k_test_module_new: {
                        table: 'sys_app_module'
                        id: 'b7ac19fe6e714d748e89b88cb41382f2'
                    }
                    x_2207143_k_test_module_portal: {
                        table: 'sys_app_module'
                        id: '1d0715953d064890968c0f5534cf6119'
                    }
                    x_2207143_k_test_module_sep_assignments: {
                        table: 'sys_app_module'
                        id: '0c15c1adf07a4771a89f9031df3eb80c'
                    }
                    x_2207143_k_test_module_timeline: {
                        table: 'sys_app_module'
                        id: '0271dd1fe3de4db39f9e3b4cf2f043a7'
                    }
                    x_2207143_k_test_portal: {
                        table: 'sp_portal'
                        id: '4c6660afc0d9440da2be85b2f04a6ec3'
                    }
                    x_2207143_k_test_timeline_col_1: {
                        table: 'sp_column'
                        id: 'c8d3bfcbf2a94354ba720e9a42852b43'
                    }
                    x_2207143_k_test_timeline_container_1: {
                        table: 'sp_container'
                        id: '76656291a28b409cb74a263e80a1479c'
                    }
                    x_2207143_k_test_timeline_instance_1: {
                        table: 'sp_instance'
                        id: '629c4edf5fe048f68156c996149f0cc1'
                    }
                    x_2207143_k_test_timeline_row_1: {
                        table: 'sp_row'
                        id: '23d61ee5ecf747afb3f62da74666d356'
                    }
                    x_2207143_k_test_timeline_widget: {
                        table: 'sp_widget'
                        id: '8ed6a8693fed480d8658c494871f1e1a'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '00de7e3f338a4bf38df98ffcfe0ec7c3'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03f6838d08a34708b0178c3e745de4b8'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'end_month'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '050d3754a38c4ab5b2b0cd6f08255ccc'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '77847f625cd94082b9fc696d9a838bb3'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'par_dashboard_visibility'
                        id: '088409ee529c45abad14b297df83e68a'
                        deleted: true
                        key: {
                            dashboard: 'e8eef88e83e94c78a58ddcc493d1f17d'
                            experience: 'a2109b0a68144f0aa233f4964a398af3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b21d4fdfbc4435e93c8ad0df4492017'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'allocation_percentage'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b4efed86a084335b42c6bd7cbc35685'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'allocation_percentage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0e6f9d13cd3d4a1d83de6fbcb77ef0e5'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'b946d467392d4fee815a48b45890111d'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_dictionary'
                        id: '0ee7b0b736864cb0a8c5d9cf92012eb1'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '10a01c4de72f410cb0ffab42f35f22db'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1113fec8bbb440b0b36cc5e0e19e4380'
                        deleted: true
                        key: {
                            list_id: {
                                id: '93a7cea96e314a4abf76677981e3afb9'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_dictionary'
                        id: '11f5ae98f6c34f2ea42e50eba8a45a8a'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '138712e7a87f4e208b3e31fdc3e2d5f5'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '15fd951e86a5412f9bbe0b293d347d2c'
                        deleted: true
                        key: {
                            list_id: {
                                id: '93a7cea96e314a4abf76677981e3afb9'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_db_object'
                        id: '1736b4a93e284ef98284e0407dcfac0e'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1aa9c504f3ec474c8a8a55ab6a500e5f'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'consultant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1ea19f6d524e4da08af5564b05dacf87'
                        deleted: true
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
                        table: 'sys_ui_section'
                        id: '21f75b625b3848b485b63b115f56f58b'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_documentation'
                        id: '252bc7d3fce94fe7a8f4b7de2980d17d'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'allocation_percentage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '25b481a0c1ac4778980a91fcd0186454'
                        key: {
                            id: 'x_2207143_k_test_timeline'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2bc45a3aa0bb4f6183c7be66a82f509d'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '77847f625cd94082b9fc696d9a838bb3'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_documentation'
                        id: '32271653bed541fd9b93de2de9455e4f'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '331397d1406249a5a16a1778e42640b1'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_ui_form'
                        id: '33f876fe1b2d4aa4bafd51e342d38d0c'
                        deleted: true
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
                        deleted: true
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
                        deleted: true
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
                        table: 'sys_security_acl_role'
                        id: '37b3352932534beab34587f292de4408'
                        deleted: true
                        key: {
                            sys_security_acl: '10c89d326ab24c2ea5792f5b21820443'
                            sys_user_role: {
                                id: '9fdc381df2c74ed580e3933fad32ca79'
                                key: {
                                    name: 'x_2207143_k_test.v3_user'
                                }
                            }
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
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '39717d07e2854b298ca0a07779956440'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'company'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3b77207ee7344dfcb8ba26548267d004'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'consultant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '3d3767bdc5c347b9a0986fa085243de5'
                        deleted: true
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
                        deleted: true
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
                        id: '401008f88a6748eab9d242c999494956'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '21f75b625b3848b485b63b115f56f58b'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_ui_element'
                        id: '42016bbbe8bd40b580817f76a06137f5'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '21f75b625b3848b485b63b115f56f58b'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_dictionary'
                        id: '421f6babb97243a9929a0be395bf8d0b'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'm2m_sp_widget_dependency'
                        id: '42e7f970795e430fb30c8d1025aa15d3'
                        key: {
                            sp_widget: 'df781907decc4f79a0ad4a5426ca3522'
                            sp_dependency: '9eb3d30d14e047fba7d10f00c814b1eb'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '45ec441ed73f4f338cf3bdc8bfbd5878'
                        deleted: true
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
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'company'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '47e8cdde931b4c7f9a20d15ae749faf7'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test.v2_user'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '4882ff6b34ee4e858b4b15bb6a7556e2'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_ui_list_element'
                        id: '49fa2617e2914e9d8912da396b4d002d'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'b946d467392d4fee815a48b45890111d'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_ui_list_element'
                        id: '4baab36c45c84ef99cfcd9d6530628b0'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'b946d467392d4fee815a48b45890111d'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_ui_element'
                        id: '4c4970a1a16946b685daeee47b96ebf8'
                        deleted: true
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
                        deleted: true
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
                        table: 'sys_documentation'
                        id: '51ee39d0cc5a4059bc143c304e85da2f'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5292f6d2c2994c8ba51835180985d4fb'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'company'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '5334f76381b84a45b829aea81262c803'
                        key: {
                            name: 'x_2207143_k_test.portal_user'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '56fbb21c296b4051805c0ece35410628'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test.user'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '5bd1b8785f7c4067a5af67104367aea1'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: '331397d1406249a5a16a1778e42640b1'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                                id: '21f75b625b3848b485b63b115f56f58b'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_ui_element'
                        id: '76fe72a778e24d6ba80d47cb7c605266'
                        deleted: true
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
                        table: 'sys_ui_section'
                        id: '77847f625cd94082b9fc696d9a838bb3'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_ui_list_element'
                        id: '778a901db9ea4753801fda3a90813e07'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'b946d467392d4fee815a48b45890111d'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'm2m_sp_dependency_js_include'
                        id: '78e2a0d581554d97ba0781036dee00dc'
                        key: {
                            sp_js_include: '061bef10141f484e88d3575ce5d24206'
                            sp_dependency: '9eb3d30d14e047fba7d10f00c814b1eb'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '7e0588a703474bcaa077839ecfdaeb62'
                        deleted: true
                        key: {
                            role: {
                                id: '47e8cdde931b4c7f9a20d15ae749faf7'
                                key: {
                                    name: 'x_2207143_k_test.v2_user'
                                }
                            }
                            contains: {
                                id: 'a8e534b67cbb465fbb289370324c480b'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '829e743c1df84253addb6db64dd2cc04'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'end_month'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '83eed0d79eff499db0a30df51836cafd'
                        deleted: true
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
                        deleted: true
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
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86873b633b2440618d8dab6301e037f9'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'allocation_percentage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '881843db540f47a4840776cdaa1d8923'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '77847f625cd94082b9fc696d9a838bb3'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_ui_element'
                        id: '88640e8c49bd49fdbd161ecb7c3c30c2'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '77847f625cd94082b9fc696d9a838bb3'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_documentation'
                        id: '8a91845d1c514e6396344986426c3cc9'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8ad16dc88d274c3aa2f387e1c0fed2c7'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'b946d467392d4fee815a48b45890111d'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_security_acl_role'
                        id: '8b20abf6ed2f4ed99aacf29304ab319c'
                        deleted: true
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
                        table: 'sys_dictionary'
                        id: '8b2df042636d4829b59018cde39f2716'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d7563b7221d45849bdda22ba93b7417'
                        deleted: true
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
                        table: 'sys_dictionary'
                        id: '8efb92d5d17247d1acdfdca4649303b5'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fb44e2b170f4a9f8421bb73168d4d8c'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '909f06e0677d41a399b2903d544fa334'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'consultant'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '90d7fa01e34e450c811514189cf84fbb'
                        key: {
                            id: 'x_2207143_k_test_home'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '911383a6119346b59e0a7dd00cec56b2'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'allocation_percentage'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '927b4b140b464ceba566d48aecf661ea'
                        deleted: true
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
                        table: 'sys_ui_list'
                        id: '93a7cea96e314a4abf76677981e3afb9'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
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
                        id: '93b44950199b44869a4ffa2cf7a00e57'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '21f75b625b3848b485b63b115f56f58b'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        id: '974a380827ac41a88e02a92033332ce3'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '97f9b30f6493423db74bc7b1af45f46e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '21f75b625b3848b485b63b115f56f58b'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_dictionary'
                        id: '98c8b9a384044468a844d53b7a5facdd'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'allocation_percentage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b15e5a5afea4f889ed26bba583e7b4d'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'consultant'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '9b3a406d7ad8463e9537aab9ec68d55b'
                        deleted: true
                        key: {
                            role: {
                                id: '9fdc381df2c74ed580e3933fad32ca79'
                                key: {
                                    name: 'x_2207143_k_test.v3_user'
                                }
                            }
                            contains: {
                                id: 'c7553bd92f3c4abb99c3fa64edb89f89'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d74bbd0f5ef4a5b9dc5f657cedecab0'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'consultant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9e05b4caf3ab4d63b756a76f931def1d'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '77847f625cd94082b9fc696d9a838bb3'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                    {
                        table: 'sys_ui_element'
                        id: '9eb59762512b41048a2736e564bdd18b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '77847f625cd94082b9fc696d9a838bb3'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_user_role'
                        id: '9fdc381df2c74ed580e3933fad32ca79'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test.v3_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1348e6934dc48dbaf563d90dc63311a'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'end_month'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a19a3ad09bfe4756b008dc7acfadc2de'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '77847f625cd94082b9fc696d9a838bb3'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_dictionary'
                        id: 'a51cbf371ef740949a924c38b00f8c3f'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'end_month'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a63a89e77e334c9bb0e3439b01e876a0'
                        deleted: true
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
                        table: 'sys_documentation'
                        id: 'a6f2a533215b4c119f839a6dc4fdb131'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aa551917371d4fa5a687f3f1d1270054'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '21f75b625b3848b485b63b115f56f58b'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_ui_list_element'
                        id: 'ac4660262aa74925b2057fe30068feba'
                        deleted: true
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
                        table: 'sys_ui_element'
                        id: 'acf502a9ba224911b557168e719e375a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '77847f625cd94082b9fc696d9a838bb3'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_dictionary'
                        id: 'ad5af579dde84092a25493a45af944d2'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'active'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ad949924c7fd43549067e26296925b35'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'adc594196a724c87bbc4adf9d3ae5963'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'company'
                            language: 'en'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'b24a028ff98e4c60ae8ff2429a552d30'
                        deleted: true
                        key: {
                            dashboard: 'e8eef88e83e94c78a58ddcc493d1f17d'
                            dashboard_tab: '283126c37d664a33952554ca6ab382c9'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b84951e3627546d989eb7e02dde97904'
                        deleted: true
                        key: {
                            list_id: {
                                id: '93a7cea96e314a4abf76677981e3afb9'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_ui_list'
                        id: 'b946d467392d4fee815a48b45890111d'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_db_object'
                        id: 'baf9aa3531d745d382595fe4058f0bad'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2c8bc7e7474477ea94dc0f262775e73'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c8abb080ac0045999b39fcf28c8b807a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '21f75b625b3848b485b63b115f56f58b'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_documentation'
                        id: 'c9dcdcdceb464a92962f1ba13c73ce95'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: 'caed0a4bcbd64eff83512488bd8ee7a8'
                        deleted: true
                        key: {
                            dashboard: '18f8d9f1843f4ada860e129415056c05'
                            experience: 'a99d910bd6fc4e4493a20fe5e0fe87cb'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ce5a82d9d22d4dd594a700d93528b413'
                        deleted: true
                        key: {
                            list_id: {
                                id: '93a7cea96e314a4abf76677981e3afb9'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_ui_form_section'
                        id: 'd1b6640911bf462fb3b8d3246129953e'
                        deleted: true
                        key: {
                            sys_ui_form: {
                                id: '4882ff6b34ee4e858b4b15bb6a7556e2'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                                id: '77847f625cd94082b9fc696d9a838bb3'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_dictionary'
                        id: 'd34eaef52e0543fd8ab95bfb804c24a5'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd4a60ac0c34445429ac4b9fad2a42863'
                        deleted: true
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
                        table: 'par_dashboard_visibility'
                        id: 'd691f8c54c114f4d8146a897ae783400'
                        deleted: true
                        key: {
                            dashboard: '4c5f0fef28fb4853943a93476cc89c8f'
                            experience: '7318e8a0268e4df6b63899e6a1ea11f2'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'd717dbca44c54879b58970138930152c'
                        deleted: true
                        key: {
                            dashboard: '18f8d9f1843f4ada860e129415056c05'
                            dashboard_tab: '5c10a4924beb4972bc7cdacf830a890f'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd741ea7c45a24874bdac20cac9322776'
                        deleted: true
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
                        table: 'sys_ui_element'
                        id: 'd78414b4b5b84b068915cc617952e2aa'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '21f75b625b3848b485b63b115f56f58b'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_dictionary'
                        id: 'd830460683084f72854b9b356716815a'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'consultant'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd981eaa5d163477197ad6f2a13be43fe'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9ee4b6c059d412ca9d287d1e0856856'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dac3724f819c4797a6aad98770911812'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dad0049ee724482eaa7c5056574b640a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '21f75b625b3848b485b63b115f56f58b'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        id: 'dbf91b42f876463cae8199bc6bc37202'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v2'
                            element: 'company'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcd8b738b18d457bb250b3125dd7d8e1'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e19439ce2f684468a5b64c83bbc9d148'
                        deleted: true
                        key: {
                            list_id: {
                                id: '93a7cea96e314a4abf76677981e3afb9'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                        table: 'sys_ui_list_element'
                        id: 'e209d32adf644ab0b8f2c80bf2cc1f1b'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'b946d467392d4fee815a48b45890111d'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_ui_element'
                        id: 'e27802d870f64bbd86ea4a27c4fab100'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '21f75b625b3848b485b63b115f56f58b'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                    {
                        table: 'sys_documentation'
                        id: 'e61db148c5e544cbb48eb972030ffe4d'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'end_month'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e6719625db414e17a6e7b4be93540216'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'end_month'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e89e01c405cc494a8395e1815ccead36'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'effe9b7b2fe146e3a1c6752b5386340b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '77847f625cd94082b9fc696d9a838bb3'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v2'
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
                        table: 'sys_ui_list_element'
                        id: 'f0b15c90bf2f4d0ebfb1918424ebfd7f'
                        deleted: true
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
                        table: 'sys_security_acl_role'
                        id: 'f2fb2ac5b23d40898be10d6ee237fd06'
                        deleted: true
                        key: {
                            sys_security_acl: '39a0b6ce8d2341c28e660ca5a1765df7'
                            sys_user_role: {
                                id: '47e8cdde931b4c7f9a20d15ae749faf7'
                                key: {
                                    name: 'x_2207143_k_test.v2_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'f3cd2650588f486694d54b6d83f9f017'
                        deleted: true
                        key: {
                            dashboard: '4c5f0fef28fb4853943a93476cc89c8f'
                            dashboard_tab: 'e16a22221eb044698a6415e6fd4fdc1e'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f4ba074e1a0b4e1da439e296da372d52'
                        deleted: true
                        key: {
                            name: 'x_2207143_k_test_assignment_v3'
                            element: 'company'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f648b9d1a3cc41ae85a97947ee29b126'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8b9764af0854526b5f1c37e1df7438d'
                        deleted: false
                        key: {
                            name: 'x_2207143_k_test_assignment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fbaa72747bad4eb08bc7f23643628ede'
                        deleted: true
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
                    {
                        table: 'sys_ui_list_element'
                        id: 'fe060b86f6cb491a93b0cab2c04a4b5b'
                        deleted: true
                        key: {
                            list_id: {
                                id: '93a7cea96e314a4abf76677981e3afb9'
                                key: {
                                    name: 'x_2207143_k_test_assignment_v3'
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
                ]
            }
        }
    }
}
