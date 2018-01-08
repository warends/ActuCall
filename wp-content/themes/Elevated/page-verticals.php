<?php
/*
	Template Name: Verticals Page
*/

$header = get_field('header');
$banner = get_field('banner');
$banner_heading = get_field('banner_heading');
$banner_subtext = get_field('banner_subtext');


get_header(); ?>

	<div id="primary" class="content-area">
		<main id="verticals" class="site-main" role="main">

			<section class="banner" style="background: url('<?php echo $banner['url']; ?>') no-repeat center center; background-size: cover;">
				<div class="container">
					<div class="row">
						<div class="col-6 padded-top2x">
							<h1 class="green"><?php the_title(); ?></h1>
							<div class="white-box padded">
								<h4 class=""><?php echo $header; ?></h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="list padded-vert2x">
				<div class="container">
						<div class="row">
							<div class="col text-center">
								<h3 class="padded-bottom">Industries We Serve:</h3>
							</div>
						</div>
						<div class="row justify-content-md-center">
							<?php $loop = new WP_Query( array (
								'post_type' =>  'vertical_industry',
								'order' => 'ASC',));
							?>

							<?php while ($loop ->have_posts() ) : $loop->the_post(); ?>

								<?php
									$icon = get_field('icon');
								?>
								<div class="col-6 col-md-2 vertical padded-bottom">
									<img src="<?php echo $icon['url']; ?>" class="img-responsive icon padded-bottom2x"/>
									<h6><?php the_title()?></h6>
								</div>

							<?php endwhile; wp_reset_query();?>
						</div>
						<div class="row padded-top2x">
							<div class="col text-center">

								<h4 class="white padded-bottom">Don’t see your industry listed.</h4>
								<a class="btn-green" href="/contact">Contact</a>

							</div>
						</div>
				</div>

			</section>



		</main><!-- #main -->
	</div><!-- #primary -->

<?php


get_footer();
