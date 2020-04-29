select * from cart_items ci
join products p on ci.product_id = p.product_id
where ci.cart_id = $1
order by p.product_id;
