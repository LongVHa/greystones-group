<?php

/*

 * Template Name: Home

 * Description: custom home page with featured slider

 *

 */



get_header(); ?>

		<header class="entry-header">


		</header><!-- .entry-header -->

		<div id="primary_wrap">

		<div id="primary" class="content-area">

			<div id="content" class="site-content" role="main">

<div class="drkblue-bg">
Greystones is a specialist property investor, developer and asset manager.
<div>&nbsp;</div>
We focus on developing and refurbishing housing for the student rental market in the largest university cities outside of London. Our focus on student housing outside of London allows us to target a high value tenant demographic in financially accessible second tier cities.</div>
       
<?php echo do_shortcode('[metaslider id="37"]'); ?>

<div id="drkblue-bg-home">We offer a strong track record in transforming undervalued real estate into high quality, high yield housing, minimizing outlay while maximizing returns. It’s a rare and highly prized combination of skills ideally suited to help investors’ with differing investment capital to secure valuable landed assets.</div>


			</div><!-- #content .site-content -->

		</div><!-- #primary .content-area -->

	 
<div class="entry-content">
</div>
	</div>

<?php get_footer(); ?>