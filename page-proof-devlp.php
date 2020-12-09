
<div id="proof-wrap">

    <?php
    /*   list developments */
   
   $catquery = new WP_Query('cat=1&posts_per_page=3');
   
    while ($catquery->have_posts()) : $catquery->the_post();

        
        ?>
 <ul>       
            <li><h2><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></h2></li>
			<li class="img_large_thumb"><?php the_post_thumbnail( 'large' ); ?></a></li>
            <li><?php the_content(); ?></li>
       
 </ul>
<?php endwhile; ?>

</div>

