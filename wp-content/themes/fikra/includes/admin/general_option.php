<?phpadd_action('admin_menu', 'aKmail_theme_option1');function aKmail_theme_option1() {       add_menu_page("أعدادات الموقع"  , "أعدادات الموقع"  , 'edit_posts', basename(__FILE__), 'aKmail_theme_admin1' , '' );}function aKmail_theme_admin1() {   include("admin-block.php");}