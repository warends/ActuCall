<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Will_Arends_Development
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<!-- <link href="/wp-content/themes/ActuCall/style.css" rel="stylesheet"> -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<!-- <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'actucall' ); ?></a> -->

	<header id="masthead" class="site-header" role="banner">

				<nav class="container">
				  <div class="row menu-row align-items-center">
					  <div class="col-4">
						  <?php
							wp_nav_menu(array (
										'theme_location'=> 'menu-left',
										'menu_id' 		=> 'menu-left',
										'depth'         =>  2,
										'container'     =>  'ul',
										'menu_class'	=> 'list-unstyled menu'
									));
					  		?>
					  </div>
						<div class="col-2 logo-left margin-top text-center">
							<a href="/"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/head-logo.png" alt="Actucall Logo" class="nav-logo"></a>
						</div>
						<div class="col-2 margin-top logo-right hidden-sm-down text-center">
							<a href="/"><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/procurement-logo.png" alt="Procurement Logo" class="nav-logo"></a>
						</div>
						<div class="col-4">
							<?php
								wp_nav_menu(array (
											'theme_location'=> 'menu-right',
											'menu_id' 		=> 'menu-right',
											'depth'         =>  2,
											'container'     =>  'ul',
											'menu_class'	=> 'list-unstyled menu'

										));
						  		?>
						</div>
					</div>
					<div class="row">
						<div class="col text-center logo-text">
							<h4 class="green">Elevated Foresight</h4>
						</div>
					</div>
					<a href="#" id="menu-btn" class="green">
			            <img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/head-logo.png" alt="Actucall Logo" class="nav-logo"><p>MENU</p>
			        </a>
			</nav>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
