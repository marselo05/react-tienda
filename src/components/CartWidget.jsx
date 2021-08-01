import cart from './../cart.svg';

function CartWidget() {
  return (
    <div className="cont-cart">
		<img src={cart}  alt="cart" />
	</div>
  );
}

export default CartWidget;