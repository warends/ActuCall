<?php
/*
	Template Name: Home Page
*/

$about_text = get_field('about_text');

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<section id="slider">
				<div class="slider">
					<?php $loop = new WP_Query( array (
                    	'post_type' =>  'banner_slide',
                    	'orderby' => 'title',
                    	'order' => 'ASC',));
                	?>

                    <?php while ($loop ->have_posts() ) : $loop->the_post(); ?>

						<?php
                    		$banner_image   =   get_field('banner_image');
							$banner_header = get_field('banner_header');
							$banner_subheader = get_field('banner_subheader');
							$button_1_link = get_field('button_1_link');
							$button_1_copy = get_field('button_1_copy');
							$button_2_link = get_field('button_2_link');
							$button_2_copy = get_field('button_2_copy');
							$is_video = get_field('is_video');
                    		$video_file = get_field('video_file');
                		?>

						<?php if($is_video){ //check for video ?>
							<div>
								<video id="bgvid" playsinline autoplay muted loop>
									<source src="<?php echo $video_file['url']; ?>" type="video/mp4">
								</video>
								<div class="container">
									<h1 class="white padded-top"><?php echo $banner_header ?></h1>
									<h3 class="white"><?php echo $banner_subheader ?></h3>
									<a class="btn-green btn-left" href="<?php echo $button_1_link ?>"><?php echo $button_1_copy ?></a>
									<a class="btn-green btn-right" href="<?php echo $button_2_link ?>"><?php echo $button_2_copy ?></a>
								</div>
							</div>

						<?php  } else { //background image ?>
							<div style="background-image: url(<?php echo $banner_image['url']; ?>);">
								<div class="container">
									<h1 class="white padded-top"><?php echo $banner_header ?></h1>
									<h3 class="white"><?php echo $banner_subheader ?></h3>
									<a class="btn-green btn-left" href="<?php echo $button_1_link ?>"><?php echo $button_1_copy ?></a>
									<a class="btn-green btn-right" href="<?php echo $button_2_link ?>"><?php echo $button_2_copy ?></a>
								</div>
							</div>

						<?php } ?>

                    <?php endwhile; wp_reset_query();?>
				</div>
			</section>

			<section id="about" class="container">
				<div class="row">
					<div class="col padded-vert2x">
						<div class="green-subhead">
							<h4 class="header"><?php echo $about_text ?></h4>
						</div>
					</div>
				</div>
			</section>



		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
