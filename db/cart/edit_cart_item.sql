update cart_items
set qty =$2
where cart_item_id =$1;
-- select * from cart_items