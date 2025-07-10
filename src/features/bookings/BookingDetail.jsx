import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useNavigate, useParams } from "react-router-dom";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiTrash,
} from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Empty from "../../ui/Empty";
const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { bookingId } = useParams();
  const { booking, isLoading } = useBooking();
  const { checkOut, isCheckOut } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();

  const navigate = useNavigate();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner></Spinner>;
  if (!booking) return <Empty resource="booking"></Empty>;
  const status = booking.status;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Modal>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button
            $icon={<HiArrowDownOnSquare />}
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check in
          </Button>
        )}
        <Button $variation="secondary" onClick={moveBack}>
          Back
        </Button>
        {status === "checked-in" && (
          <Button
            disabled={isCheckOut}
            $icon={<HiArrowUpOnSquare />}
            onClick={() => checkOut(bookingId)}
          >
            Check Out
          </Button>
        )}

        <Modal.Open opens="delete">
          <Button $icon={<HiTrash />} $variation={"danger"}>
            Delete
          </Button>
        </Modal.Open>
      </ButtonGroup>

      <Modal.Window name="delete">
        <ConfirmDelete
          disabled={isDeleting}
          onConfirm={() => {
            deleteBooking(bookingId);
          }}
          resourceName="bookings"
        >
          Delete
        </ConfirmDelete>
      </Modal.Window>
    </Modal>
  );
}

export default BookingDetail;
