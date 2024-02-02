import * as customIcons from "../../lib/custom-icons";
import { transactionDetails } from "../../utils/appdata";
import BillComponent from "./BillComponent";
const Bills = () => {
  return (
    <section className="text-shadyLady mt-[30px]">
      <div className="w-full ">
        <h3 className="capitalize text-xs">today</h3>
        <BillComponent
          icon={<customIcons.IconDrip />}
          billType="water bill"
          status="unsuccessfully"
          price={250}
          isIncoming={false}
        />
      </div>

      <div className="w-full mt-4">
        <h3 className="capitalize text-xs">Yesterday</h3>

        {transactionDetails.map((details, index) => (
          <BillComponent
            key={index}
            icon={details.icon()}
            billType={details.billType}
            status={details.status}
            price={details.price}
            isIncoming={details.isIncoming}
            bg={details.bg}
          />
        ))}
      </div>
    </section>
  );
};

export default Bills;
