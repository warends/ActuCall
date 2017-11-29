<?php
/*
	Template Name: Contact Template
*/

get_header(); ?>


		<main class="site-main padded-vert2x" role="main" id="<?php echo the_title();?>">
			<section class="content" role="main">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-xs-12 col-md-8">
							<h1 class="text-center"><?php the_title(); ?></h1>
							<?php while (have_posts() ): the_post(); ?>

								<?php the_content(); ?>
							<?php endwhile; ?>
						</div>
					</div>
				</div>
			</section>
		</main><!-- #main -->


<?php

get_footer();
