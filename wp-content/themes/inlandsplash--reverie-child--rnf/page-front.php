<?php
/*
Template Name: Front
*/
get_header('front'); ?>

<!-- Start the main container -->
<div class="container" role="document">
<!-- Above the Fold Splash Graphic -->
  <div id="inland-splash-overfold" data-interchange="[../wp-content/themes/reverie-child-master/img/small-mobile/clean-light-swimming-pool-reflections.jpg, (small)], [../wp-content/themes/reverie-child-master/img/small-mobile/clean-light-swimming-pool-reflections@2x.jpg, (small retina)], [../wp-content/themes/reverie-child-master/img/medium/clean-light-swimming-pool-reflections.jpg, (medium)], [../wp-content/themes/reverie-child-master/img/medium/clean-light-swimming-pool-reflections@2x.jpg, (medium retina)], [../wp-content/themes/reverie-child-master/img/xlarge/clean-light-swimming-pool-reflections.jpg, (xlarge)], [../wp-content/themes/reverie-child-master/img/xlarge/clean-light-swimming-pool-reflections@2x.jpg, (xlarge retina)], [../wp-content/themes/reverie-child-master/img/large/clean-light-swimming-pool-reflections@2x.jpg, (large retina)], [../wp-content/themes/reverie-child-master/img/large/clean-light-swimming-pool-reflections@2x.jpg, (large)]">
    <div class="row">
      <div class="small-12 column">
        <img id="inland-splash-large-logo" src="../wp-content/themes/reverie-child-master/img/vector/inland-splash-logo.svg" alt="Inland Splash" />
      </div>
    </div>
  </div>
<!-- Sticky Top Bar -->
  <div id="sticky-header" class="sticky">
  <!-- Starting the Top-Bar -->
    <nav class="top-bar" data-topbar data-options="is_hover: false">
      <ul class="title-area">
          <li class="name">
            <h1><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?></a></h1>
          </li>
      <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
      <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
      </ul>
      <section class="top-bar-section">
      <?php
          wp_nav_menu( array(
              'theme_location' => 'primary',
              'container' => false,
              'depth' => 0,
              'items_wrap' => '<ul class="left">%3$s</ul>',
              'fallback_cb' => 'reverie_menu_fallback', // workaround to show a message to set up a menu
              'walker' => new reverie_walker( array(
                  'in_top_bar' => true,
                  'item_type' => 'li',
                  'menu_type' => 'main-menu'
              ) ),
          ) );
      ?>
      </section>
    </nav>
  <!-- End of Top-Bar -->
  </div>
<!-- Row for main content area -->
	<div class="row" id="content" role="main">
	
	<?php /* Start loop */ ?>
	<?php while (have_posts()) : the_post(); ?>
		<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
<!-- header moved to inside of Page Content for Foundation Equalizer
			<header>
				<h1 class="entry-title"><?php the_title(); ?></h1>
-->
				<!-- Remove Byline
				<?php reverie_entry_meta(); ?>
				-->
<!--
			</header>
-->
			<div class="entry-content">
				<?php the_content(); ?>
			</div>
			<!-- Remove Loop Footer: Pagination, Comments, Tags, etc.
			<footer>
				<?php wp_link_pages(array('before' => '<nav id="page-nav"><p>' . __('Pages:', 'reverie'), 'after' => '</p></nav>' )); ?>
				<p><?php the_tags(); ?></p>
			</footer>
			<?php comments_template(); ?>
			-->
		</article>
	<?php endwhile; // End the loop ?>

	</div>
</div>
<!-- Container End -->

<?php get_footer('front'); ?>
