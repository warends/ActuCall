<?php
/*
	Template Name: Capability Page
*/

$banner = get_field('banner');
$icon = get_field('icon');
$banner_text = get_field('banner_text');

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="capability" class="site-main" role="main">
			<div class="cap-banner" style="background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0)), url('<?php echo $banner['url']; ?>') no-repeat center center; background-size: cover;">

				<div class="container">
					<div class="row padded-vert2x align-items-center">
						<div class="col-md-6">
							<div class="banner-text">
								<img src="<?php echo $icon['url'];?>" class="img-responsive cap-icon padded-bottom">
								<h2><?php the_title(); ?></h2>
								<p class="padded-vert"><?php echo $banner_text ?></p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section class="content container padded-vert2x">
				<div class=="row">
					<div class="col wysywig-content">
						<?php while ( have_posts() ) : the_post(); ?>
								<p><?php the_content(); ?></p>
								<div class="clearfix"></div>
						<?php endwhile; ?>
					</div>
				</div>
			</section>

			<section class="cap-features padded-vert2x">
				<div class="container">
					<?php

							if ( is_page( 'Real Time Call Intelligence Tools' ) ) {
							    $cat_title = 'real-time-call';
							} elseif ( is_page( 'Business Procurement Solutions' ) ) {
							    $cat_title = 'business-solutions';
							} elseif ( is_page( 'Contact Center Analytics' ) ) {
							    $cat_title = 'contact-center-analytics';
							} elseif ( is_page( 'Business Development' ) ) {
							    $cat_title = 'business-development';
							} elseif ( is_page( 'Price Benchmarking' ) ) {
							    $cat_title = 'price-benchmarking';
							} elseif ( is_page( 'Cost and Risk Reduction' ) ) {
							    $cat_title = 'cost-and-risk-reduction';
							}

								$loop = new WP_Query( array (
                    	'post_type' =>  'cap_features',
											'category_name' => $cat_title,
                    	'orderby' => 'title',
                    	'order' => 'ASC',));
          ?>
					<div class="row padded-bottom text-center justify-content-around">

						<?php while ($loop ->have_posts() ) : $loop->the_post(); ?>
							<?php
								$id = get_field('id');
							?>
							<div class="col-md-4 feature-col">
								<button class="feature-btn" data-target="<?php echo $id ?>">
									<?php the_title(); ?>
								</button>
							</div>
	          <?php endwhile;?>
					</div> <!--end button row-->

					<div class="feature-content-container">
					<?php $count = 0; ?>
						<?php while ($loop ->have_posts() ) : $loop->the_post(); ?>
							<?php
								$id = get_field('id');
								$feature_image = get_field('feature_image');
								$count++;
							?>
									<?php if($count % 2 == 0){ ?>
										<div class="row padded-vert2x feature-content align-items-center" id="<?php echo $id ?>">
											<div class="col-md-6 wysywig-content">
												<p><?php the_content(); ?></p>
											</div>
											<div class="col-md-6">
												<img src="<?php echo $feature_image['url']; ?>" class="img-responsive">
											</div>
										</div>
									<?php } else { ?>
										<div class="row padded-vert2x feature-content align-items-center" id="<?php echo $id ?>">
											<div class="col-md-6">
												<img src="<?php echo $feature_image['url']; ?>" class="img-responsive">
											</div>
											<div class="col-md-6 wysywig-content">
												<p><?php the_content(); ?></p>
											</div>
										</div>
									<?php } ?>

						<?php endwhile; wp_reset_query();?>
					</div>

				</div>
			</section>

			<section class="more-caps padded-vert2x">
				<div class="container">
					<div class="row">
						<div class="col text-center padded-vert">
							<h3>More Capabilities</h3>
						</div>
					</div>
					<div class="row">
						<?php $loop = new WP_Query( array (
							'post_type' =>  'cap_box',
							'orderby' => 'title',
							'order' => 'ASC',));
						?>

						<?php while ($loop ->have_posts() ) : $loop->the_post(); ?>

							<?php
								$bg_image = get_field('bg_image');
								$cap_subheading = get_field('cap_subheading');
								$cap_copy = get_field('cap_copy');
								$cap_icon_black = get_field('cap_icon_black');
								$cap_icon = get_field('cap_icon');
								$cap_slug = get_field('cap_slug');
							?>

								<div class="col-md-4 text-center padded-bottom">
									<div class="cap-more padded <?php echo $cap_slug ?>">
										<a href="/capabilities/<?php echo $cap_slug ?>">
											<img src="<?php echo $cap_icon_black['url']; ?>" class="img-responsive cap-icon-black"/>
											<img src="<?php echo $cap_icon['url']; ?>" class="img-responsive cap-icon-white"/>
											<h5><?php echo the_title() ?></h5>
										</a>
									</div>
								</div>



						<?php endwhile; wp_reset_query();?>
					</div>
				</div>
			</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php


get_footer();
