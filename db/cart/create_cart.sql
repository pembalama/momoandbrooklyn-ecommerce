insert into customer_cart (
    customer_id,
    paid
) values (
    $1,
    false
)
returning cart_id, paid;