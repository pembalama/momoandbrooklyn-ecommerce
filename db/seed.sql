create table customers (
    customer_id serial primary key,
    email varchar(150) not null,
    password varchar(250) not null
);

create table products (
    product_id serial primary key,
    name varchar(50) not null,
    image varchar(250) not null,
    description text,
    price decimal not null
);

create table customer_cart (
    cart_id serial primary key,
    customer_id int references customers(customer_id),
    paid boolean
);

create table cart_items (
    cart_item_id serial primary key,
    cart_id int references customer_cart(cart_id),
    product_id int references products(product_id),
    qty int,
    price decimal
);

-- insert into products (
--     name,
--     image,
--     description,
--     price
-- ) values (
--     'Red Jacket',
--     'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1547146139/product-image/2078M_11_d.jpg',
--     'windproof and waterproof jacket',
--     250
-- )
-- insert into products (
--     name,
--     image,
--     description,
--     price
-- ) values (
--     '',
--     '',
--     '',
    
-- )