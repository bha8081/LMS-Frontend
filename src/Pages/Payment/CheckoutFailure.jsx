import { RxCrossCircled } from "react-icons/rx";
import HomeLayout from "../../Layouts/HomeLayout";
import { Link } from "react-router-dom";

function CheckoutFailure() {
    return (
        <HomeLayout>

            <div className="min-h-[90vh] flex items-center justify-center text-white">

                <div className="w-80 h-[28rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative">
                    
                    <h1 className="bg-red-500 w-full py-2 text-center absolute top-0 text-2xl font-bold rounded-tl-lg rounded-tr-lg"> 
                        Payment failed 
                    </h1>

                    <div className="py-4 flex flex-col items-center justify-center space-y-2">
                        <div className="text-center space-y-2">
                            <h2 className="text-xl font-bold">
                                Oops ! Your payment failed
                            </h2>
                            <p className="text-center text-lg font-semibold">
                                Please try again later
                            </p>

                        </div>

                        <RxCrossCircled className="text-red-500 text-5xl" />

                    </div>

                    <Link to="/checkout" className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full py-2 text-xl font-bold text-center cursor-pointer rounded-br-lg rounded-bl-lg">
                        <button> Try again </button>
                    </Link>

                </div>

            </div>

        </HomeLayout>
    )
    
}

export default CheckoutFailure;