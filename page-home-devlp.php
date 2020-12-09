<div id="devlp-wrap">

<?php /*   list developments */
$catquery = new WP_Query( 'cat=1&posts_per_page=3' );

while($catquery->have_posts()) : $catquery->the_post();

?>

<ul>
<li><h3><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h3></li>
<a href="<?php the_permalink() ?>" rel="bookmark"><?php the_post_thumbnail( 'home_large' ); ?></a>
<li>
<?php 
	$custom_excerpt = get_post_custom_values('excerpt');
	
	foreach($custom_excerpt as $the_excerpt){

			echo $the_excerpt;		
	}
?>
</i>


</ul>


<?php endwhile; ?>
</div>    