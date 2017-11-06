<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Will_Arends_Development
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer padded-vert2x container" role="contentinfo">
		<div class="site-info row">
			<div class="col">
				<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'will-arends-development' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'will-arends-development' ), 'WordPress' ); ?></a>
				<span class="sep"> | </span>
				<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'will-arends-development' ), 'will-arends-development', '<a href="https://automattic.com/" rel="designer">Will Arends</a>' ); ?>
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
