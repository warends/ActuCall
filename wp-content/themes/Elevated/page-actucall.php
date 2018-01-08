<?php
/*
	Template Name: Actucall Page
*/

$banner = get_field('banner');
$banner_heading = get_field('banner_heading');
$banner_subtext = get_field('banner_subtext');
$available_text = get_field('available_text');
$video_banner = get_field('video_banner');
$video_poster = get_field('video_poster');
$video = get_field('video');
$benefit_title = get_field('benefit_title');
$analytics_title = get_field('analytics_title');
$analytics_image = get_field('analytics_image');
$analytics_content = get_field('analytics_content');
$installation_title = get_field('installation_title');
$installation_image = get_field('installation_image');
$installation_content = get_field('installation_content');

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="actucall" class="site-main" role="main">
			<section class="banner top" style="background: url('<?php echo $banner['url']; ?>') no-repeat center center; background-size: cover;">

				<div class="container">
					<div class="row padded-vert2x align-items-center">
						<div class="col-md-6">
							<div class="banner-text">
								<h1 class="green"><?php the_title(); ?></h1>
								<div class="white-box padded">
										<h4 class=""><?php echo $banner_heading ?></h4>
										<p class="lead"><?php echo $banner_subtext ?></>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="content container padded-vert2x">
				<div class="row">
					<div class="col">
						<h4 class="header"><?php echo $available_text ?></h4>
					</div>
				</div>
				<div class="row padded-vert">
					<div class="col">
						<?php while ( have_posts() ) : the_post(); ?>
								<p><?php the_content(); ?></p>
						<?php endwhile; ?>
					</div>
				</div>
			</section>

			<section class="container features padded-bottom2x">
				<div class="row">
					<?php $loop = new WP_Query( array (
						'post_type' =>  'actucall_features',
						'posts_per_page' => '4',
						'meta_key' => 'order_val',
						'orderby' => 'meta_value',
						'order' => 'ASC',));
					?>

					<?php while ($loop ->have_posts() ) : $loop->the_post(); ?>

						<?php
							$icon = get_field('icon');
						?>
						<div class="col-md-3 feature one">
							<img src="<?php echo $icon['url']; ?>" class="img-responsive icon padded-bottom2x" alt="<?php echo $icon['alt']; ?>"/>
							<h6><?php the_title()?></h6>
						</div>

					<?php endwhile; wp_reset_query();?>
				</div>
			</section>

			<section class="banner" style="background: url('<?php echo $video_banner['url']; ?>') no-repeat center center; background-size: cover;">

				<div class="container">
					<div class="row padded-vert2x align-items-center">

						<div class="col-md-6">
							<video class="padded-bottom-mobile" controlsList="nodownload" controls poster="<?php echo $video_poster['url']; ?>">
							  <source src="<?php echo $video['url']; ?>" type="video/mp4">
							  Your browser does not support HTML5 video.
							</video>
						</div>
						<div class="col"></div>
						<div class="col-md-4">
							<a href="/contact" class="btn-solid">SCHEDULE A DEMO</a>
						</div>
						<div class="col-md-1"></div>
					</div>
				</div>
			</section>

			<section class="container features padded-top2x">
				<div class="row">
					<div class="col padded-vert2x">
						<h4 class="header"><?php echo $benefit_title ?></h4>
					</div>
				</div>
				<div class="row">
					<?php $loop = new WP_Query( array (
						'post_type' =>  'actucall_features',
						'posts_per_page' => '4',
						'meta_key' => 'order_val',
						'orderby' => 'meta_value',
						'order' => 'DESC',));
					?>

					<?php while ($loop ->have_posts() ) : $loop->the_post(); ?>

						<?php
							$icon = get_field('icon');
						?>
						<div class="col-md-3 feature two">
							<img src="<?php echo $icon['url']; ?>" class="img-responsive icon padded-bottom2x" alt="<?php echo $icon['url']; ?>"/>
							<h6><?php the_title()?></h6>
						</div>

					<?php endwhile; wp_reset_query();?>
				</div>
			</section>

			<section class="container padded-vert2x analytics">
				<div class="row">
					<div class="col padded-vert2x">
						<h4 class="header"><?php echo $analytics_title ?></h4>
					</div>
				</div>
				<div class="row align-items-center">
					<div class="col-md-6">
						<img class="img-responsive padded-bottom-mobile" src="<?php echo $analytics_image['url']; ?>" alt="<?php echo $analytics_image['alt']; ?>"/>
					</div>
					<div class="col-md-6">
						<p class="padded-bottom2x"><?php echo $analytics_content ?></p>
						<div class="text-center">
							<a href="/contact" class="btn-green">Contact</a>
						</div>
					</div>
				</div>
			</section>

			<section class="container padded-vert2x">
				<div class="row">
					<div class="col padded-bottom2x">
						<h4 class="header"><?php echo $installation_title ?></h4>
					</div>
				</div>

				<div class="row align-items-center">
					<div class="col-md-7">
						<p class="padded-bottom-mobile"><?php echo $installation_content ?></p>
					</div>
					<div class="col-md-5">
						<img class="img-responsive" src="<?php echo $installation_image['url']; ?>" alt="<?php echo $installation_image['alt']; ?>"/>
					</div>
				</div>
			</section>





		</main><!-- #main -->
	</div><!-- #primary -->

<?php


get_footer();
