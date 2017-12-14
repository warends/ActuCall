<?php
/*
	Template Name: Capability Page
*/

$banner = get_field('banner');
$icon = get_field('icon');
$banner_text = get_field('banner_text');
// $actucall_slogan = get_field('actucall_slogan');
// $actucall_solution = get_field('actucall_solution');
// $approach = get_field('approach');
// $actucall_movie = get_field('actucall_movie');
// $actucall_poster = get_field('actucall_poster');
// $roadmap = get_field('roadmap');

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="capability" class="site-main" role="main">
			<div class="cap-banner" style="background-image: url(<?php echo $banner['url']; ?>);">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class=="banner-text">
								<img src="<?php echo $banner['url'];?>" class="img-responsive cap-icon">
								<h1><?php the_title(); ?></h1>
								<p><?php echo $banner_text ?></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section class="content container">
				<div class=="row">
					<div class="col">
						<p><?php the_content(); ?></p>
					</div>
				</div>
			</section>
			<section class="cap-features">
				<div class="container">
					<?php $loop = new WP_Query( array (
                    	'post_type' =>  'cap_features',
						'category_name' => 'real-time-call',
                    	'orderby' => 'title',
                    	'order' => 'ASC',));
                	?>
					<div class="row">
						<?php while ($loop ->have_posts() ) : $loop->the_post(); ?>
							<div class="col-md-4 text-center">
								<div class="feature-btn">
									<h4><?php the_title(); ?></h4>
								</div>
							</div>
	                    <?php endwhile;?>
					</div> <!--end button row-->

					<?php $count = 0; ?>
					<?php while ($loop ->have_posts() ) : $loop->the_post(); ?>
						<?php
							$thumbnail_url = wp_get_attachment_url(get_post_thumbnail_id($post->ID) );
							$count++;
						?>
						<?php if($count % 2 == 0){ ?>
							<div class="row padded-vert">
								<div class="col-md-6">
									<p><?php the_content(); ?></p>
								</div>
								<div class="col-md-6">
									<img src="<?php echo $thumbnail_url ?>" class="img-responsive">
								</div>
							</div>
						<?php } else { ?>
							<div class="row padded-vert">
								<div class="col-md-6">
									<img src="<?php echo $thumbnail_url ?>" class="img-responsive">
								</div>
								<div class="col-md-6">
									<p><?php the_content(); ?></p>
								</div>
							</div>
						<?php } ?>

					<?php endwhile; wp_reset_query();?>

				</div>
			</section>

			<section class="more-caps">
				<div class="container">
					<div class="row">
						<div class="col text-center">
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
								$cap_icon = get_field('cap_icon');
								$cap_slug = get_field('cap_slug');
							?>

								<div class="col-md-4 text-center">
									<div class="cap-more">
										<img style="width: 50px;" src="<?php echo $cap_icon['url']; ?>" class="img-responsive cap-icon"/>
										<h5><?php echo the_title() ?></h5>
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
