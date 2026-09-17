import '@servicenow/sdk/global'
import { ServicePortal } from '@servicenow/sdk/core'
import { homePage } from '../sp-page/home/home.now'
import { mainMenu } from '../sp-instance-menu/menu.now'

export const raPortal = ServicePortal({
    $id: Now.ID['x_2207143_k_test_portal'],
    title: 'Resource Allocation',
    urlSuffix: 'x_2207143_k_test',
    homePage: homePage,
    loginPage: '6995a144cb11120000f8d856634c9c25',    // OOTB Login page (verified on instance)
    notFoundPage: '3c2c9063cb11020000f8d856634c9c1f', // OOTB 404 page (verified on instance)
    theme: '281507c44317d210ca4c1f425db8f2fd', // OOTB Coral theme (verified on instance)
    mainMenu: mainMenu,
    defaultPortal: false,
    enableFavorites: false,
    inactive: false,
    hidePortalName: false,
})
