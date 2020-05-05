import React, { useState } from 'react';
import './Edit.scss';

const Edit = ({ item, editCartItem, deleteCartItem }) => {
	const [toggle, setToggle] = useState(false);
	const [qty, setQty] = useState(item.qty);
	console.log(toggle);
	return (
		<div className="main-container">
			<div className="cart-container">
				<div className="two-col">
					<img src={item.image} alt={item.name} className="product-image" />
				</div>
				<div className="two-col">
					<p className="item-name">{item.name}</p>

					<p className="item-price">${item.price}</p>
					<p className="item-qty">
						Qty:{' '}
						{toggle ? (
							<input
								type="number"
								name="qty"
								value={qty}
								onChange={e => setQty(e.target.value)}
								className="qtn-input"
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
							className="save-btn"
						>
							Save
						</button>
					) : (
						<button onClick={() => setToggle(!toggle)} className="edit-btn">
							Edit
						</button>
					)}
					<button
						onClick={() => deleteCartItem(item.cart_item_id)}
						className="delete-btn"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};
export default Edit;
