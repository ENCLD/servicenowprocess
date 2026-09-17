import '@servicenow/sdk/global'
import { SPMenu } from '@servicenow/sdk/core'
import { homePage } from '../sp-page/home/home.now'

export const mainMenu = SPMenu({
    $id: Now.ID['x_2207143_k_test_menu'],
    title: 'Main Menu',
    widget: '5ef595c1cb12020000f8d856634c9c6e', // OOTB Header Menu widget
    items: [
        {
            $id: Now.ID['x_2207143_k_test_menu_item_home'],
            type: 'page',
            label: 'Resource Allocation',
            page: homePage,
            glyph: 'calendar',
            order: 100,
            active: true,
        },
    ],
})
