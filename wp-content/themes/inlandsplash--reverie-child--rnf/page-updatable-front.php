<?php
/*
Template Name: Updatable Front
*/
get_header('front'); ?>

<!-- Above the Fold Splash Graphic -->
  <div id="inland-splash-overfold" data-interchange="[./wp-content/themes/inlandsplash--reverie-child--rnf/img/small-mobile/clean-light-swimming-pool-reflections.jpg, (small)], [./wp-content/themes/inlandsplash--reverie-child--rnf/img/small-mobile/clean-light-swimming-pool-reflections@2x.jpg, (small retina)], [./wp-content/themes/inlandsplash--reverie-child--rnf/img/medium/clean-light-swimming-pool-reflections.jpg, (medium)], [./wp-content/themes/inlandsplash--reverie-child--rnf/img/medium/clean-light-swimming-pool-reflections@2x.jpg, (medium retina)], [./wp-content/themes/inlandsplash--reverie-child--rnf/img/xlarge/clean-light-swimming-pool-reflections.jpg, (xlarge)], [./wp-content/themes/inlandsplash--reverie-child--rnf/img/xlarge/clean-light-swimming-pool-reflections@2x.jpg, (xlarge retina)], [./wp-content/themes/inlandsplash--reverie-child--rnf/img/large/clean-light-swimming-pool-reflections@2x.jpg, (large retina)], [./wp-content/themes/inlandsplash--reverie-child--rnf/img/large/clean-light-swimming-pool-reflections@2x.jpg, (large)]">
    <div class="row">
      <div class="small-12 column">
        <img id="inland-splash-large-logo" src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/vector/inland-splash-logo.svg" alt="Inland Splash" />
      </div>
    </div>
  </div>
<!-- Sticky Top Bar -->
  <div id="sticky-header" class="sticky">
  <!-- Starting the Top-Bar -->
    <nav class="top-bar" data-topbar data-options="is_hover: false">
      <ul class="title-area">
          <li class="name">
            <h1><a href="#top-nav-landing" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
              <img id="top-bar-logo-shield" class="show-for-large-up" src='./wp-content/themes/inlandsplash--reverie-child--rnf/img/vector/inland-splash-logo.svg' />
              <span class="hide-for-large-up uppercase">Inland Splash</span>
            </a></h1>
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
              'items_wrap' => '<ul>%3$s</ul>',
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

<!-- Top-bar Home link Nav landing -->
<div id="top-nav-landing"></div>
<!-- Start the main container -->
<div class="container" role="document">
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
<!-- begin hard-coded content -->
<div id="inland-splash" class="row" data-equalizer>
  <div class="small-12 large-6 column" data-equalizer-watch>
    <header>
      <h1 class="entry-title">Welcome!</h1>
      <div class="column small-9 small-push-3">
        <img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/vector/spacer-pattern.svg" />
      </div>
    </header>
    <p><strong><span class="uppercase">Inland Splash</span></strong> is swimming fun for the whole family! Our organization offers every level of swim instruction. You will enjoy classes ranging from the basics of <span>Learning to Swim</span> to the technical and beautiful synchronized swimming of the <span>Riverside Aquettes</span>. The <span>Aqua Motion</span> classes helps keep Seniors healthy as the age. Join <strong class="uppercase">Inland Splash</strong> today.</p>
    <p><strong class="uppercase">For more information call <br>951-900-3058</strong></p>
  </div>
  <div class="small-12 large-6 column teal-top-right-striped-bg" data-equalizer-watch>
    <div class="column small-10 small-push-1">
      <h2>
        <img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/vector/summer-swim-camp.svg" alt="Summer Swim Camp" /><br />
      </h2>
        <p id="summer-text">Join the nationally famous <span class="uppercase">Riverside Aquettes</span> for an introduction to the amazing sport of Synchronized Swimming and much more! Call Today <strong>951-900-3058</strong>.</p>
        <a id="first-announcement-action" class="large button radius right uppercase" target="_blank" href="http://www.inlandsplash.org/inlandsplash/wp-content/uploads/2014/04/InlandSplash-SummerSwimCampFlyer1.pdf">More Info</a>
    </div>
  </div>
</div>
<div id="aquettes" class="row" data-equalizer>
  <div class="small-12 medium-8 column" data-equalizer-watch>
    <h2>
      <a><img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/vector/riverside-aquettes.svg" alt="Riverside Aquettes" /></a><br />
    </h2>
      <p class="uppercase"><strong>Riverside Aquettes was founded in 1958 and became a non-profit corporation in 1966. We are one of the oldest synchronized swimming clubs in the United States.</strong></p>
      <p>Sue Nesbitt, our head coach, is an internationally renowned swim coach. Many of our girls have gone on to the Olympics. RAQ has been producing high-caliber and goal-oriented young people for may years. We use synchronized swimming to develop technical, physical and mental ability, integrating creative movement to music and working as a team member.</p>
        <a id="aquettes-action" class="large button radius uppercase" target="_blank" href="http://www.raqsynchro.org/About-Us.html">More Info</a>
  </div>
  <div class="small-12 medium-4 column" data-equalizer-watch>
    <img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/small-mobile/synchronized-swimming-team.jpg" alt="Synchronized Swimming Team" /><br />
  </div>
</div>
<div id="aqua-motion" class="row" data-equalizer>
  <div class="small-12 large-7 column" data-equalizer-watch>
    <img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/xlarge/aqua-motion-class.jpg" alt="Aqua Motion Class"/>
  </div>
  <div class="small-12 large-5 column" data-equalizer-watch>
    <h2><a><img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/vector/aqua-motion-logo.svg" alt="AquaMotion"/></a></h2>
        <p class="uppercase"><strong>This class offers techniques to develop muscular flexibility, strength and endurance while in the water. We do lots of variety with steady state cardio, intervals, pyramids, and circuit training during the week.</strong></p>
        <p>We have lots of toys to play with which will increase your intensity. The best part is, we have fun. We play hard, but have plenty of time to meet people and enjoy each other's company. We have quarterly luncheons for extra time together. Come have fun and get a great workout. The pool is heated. There is a shallow end if you would like to keep your feet closer to the ground. It helps if you are comfortable in the water, but swimming ability is not necessary. A lift is available.</p>
        <a id="aqua-motion-action" class="large button radius right uppercase" target="_blank" href="http://www.raqsynchro.org/WaterAerobics.html">More Info</a>
  </div>
</div>
<div id="about-us" class="row" data-equalizer>
  <div class="small-12 large-7 column large-push-5" data-equalizer-watch>
    <h2 class="uppercase">Our Staff</h2>
      <p>The staff of INLAND SPLASH boasts swim teachers with dynamic resumes filled with every level of aquatic expertise. Our instructors include national champions, tri-athletes and surfers, artists and musicians, developmental psychologists and preschool teachers—In short, you will find no finer swimming instruction in Southern California.</p>
      <p>Whether they are navigating a child's first experiences with the water or teaching them advanced stroke technique, Inland Splash instructors have the passion and patience to make each lesson a rewarding one. Each member of our staff undergoes extensive in-house training, each sharing in the Inland Splash vision and are committed to the constant safety of each child. And of course, every instructor is certified as a Lifeguard and licensed in CPR.</p>
  </div>
  <div class="small-12 large-5 column large-pull-7" data-equalizer-watch>
    <ul class="small-block-grid-2">
      <li>
        <img class="headshot" src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/small-mobile/sue-nesbitt.png" alt="Sue Nesbitt" />
        <p class="uppercase headshot-caption"><strong>Sue Nesbitt</strong></p>
      </li>
      <li>
        <img class="headshot" src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/small-mobile/linda-hicks.png" alt="Linda Hicks" />
        <p class="uppercase headshot-caption"><strong>Linda Hicks</strong></p>
      </li>
    </ul>
  </div>
</div><div id="location" class="row" data-equalizer>
  <div class="small-12 large-6 column">
    <div class="row">
      <div id="our-pools" class="small-4 column" data-equalizer-watch>
        <h2 class="no-display">Our Pools</h2>
      </div>
      <div id="map-legend" class="small-8 column" data-equalizer-watch>
          <div class="row">
            <div class="small-3 column">
              <img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/vector/map-bullet-1.svg" alt="1" />
            </div>
            <div class="small-9 column">
              <ul id="map-legend-1" class="no-bullet">
                <li>Riverside Aquatic Complex</li>
                <li>Riverside City College</li>
                <li class="street-address">4800 Magnolia Avenue</li>
                <li><span class="locality">Riverside</span>, <span class="state">CA</span> <span class="zip">92506</span></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="small-3 column">
              <img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/vector/map-bullet-2.svg" alt="2" />
            </div>
            <div class="small-9 column">
              <ul id="map-legend-2" class="no-bullet">
                <li>Sippy Woodhead Pool</li>
                <li class="street-address">2060 University Avenue</li>
                <li><span class="locality">Riverside</span>, <span class="state">CA</span> <span class="zip">92507</span></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="small-3 column">
              <img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/vector/map-bullet-3.svg" alt="3" />
            </div>
            <div class="small-9 column">
              <ul id="map-legend-3" class="no-bullet">
                <li>Shamel Park Pool</li>
                <li class="street-address">3650 Arlington Avenue</li>
                <li><span class="locality">Riverside</span>, <span class="state">CA</span> <span class="zip">92506</span></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="small-12 large-6 column" data-equalizer-watch>
    <img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/vector/inland-splash-map-locations.svg" alt="Map of Inland Splash Pool locations in Riverside, CA" />
  </div>
</div>
<div id="calendar" class="row">
  <div class="small-12 column">
    <h2 class="hide-for-small-only" >Calendar:</h2>
      <div class="show-for-portrait">
        <a href="http://www.google.com/calendar/embed?src=inlandsplash%40remysaintjames.com&ctz=America/Los_Angeles" target="_blank"><img src="./wp-content/themes/inlandsplash--reverie-child--rnf/img/small-mobile/small-touch-calendar.png" /></a>
      </div>
      <div class="show-for-landscape">
       <iframe class="calendar show-for-small-only" src="https://www.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=2&amp;hl=en&amp;bgcolor=%23FFFFFF&amp;src=inlandsplash%40remysaintjames.com&amp;color=%232952A3&amp;src=remystjames.com_eie817sde8qlis4tgnemr074c8%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles" style=" border-width:0 " width="380" height="285" frameborder="0" scrolling="no"></iframe>
       <iframe class="calendar show-for-medium-only" src="https://www.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=2&amp;hl=en&amp;bgcolor=%23FFFFFF&amp;src=inlandsplash%40remysaintjames.com&amp;color=%232952A3&amp;src=remystjames.com_eie817sde8qlis4tgnemr074c8%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles" style=" border-width:0 " width="540" height="405" frameborder="0" scrolling="no"></iframe>
       <iframe class="calendar show-for-large-up" src="https://www.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=2&amp;hl=en&amp;bgcolor=%23FFFFFF&amp;src=inlandsplash%40remysaintjames.com&amp;color=%232952A3&amp;src=remystjames.com_eie817sde8qlis4tgnemr074c8%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles" style=" border-width:0 " width="925" height="694" frameborder="0" scrolling="no"></iframe>
      </div>
  </div>
</div>
<!-- end hard-coded content -->
	<div id="news-and-events" class="row" data-equalizer>
			<div class="entry-content">
				<?php the_content(); ?>
			</div>
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
