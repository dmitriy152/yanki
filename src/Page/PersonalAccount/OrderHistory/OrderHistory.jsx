import { useEffect } from "react";
function OrderHistory (props){
    const { load, setLoad } = props;
    useEffect(() => {
        setLoad(true);
        return () => {
          setLoad(false);
        };
      }, []);

    return(
        <div className="order__history">
            История заказов
        </div>
    )
}
export default OrderHistory