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

	<footer id="colophon" class="site-footer container" role="contentinfo">
		<div class="site-info row">
			<div class="col-md-4">
					<p class="small">Elevated Foresight.<br />Englewood, Colorado<br />(720)984-1566</p>
			</div>
			<div class="col-md-4">
				<p class="pull-left">&copy;<?php echo date("Y"); echo " "; echo bloginfo('name'); ?>. All rights reserved.</p>
			</div>
			<div class="col-md-4">
				<a class="btn-green" href="/contact">Contact Us</a>
			</div>
		</div>
	</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
