import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";
function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckOut } = useCheckout();
  return (
    <Button
      disabled={isCheckOut}
      onClick={() => checkOut(bookingId)}
      $variation="primary"
      $size="small"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
