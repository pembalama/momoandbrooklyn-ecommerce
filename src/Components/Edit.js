import React, { useState } from 'react';

const Edit = ({ item, editCartItem, deleteCartItem }) => {
	const [toggle, setToggle] = useState(false);
	const [qty, setQty] = useState(item.qty);
	console.log(toggle);
	return (
		<div>
			<div className="product-container">
				<img src={item.image} alt={item.name} className="product-image" />
				<p>{item.name}</p>
				<p>${item.price * item.qty}</p>
				<p>
					qty:{' '}
					{toggle ? (
						<input
							name="qty"
							value={qty}
							onChange={e => setQty(e.target.value)}
						/>
					) : (
						item.qty
					)}
				</p>
				{toggle ? (
					<button
						onClick={() => {
							setToggle(!toggle);
							editCartItem(item, qty);
						}}
					>
						Save
					</button>
				) : (
					<button onClick={() => setToggle(!toggle)}>Edit</button>
				)}
				<button onClick={() => deleteCartItem(item.cart_item_id)}>
					Delete
				</button>
			</div>
		</div>
	);
};
export default Edit;
