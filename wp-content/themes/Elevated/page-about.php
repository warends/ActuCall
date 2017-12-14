<?php
/*
	Template Name: About Page
*/

$about_us = get_field('about_us');
$elevated_difference = get_field('elevated_difference');
$headshot = get_field('headshot');
$about_ceo= get_field('about_ceo');
$about_video= get_field('about_video');
$about_video_poster= get_field('about_video_poster');

get_header(); ?>

		<main id="page-about" class="site-main content-area" role="main">
				<section class="about-us">
					<div class="container">
						<div class="row justify-content-between align-items-center">
							<div class="col-md-4">
								<div class="white-box padded">
									<h4>About Us</h4>
									<p><?php echo $about_us ?></p>
								</div>
								<div class="white-box padded margin-bottom2x">
									<h4>The Elevated Difference</h4>
									<p><?php echo $elevated_difference ?></p>
								</div>
							</div>
							<div class="col-md-6">
								<div class="white-box padded-left padded-top padded-right">
									<h4>The Elevated Way</h4>
									<video id="about-vid" controls controlsList="nodownload" poster="<?php echo $about_video_poster['url']; ?>" style="width:100%;">
									  <source src="<?php echo $about_video['url']; ?>" type="video/mp4">
									  Your browser does not support HTML5 video.
									</video>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="ceo container padded-vert2x">
					<div class="row align-items-center">
						<div class="col-md-4">
							<h4 class="inline padded-right">Sandra Lund</h4>
							<img src="<?php echo $headshot['url']; ?>" class="img-responsive headshot"/>
							<!-- <h4 class="inline pull-right">CEO</h4> -->
						</div>
						<div class="col-md-8">
							<h4 class="inline">CEO Thoughts</h4>
							<p><?php echo $about_ceo ?></p>
						</div>
					</div>
				</section>

				<section class="home">
					<div class="container">
						<div class="row">
							<div class="col text-center">
								<div class="denver">
									<img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/head-logo.png" alt="Elevated Logo" class="elevated img-responsive ">
									<h1 class="padded-horz white">Proudly calling Denver our home</h1>
									<img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/ElevatedProcurement_White.svg" alt="Procurement Logo" class="img-responsive procurement">
								</div>
							</div>
						</div>
					</div>
				</section>

		</main><!-- #main -->

<?php

get_footer();
