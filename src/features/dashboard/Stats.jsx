import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  //1
  const numBookings = bookings?.length;
  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkins = confirmedStays?.length;
  const occupation = confirmedStays?.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );
  const rate = occupation / (numDays * cabinsCount);
  return (
    <>
      <Stat
        title={"Bookings"}
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      ></Stat>
      <Stat
        title={"Sales"}
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      ></Stat>
      <Stat
        title={"Check ins"}
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      ></Stat>
      <Stat
        title={"Occupancy Rate"}
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(rate * 100) + "%"}
      ></Stat>
    </>
  );
}

export default Stats;
