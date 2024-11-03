const refundsData = [
    {
        'order_id': '#281210',
        'status': 'Successful',
        'transaction_id': 'TRX123457',
        'refund_date': 'Today, 9:15 PM',
        'order_amount': '₹850.00'
    },
    {
        'order_id': '#281211',
        'status': 'Pending',
        'transaction_id': 'TRX123458',
        'refund_date': 'Tomorrow, 10:00 AM',
        'order_amount': '₹630.50'
    },
    {
        'order_id': '#281212',
        'status': 'Failed',
        'transaction_id': 'TRX123459',
        'refund_date': 'Today, 7:30 PM',
        'order_amount': '₹1500.00'
    },
    {
        'order_id': '#281213',
        'status': 'Successful',
        'transaction_id': 'TRX123460',
        'refund_date': 'Yesterday, 6:15 PM',
        'order_amount': '₹299.99'
    },
    {
        'order_id': '#281214',
        'status': 'Successful',
        'transaction_id': 'TRX123461',
        'refund_date': 'Today, 5:00 PM',
        'order_amount': '₹2000.00'
    },
    {
        'order_id': '#281215',
        'status': 'Successful',
        'transaction_id': 'TRX123462',
        'refund_date': 'Today, 4:00 PM',
        'order_amount': '₹720.75'
    },
    {
        'order_id': '#281216',
        'status': 'Pending',
        'transaction_id': 'TRX123463',
        'refund_date': 'Tomorrow, 1:30 PM',
        'order_amount': '₹980.00'
    },
    {
        'order_id': '#281217',
        'status': 'Failed',
        'transaction_id': 'TRX123464',
        'refund_date': 'Yesterday, 3:15 PM',
        'order_amount': '₹1,250.00'
    },
    {
        'order_id': '#281218',
        'status': 'Successful',
        'transaction_id': 'TRX123465',
        'refund_date': 'Today, 2:00 PM',
        'order_amount': '₹399.99'
    },
    {
        'order_id': '#281219',
        'status': 'Successful',
        'transaction_id': 'TRX123466',
        'refund_date': 'Today, 11:00 AM',
        'order_amount': '₹1,800.00'
    }
]


export const RefundsDashboard = () => {
    return (
        <div className="overflow-x-auto text-sm">
            <table className="table-fixed min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 font-semibold">
                        <th className="px-4 py-2 text-left w-1/5">Order ID</th>
                        <th className="px-4 py-2 text-left w-1/5">Status</th>
                        <th className="px-4 py-2 text-left w-1/5">Transaction ID</th>
                        <th className="px-4 py-2 text-left w-1/5">Refund Date</th>
                        <th className="px-4 py-2 text-right w-1/5">Order Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {refundsData.map((refund) => (
                        <tr key={refund.order_id} className="border-b">
                            <td className="px-4 py-2 text-left text-blue-900">{refund.order_id}</td>
                            <td className="px-4 py-2 text-left">
                                <div className="flex items-center">
                                    <div className={`w-2 h-2 ${
                                        refund.status == 'Successful' ? 'bg-green-500':
                                        refund.status == 'Failed' ? 'bg-red-500': 'bg-gray-500'
                                    } rounded-full mr-2`}></div>
                                    {refund.status}
                                </div>
                            </td>
                            <td className="px-4 py-2 text-left">{refund.transaction_id}</td>
                            <td className="px-4 py-2 text-left">{refund.refund_date}</td>
                            <td className="px-4 py-2 text-right">{refund.order_amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}