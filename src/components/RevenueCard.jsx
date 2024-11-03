export const RevenueCard = ({title, amount, orderCount, active=false}) => {
    return (
        <div>
            <div className={active ? "bg-dukaan-active-blue text-white rounded-t-md shadow-md p-5" : "rounded-md shadow-md p-5"}>
                <div className={active ? "flex text-white" : "flex text-gray-600"}>
                    <p className="pr-1">{title}</p>
                    <div className="pl-1 pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between pt-2">
                    <div className="font-semibold text-2xl">₹ {amount}</div>
                    {orderCount? <div className={`flex flex-col justify-center cursor-pointer underline font-medium ${active ? '' : 'text-blue-700'}`}>
                        <div className="flex">
                            {orderCount} Order(s) 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>:null}
                </div>
            </div>
            {active && (
                <div className="bg-dukaan-active-darkblue text-white text-sm rounded-b-md">
                    <div className="flex justify-between px-7 py-2">
                        <div>Next Payment Date:</div>
                        <div>Today, 4:00PM</div>
                    </div>
                </div>
            )}
        </div>
    )
}